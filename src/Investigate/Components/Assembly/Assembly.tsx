import { useEffect, useState } from "react";
import { RuxContainer } from "@astrouxds/react";
import Lens from "./SVG/Lens.svg";
import Baffle from "./SVG/Baffle.svg";
import DetectionModule from "./SVG/DetectionModule.svg";
import ThermoElectric from "./SVG/ThermoElectric.svg";
import Detector from "./SVG/Detector.svg";
import Electronics from "./SVG/Electronics.svg";
import Default from "./SVG/Default.svg";
import Cytoscape from "react-cytoscapejs";
import { Core, StylesheetCSS } from "cytoscape";
import { useAppContext, ContextType } from "../../../provider/useAppContext";

type ElementObject = {
  status: string;
  label: string;
};

const statusColor = {
  off: "#a4abb6",
  normal: "#56f000",
  standby: "#2dccff",
  caution: "#fce83a",
  serious: "#ffb302",
  critical: "#ff3838",
};

const backgroundImg = {
  Lens,
  Baffle,
  "Detection Module": DetectionModule,
  "Thermo-Electric Cooler": ThermoElectric,
  Detector,
  Electronics,
};

const getColor = ({ status }: ElementObject) => {
  return statusColor[status as keyof typeof statusColor] || statusColor.off;
};

const getBackground = ({ label }: ElementObject) => {
  return backgroundImg[label as keyof typeof backgroundImg] || Default;
};

const Assembly = () => {
  const [cy, setCy] = useState<Core | null>(null);
  const { selectAssemblyDevice, selectedChildSubsystem }: ContextType =
    useAppContext();

  const positionArr: object[] = [
    { x: 120, y: 195 },
    { x: 390, y: 150 },
    { x: 625, y: 250 },
    { x: 830, y: 120 },
    { x: 1020, y: 250 },
    { x: 1285, y: 165 },
  ];

  const elementsArr = selectedChildSubsystem.assemblyDevices
    .map(({ name, status }, index) => ({
      data: {
        id: index,
        label: name,
        status: status,
      },
      position: positionArr[index] || { x: 0, y: 0 },
    }))
    .filter((el) => el.data.id < 6);

  const edgesArr = [
    {
      data: {
        source: 0,
        target: 1,
      },
    },
    {
      data: {
        source: 1,
        target: 2,
      },
    },
    {
      data: {
        source: 2,
        target: 3,
      },
    },
    {
      data: {
        source: 2,
        target: 4,
      },
    },
    {
      data: {
        source: 3,
        target: 5,
      },
    },
    {
      data: {
        source: 4,
        target: 5,
      },
    },
  ];

  const newEdges = edgesArr.filter(
    (edge) =>
      edge.data.source < elementsArr.length &&
      edge.data.target < elementsArr.length
  );

  const cyArr: any[] = [...elementsArr, ...newEdges];

  const styles: StylesheetCSS[] = [
    //svg background
    {
      selector: "node",
      css: {
        "background-image": (node: any) => getBackground(node.data()),
        "background-image-containment": "over",
        "bounds-expansion": "48.5px 0 0 0",
        "background-clip": "none",
        shape: "round-diamond",
        "background-color": (node: any) => getColor(node.data()),
        "border-color": (node: any) => getColor(node.data()),
        "background-image-opacity": 0.85,
        height: "130%",
        width: "210%",
        opacity: 0.75,
        "border-width": "4px",
      },
    },
    //actions
    {
      selector: "node.hover",
      css: {
        "border-color": "#FFF",
      },
    },
    //remove default overlay
    {
      selector: "node:active",
      css: {
        "overlay-opacity": 0,
        opacity: 1,
      },
    },
    //add hover effect
    {
      selector: "node:selected",
      css: {
        "border-color": "#FFF",
        opacity: 1,
      },
    },
    //label text
    {
      selector: "node[label]",
      css: {
        label: "data(label)",
        "font-size": "16",
        color: "white",
        "text-halign": "center",
        "text-valign": "bottom",
        "text-margin-y": 7,
      },
    },
    //lines between the nodes
    {
      selector: "edge",
      css: {
        "curve-style": "taxi",
        "line-style": "solid",
        "taxi-turn-min-distance": "15px",
        "source-distance-from-node": 3,
        "target-distance-from-node": 3,
        width: 1.5,
      },
    },
    //the cooler icon needs location adjustment in the node
    {
      selector: 'node[label="Thermo-Electric Cooler"]',
      css: {
        "background-offset-y": -30,
      },
    },
    //the electronics icon needs location adjustment in the node
    {
      selector: 'node[label="Electronics"]',
      css: {
        "background-offset-y": -12,
        "background-offset-x": 1,
      },
    },
    //the detector icon needs location adjustment in the node
    {
      selector: 'node[label="Detector"]',
      css: {
        "background-offset-y": -10,
      },
    },
  ];

  useEffect(() => {
    if (!cy) return;

    const resize = () => {
      // cy.style({ selector: "Core", css: { "bounds-expansion": "" } });
      cy.layout({ name: "preset", fit: true }).run();
      cy.ready(() => cy.resize());
    };

    window.addEventListener("resize", resize);

    const findAssemblyDeviceByName = (name: string) =>
      selectedChildSubsystem.assemblyDevices.find(
        (device) => device?.name === name
      );

    const handleClick = (e: any) => {
      const assemblyDevice = findAssemblyDeviceByName(e.target.data("label"));
      if (!assemblyDevice) return;
      selectAssemblyDevice(assemblyDevice);
    };

    cy.on("click", "node", handleClick);
    cy.on("mouseout", "node", function (e: any) {
      e.target.removeClass("hover");
      (cy.container() as any).style.cursor = "initial";
    });
    cy.on("mouseover", "node", function (e: any) {
      e.target.addClass("hover");
      (cy.container() as any).style.cursor = "pointer";
    });
    cy.on("data", () => {
      cy.nodes().deselect();
      cy.nodes()[0].select();
      resize();
    });

    cy.on("mouseout", "node", () => {
      const popup = document.querySelector("rux-pop-up");
      popup?.remove();
    });

    return () => {
      window.removeEventListener("resize", resize);
      cy.removeAllListeners();
    };
  }, [cy, selectAssemblyDevice, selectedChildSubsystem.assemblyDevices]);

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">{selectedChildSubsystem?.name}</div>
      <Cytoscape
        autoungrabify
        userPanningEnabled={false}
        boxSelectionEnabled={false}
        elements={cyArr}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
        stylesheet={styles}
        layout={{ name: "preset" }}
        cy={setCy}
      />
    </RuxContainer>
  );
};

export default Assembly;
