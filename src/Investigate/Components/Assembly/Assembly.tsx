import { RuxContainer } from "@astrouxds/react";
import Lens from "./SVG/Lens.svg";
import Baffle from "./SVG/Baffle.svg";
import DetectionModule from "./SVG/DetectionModule.svg";
import ThermoElectric from "./SVG/ThermoElectric.svg";
import Detector from "./SVG/Detector.svg";
import Electronics from "./SVG/Electronics.svg";
import Default from "./SVG/Default.svg";
import Oscillator from "./SVG/Oscillator.svg";
import Receiver from "./SVG/Receiver.svg";
import Transmitter from "./SVG/Transmitter.svg";
import FrequencyConverter from "./SVG/FrequencyConverter.svg";
import CytoscapeComponent from "react-cytoscapejs";
import { StylesheetCSS } from "cytoscape";
import { useAppContext, ContextType } from "../../../provider/useAppContext";
import { useEffect, useRef, useMemo } from "react";
import { getRandomInt } from "utils";

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
  "Frequency Converter": FrequencyConverter,
  Receiver,
  Transmitter,
  "Local Oscillator": Oscillator,
};

const getColor = ({ status }: ElementObject) => {
  return statusColor[status as keyof typeof statusColor] || statusColor.off;
};

const getBackground = ({ label }: ElementObject) => {
  return backgroundImg[label as keyof typeof backgroundImg] || Default;
};

const Assembly = () => {
  const { selectAssemblyDevice, selectedChildSubsystem }: ContextType =
    useAppContext();

  const cyRef = useRef<any>(null);

  const findAssemblyDeviceByName = (name: string) =>
    selectedChildSubsystem.assemblyDevices.find(
      (device) => device?.name === name
    );

  //Programatic styles for nodes
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
      selector:
        'node[label="Thermo-Electric Cooler"], node[label="Frequency Converter"]',
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
    //the transmitter icon needs location adjustment in the node
    {
      selector: 'node[label="Transmitter"]',
      css: {
        "background-offset-y": -40,
        "background-offset-x": 25,
      },
    },
    //the receiver icon needs location adjustment in the node
    {
      selector: 'node[label="Receiver"]',
      css: {
        "background-offset-y": -40,
        "background-offset-x": -25,
      },
    },
  ];

  const handleClick = (e: any) => {
    const assemblyDevice = findAssemblyDeviceByName(e.target.data("label"));
    if (!assemblyDevice) return;
    selectAssemblyDevice(assemblyDevice);
  };

  const layout = useMemo(
    () => ({
      name: "breadthfirst",

      fit: true, // whether to fit the viewport to the graph
      directed: false,
      padding: 0, // padding on fit
      circle: false, // put depths in concentric circles if true, put depths top down if false
      grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
      spacingFactor: 0.9, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: true, // Excludes the label when calculating node bounding boxes for the layout algorithm
      roots: undefined, // the roots of the trees
      depthSort: undefined, // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
    }),
    []
  );

  useEffect(() => {
    //this is going to randomize nodes connect to which
    const randomEdges = (elements: any[]) => {
      let edgesArray: any[] = [];
      elements.forEach((element, index) => {
        //we don't need the last element to have outgoing edges
        if (index === elements.length - 1) return;

        //generate number of lines either up to 2 or 1 for the penultimate node
        const numberEdges =
          index === elements.length - 2 ? 1 : getRandomInt(3, 1);
        //for each edge make it connect forward in the array
        for (let i = 1; i <= numberEdges; i++) {
          const edge = {
            data: {
              source: index,
              target: index + i,
            },
          };
          edgesArray.push(edge);
        }
      });
      return edgesArray;
    };

    const elementsArr = selectedChildSubsystem.assemblyDevices.map(
      ({ name, status }, index) => ({
        data: {
          id: index,
          label: name,
          status: status,
        },
      })
    );
    console.log("run!");
    const newEdges = randomEdges(elementsArr);
    cyRef.current.elements().remove();
    cyRef.current.add([...elementsArr, ...newEdges]);
    cyRef.current.layout(layout).run();
    cyRef.current.ready(() => cyRef.current.resize());
    cyRef.current.fit();
  }, [selectedChildSubsystem, layout]);

  useEffect(() => {
    const resize = () => {
      if (cyRef.current) {
        cyRef.current.center();
        cyRef.current.fit();
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">{selectedChildSubsystem?.name}</div>
      <CytoscapeComponent
        elements={[]}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
        stylesheet={styles}
        autoungrabify
        boxSelectionEnabled={false}
        userPanningEnabled={false}
        layout={layout}
        cy={(cy: any) => {
          cyRef.current = cy;
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
