import { RuxContainer } from "@astrouxds/react";
import Lens from "./SVG/Lens.svg";
import Baffle from "./SVG/Baffle.svg";
import DetectionModule from "./SVG/DetectionModule.svg";
import ThermoElectric from "./SVG/ThermoElectric.svg";
import Detector from "./SVG/Detector.svg";
import Electronics from "./SVG/Electronics.svg";
import CytoscapeComponent from "react-cytoscapejs";

import "./Assembly.css";

type PropTypes = {
  onSvgClick: (selectedLabel: string) => void;
};

const Assembly = ({ onSvgClick }: PropTypes) => {
  const elements = [
    {
      data: { id: "one", label: "Lens", backgroundImage: Lens },
      position: { x: 115, y: 125 },
    },
    {
      data: { id: "two", label: "Baffle", backgroundImage: Baffle },
      position: { x: 375, y: 125 },
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
      },
      position: { x: 600, y: 215 },
    },
    {
      data: {
        source: "two",
        target: "three",
        label: "Edge from Baffle to Detection Module",
      },
    },

    {
      data: { id: "four", label: "Detector", backgroundImage: Detector },
      position: { x: 800, y: 75 },
    },
    {
      data: {
        id: "five",
        label: "Thermo-Electric Cooler",
        backgroundImage: ThermoElectric,
      },
      position: { x: 975, y: 215 },
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
      data: { id: "six", label: "Electronics", backgroundImage: Electronics },
      position: { x: 1275, y: 125 },
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

  const styles = [
    //svg background
    {
      selector: "node",
      style: {
        "background-image": (node: any) => node.data("backgroundImage"),
        "background-size": "contain",
        // "background-repeat": "no-repeat",
        "bounds-expansion": "200px 30 17 30",
        "background-clip": "none",
        shape: "roundrectangle",
        "background-color": "#172635",
        transform: "rotate(50deg)",
        height: "148%",
        width: "170%",
      },
    },
    {
      selector: "node:hover",
      style: {
        cursor: "pointer",
      },
    },
    //label text
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        "font-size": "16",
        color: "white",
        "text-halign": "center",
        "text-valign": "bottom",
        // "text-margin-y": "2px",
        // "border-width": "3px",
        // "border-color": "white",
        margin: "-2px",
        transform: "rotate(90deg)",
      },
    },
    {
      selector: 'node[label="Thermo-Electric Cooler"]',
      style: {
        "text-margin-y": "25px",
      },
    },
    //lines between the squares
    {
      selector: "edge",
      style: {
        "curve-style": "taxi",
        "edge-distances": "10px",
        //"taxi-turn-min-distance": "35px",
        // "control-point-distance": "5px",
        width: 1.5,
      },
    },
  ] as any;

  const handleClick = (e: any) => {
    const selectedLabel = e.target.data("label");
    onSvgClick(selectedLabel);
  };

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">Star Trackers Assembly</div>
      <CytoscapeComponent
        elements={elements}
        style={{ width: "100%", height: "100%" }}
        stylesheet={styles}
        zoomingEnabled={false}
        panningEnabled={false}
        cy={(cy: {
          on: (arg0: string, arg1: string, arg2: (e: any) => void) => void;
        }) => {
          cy.on("click", "node", handleClick);
        }}
      />
    </RuxContainer>
  );
};
export default Assembly;
