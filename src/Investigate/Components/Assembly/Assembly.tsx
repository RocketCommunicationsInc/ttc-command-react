import { RuxContainer } from "@astrouxds/react";
import Lens from "./SVG/Lens.svg";
import Baffle from "./SVG/Baffle.svg";
import DetectionModule from "./SVG/DetectionModule.svg";
import ThermoElectric from "./SVG/ThermoElectric.svg";
import Detector from "./SVG/Detector.svg";
import Electronics from "./SVG/Electronics.svg";
import CytoscapeComponent from "react-cytoscapejs";
import { StylesheetCSS } from "cytoscape";

import "./Assembly.css";

type PropTypes = {
  onSvgClick: (label: string) => void;
};

type StatusColor = {
  status: string;
};

const statusColor = {
  off: "#a4abb6",
  normal: "#56f000",
  standby: "#2dccff",
  caution: "#fce83a",
  serious: "#ffb302",
  critical: "#ff3838",
};

const getColor = ({ status }: StatusColor) => {
  return statusColor[status as keyof typeof statusColor] || statusColor.off;
};

const Assembly = ({ onSvgClick }: PropTypes) => {
  const elements = [
    {
      data: {
        id: "one",
        label: "Lens",
        backgroundImage: Lens,
        status: "normal",
      },
      position: { x: 120, y: 125 },
    },
    {
      data: {
        id: "two",
        label: "Baffle",
        backgroundImage: Baffle,
        status: "normal",
      },
      position: { x: 390, y: 125 },
    },
    {
      data: {
        source: "one",
        target: "two",
        label: "Edge from Lens to Baffle",
      },
    },

    {
      data: {
        id: "three",
        label: "Detection Module",
        backgroundImage: DetectionModule,
        status: "caution",
      },
      position: { x: 625, y: 230 },
    },
    {
      data: {
        source: "two",
        target: "three",
        label: "Edge from Baffle to Detection Module",
      },
    },

    {
      data: {
        id: "four",
        label: "Detector",
        backgroundImage: Detector,
        status: "serious",
      },
      position: { x: 800, y: 85 },
    },
    {
      data: {
        id: "five",
        label: "Thermo-Electric Cooler",
        backgroundImage: ThermoElectric,
        status: "critical",
      },
      position: { x: 975, y: 230 },
    },
    {
      data: {
        source: "three",
        target: "four",
        label: "Edge from Detection to Detector",
      },
    },
    {
      data: {
        source: "three",
        target: "five",
        label: "Edge from Detection to Thermo-Electric Cooler",
      },
    },
    {
      data: {
        id: "six",
        label: "Electronics",
        backgroundImage: Electronics,
        status: "standby",
      },
      position: { x: 1285, y: 125 },
    },
    {
      data: {
        source: "four",
        target: "six",
        label: "Edge from Detor to Electronics",
      },
    },
    {
      data: {
        source: "five",
        target: "six",
        label: "Edge from Thermo-Electric Cooler to Electronics",
      },
    },
  ];

  //These are the styles for the nodes. they contain specific programatic styles for 'status' and for some of the more odd svg backgrounds
  const styles: StylesheetCSS[] = [
    //svg background
    {
      selector: "node",
      css: {
        "background-image": "data(backgroundImage)",
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
    {
      selector: "node:active",
      css: {
        "overlay-opacity": 0,
        opacity: 1,
      },
    },
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
        "text-margin-y": 5,
      },
    },
    //lines between the squares
    {
      selector: "edge",
      css: {
        "curve-style": "taxi",
        "taxi-turn-min-distance": "10px",
        "source-distance-from-node": 9,
        "target-distance-from-node": 9,
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
    onSvgClick(e.target.data("label"));
  };

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">Sar Trackers Assembly</div>
      <CytoscapeComponent
        elements={elements}
        style={{ width: "100%", height: "100%" }}
        stylesheet={styles}
        zoomingEnabled={false}
        panningEnabled={false}
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
        }}
      />
    </RuxContainer>
  );
};

export default Assembly;
