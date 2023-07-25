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
  onSvgClick: (selectedLabel: string) => void;
};

const Assembly = ({ onSvgClick }: PropTypes) => {
  const elements = [
    {
      data: { id: "one", label: "Lens", backgroundImage: Lens },
      position: { x: 120, y: 125 },
    },
    {
      data: { id: "two", label: "Baffle", backgroundImage: Baffle },
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
      },
      position: { x: 625, y: 225 },
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
      position: { x: 975, y: 225 },
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
        "background-color": "#56f000",
        "background-image-opacity": 0.85,
        height: "150%",
        width: "230%",
        "background-width-relative-to": "inner",
        "background-height-relative-to": "inner",
        opacity: 0.75,
      },
    },
    {
      selector: "node[label]:active",
      css: {
        "overlay-opacity": 0,
        opacity: 1,
      },
    },
    {
      selector: "node[label].highlight",
      css: {
        "border-color": "#FFF",
        "border-width": "4px",
      },
    },
    //when node is selected
    {
      selector: "node:selected",
      css: {
        "border-color": "#FFF",
        "border-width": "4px",
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
    {
      selector: 'node[label="Thermo-Electric Cooler"]',
      css: {
        "background-color": "#fce83a",
        "background-opacity": 0.75,
        "background-offset-y": -30,
      },
    },
    {
      selector: 'node[label="Electronics"]',
      css: {
        "background-color": "#ff3838",
        "background-opacity": 0.75,
        "background-offset-y": -12,
        "background-offset-x": 1,
      },
    },
    //lines between the squares
    {
      selector: "edge",
      css: {
        "curve-style": "taxi",
        "taxi-turn-min-distance": "10px",
        "source-distance-from-node": 10,
        "target-distance-from-node": 10,
        width: 1.5,
      },
    },
  ];

  const handleClick = (e: any) => {
    onSvgClick(e.target.data("label"));
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
        cy={(cy: any) => {
          cy.on("click", "node", handleClick);
          cy.on("mouseout", "node", function (e: any) {
            e.target.removeClass("highlight");
            cy.container().style.cursor = "initial";
          });
          cy.on("mouseover", "node", function (e: any) {
            e.target.addClass(".highlight");
            cy.container().style.cursor = "pointer";
          });
        }}
      />
    </RuxContainer>
  );
};
export default Assembly;
