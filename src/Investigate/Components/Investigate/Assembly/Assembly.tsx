import { RuxContainer } from "@astrouxds/react";
import CytoscapeComponent from "react-cytoscapejs";

type PropTypes = {
  childSubsystem: string;
};

const Assembly = ({ childSubsystem }: PropTypes) => {
  const elements = [
    { data: { id: "one", label: "Lens" }, position: { x: 100, y: 150 } },
    { data: { id: "two", label: "Baffle" }, position: { x: 250, y: 150 } },
    {
      data: { source: "one", target: "two", label: "Edge from Lens to Baffle" },
    },

    {
      data: { id: "three", label: "Detection Module" },
      position: { x: 450, y: 150 },
    },
    {
      data: {
        source: "two",
        target: "three",
        label: "Edge from Baffle to Detection Module",
      },
    },

    { data: { id: "four", label: "Detector" }, position: { x: 650, y: 75 } },
    {
      data: { id: "five", label: "Thermo-Electric Cooler" },
      position: { x: 650, y: 250 },
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

    { data: { id: "six", label: "Electronics" }, position: { x: 850, y: 150 } },
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
    //label square
    {
      selector: "node",
      style: {
        "background-color": "#92cbff",
        width: "label",
        height: "label",
        padding: "30px",
        shape: "rectangle",
      },
    },
    //label text
    {
      selector: "node[label]",
      style: {
        label: "data(label)",
        "font-size": "12",
        color: "black",
        "text-halign": "center",
        "text-valign": "center",
      },
    },
    //lines between the squares
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        width: 1.5,
      },
    },
  ] as any;

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">{childSubsystem}</div>
      <CytoscapeComponent
        elements={elements}
        style={{ width: "100%", height: "100%" }}
        stylesheet={styles}
        zoomingEnabled={false}
        panningEnabled={false}
      />
    </RuxContainer>
  );
};

export default Assembly;
