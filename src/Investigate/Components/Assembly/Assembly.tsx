import { RuxContainer } from "@astrouxds/react";
import { useEffect } from "react";
import Lens from "./SVG/Lens.svg";
import Baffle from "./SVG/Baffle.svg";
import DetectionModule from "./SVG/DetectionModule.svg";
import ThermoElectric from "./SVG/ThermoElectric.svg";
import Detector from "./SVG/Detector.svg";
import Electronics from "./SVG/Electronics.svg";
import Default from "./SVG/Default.svg";
import CytoscapeComponent from "react-cytoscapejs";
import { StylesheetCSS } from "cytoscape";
import type { ChildSubsystem, AssemblyDevice } from "@astrouxds/mock-data";

type PropTypes = {
  setSelectedAssemblyDevice: React.Dispatch<
    React.SetStateAction<AssemblyDevice>
  >;
  selectedChildSubsystem: ChildSubsystem;
};

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

const Assembly = ({
  setSelectedAssemblyDevice,
  selectedChildSubsystem,
}: PropTypes) => {
  useEffect(() => {
    setSelectedAssemblyDevice(selectedChildSubsystem.assemblyDevices[0]);
  }, [selectedChildSubsystem, setSelectedAssemblyDevice]);

  const findAssemblyDeviceByName = (name: string) =>
    selectedChildSubsystem.assemblyDevices.find(
      (device) => device.name === name
    );

  const positionArr: object[] = [
    { x: 120, y: 190 },
    { x: 390, y: 140 },
    { x: 625, y: 235 },
    { x: 840, y: 126 },
    { x: 1100, y: 235 },
    { x: 1285, y: 126 },
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

  const usedEdges = () => {
    const newEdges = edgesArr.filter(
      (edge) =>
        edge.data.source < elementsArr.length &&
        edge.data.target < elementsArr.length
    );
    return newEdges;
  };

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

  const cyArr: any[] = [...elementsArr, ...usedEdges()];

  //Programatic styles for nodes
  const styles: StylesheetCSS[] = [
    //svg background
    {
      selector: "node",
      css: {
        "background-image": (node: any) => getBackground(node.data()),
        "background-image-containment": "over",
        "bounds-expansion": "200px 0 0 0",
        "background-clip": "none",
        shape: "round-diamond",
        "background-color": (node: any) => getColor(node.data()),
        "border-color": (node: any) => getColor(node.data()),
        "background-image-opacity": 0.85,
        height: "150%",
        width: "230%",
        "background-width-relative-to": "inner",
        "background-height-relative-to": "inner",
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
    //lines between the squares
    {
      selector: "edge",
      css: {
        "curve-style": "taxi",
        "line-style": "solid",
        "taxi-turn-min-distance": "10px",
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

  const handleClick = (e: any) => {
    const assemblyDevice = findAssemblyDeviceByName(e.target.data("label"));
    if (assemblyDevice) setSelectedAssemblyDevice(assemblyDevice);
  };

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">{selectedChildSubsystem.name}</div>
      <CytoscapeComponent
        elements={cyArr}
        style={{ width: "100%", height: "100%" }}
        stylesheet={styles}
        zoomingEnabled={false}
        panningEnabled={false}
        boxSelectionEnabled={false}
        cy={(cy: any) => {
          cy.on("click", "node", handleClick);
          cy.on("mouseout", "node", function (e: any) {
            e.target.removeClass("hover");
            cy.container().style.cursor = "initial";
          });
          cy.on("mouseover", "node", function (e: any) {
            e.target.addClass("hover");
            cy.container().style.cursor = "pointer";
          });
          cy.on("data", () => {
            cy.nodes().deselect();
            cy.nodes()[0].select();
          });
        }}
      />
    </RuxContainer>
  );
};

export default Assembly;
