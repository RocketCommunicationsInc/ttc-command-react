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
import dark from "@astrouxds/tokens/dist/json-nested/base.system.json";
import light from "@astrouxds/tokens/dist/json-nested/theme.light.json";

type ElementObject = {
  status: string;
  label: string;
};

export const cytoscapeTheme = (lightTheme: boolean) => {
  const theme = lightTheme ? light : dark;

  const statusColor = {
    off: theme.color.status.off,
    normal: theme.color.status.normal,
    standby: theme.color.status.standby,
    caution: theme.color.status.caution,
    serious: theme.color.status.serious,
    critical: theme.color.status.critical,
  };

  const getColor = ({ status }: ElementObject) => {
    return statusColor[status as keyof typeof statusColor] || statusColor.off;
  };

  const getBackground = ({ label }: ElementObject) => {
    return backgroundImg[label as keyof typeof backgroundImg] || Default;
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
        "border-color": theme.color.text.primary,
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
        "border-color": theme.color.text.primary,
        opacity: 1,
      },
    },
    //label text
    {
      selector: "node[label]",
      css: {
        label: "data(label)",
        "font-size": "16",
        color: theme.color.text.primary,
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

  return styles;
};
