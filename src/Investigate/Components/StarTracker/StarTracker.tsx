import { RuxContainer } from "@astrouxds/react";
import CytoscapeComponent from "react-cytoscapejs";
import SVG from "./SVG";

const StarTracker = () => {
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
        // "background-image": `(${Test})`,
        "background-fit": "contain",
        "background-width": "100%",
        "background-height": "100%",
      },
      // "background-color": "#92cbff",
      //   "background-image":
      //     "https://duckduckgo.com/?q=dogs&atb=v372-1&iax=images&ia=images&iai=https%3A%2F%2Fwww.thesprucepets.com%2Fthmb%2F9kt-VX_FY7bxJh6w4fqukRaiplU%3D%2F5121x3414%2Ffilters%3Afill(auto%2C1)%2Faustralian-cattle-dog-portrait-523096669-5873e59e5f9b584db35cdf58.jpg",
      //   width: "label",
      //   height: "label",
      //   padding: "30px",
      //   shape: "rectangle",
      // },
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

  //   elements.push({
  //     data: {
  //       id: "test",
  //       label: "svg Background",
  //       parent: "one",
  //     },
  //     position: {x: 20, y: 50},
  //     group: 'nodes',
  //     classes: 'background-image',
  //     style: {
  //       'background-image' : `(${SVG})`,
  //       'background-fit': 'contain',
  //       'background-width': '100%',
  // 'background-height': '100%'
  //     }
  //   })

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">Star Tracker Assembly</div>
      <SVG />
      {/* <CytoscapeComponent
        elements={elements}
        style={{ width: "100%", height: "100%" }}
        stylesheet={styles}
        zoomingEnabled={false}
        panningEnabled={false}
        // cy={(cy) => {
        //   cy.add({
        //     data: {
        //       id: "test",
        //       image: "Test",
        //       label: "Lens",
        //     },
        //   });
        // }}
      /> */}
    </RuxContainer>
  );
};

export default StarTracker;
