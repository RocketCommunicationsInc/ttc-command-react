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
import { StylesheetCSS } from "cytoscape";

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

//Programatic styles for nodes
export const Styles: StylesheetCSS[] = [
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

export const Layout = {
  name: "cose",

  animate: false,
  directed: false,
  padding: 15, // padding on fit
  circle: false, // put depths in concentric circles if true, put depths top down if false
  grid: true, // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: true, // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: undefined, // the roots of the trees
  depthSort: undefined, // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
};
