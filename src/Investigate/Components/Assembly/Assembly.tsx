import { RuxContainer } from "@astrouxds/react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import { cytoscapeTheme } from "./CytoScapeStyles";
import dagre from "cytoscape-dagre";
import { useAppContext, ContextType } from "../../../provider/useAppContext";
import { useEffect, useRef, useState } from "react";
import { getRandomInt } from "utils";

cytoscape.use(dagre);
cytoscape({ headless: false });

type ChildSubsystemNoMnemonics = {
  name: string;
  status: string;
  subsystemParent: string;
  assemblyDevices: any[];
};

const Assembly = () => {
  const {
    selectAssemblyDevice,
    selectedChildSubsystem,
    selectedAssemblyDeviceName,
    lightTheme,
  }: ContextType = useAppContext();
  const [childSubsystem, setChildSubsystem] =
    useState<ChildSubsystemNoMnemonics | null>(null);
  const [cyElements, setCyElements] = useState<any>(null);
  const cyRef = useRef<any>(null);
  const theme = cytoscapeTheme(lightTheme);

  const subsytemWithoutMnuemonics = selectedChildSubsystem
    ? {
        name: selectedChildSubsystem.name,
        status: selectedChildSubsystem.status,
        subsystemParent: selectedChildSubsystem.subsystemParent,
        assemblyDevices: [
          ...selectedChildSubsystem.assemblyDevices.map((device) => ({
            name: device.name,
            status: device.status,
            childSubsystemParent: device.childSubsystemParent,
          })),
        ],
      }
    : null;

  const width = cyRef.current
    ? cyRef.current.container().getBoundingClientRect().width
    : 1200;

  const height = cyRef.current
    ? cyRef.current.container().getBoundingClientRect().height
    : 300;

  const layout = {
    name: "dagre",
    align: "UL",
    rankDir: "LR",
    boundingBox: {
      x1: 0,
      y1: 0,
      h: 500 > height && height >= 200 ? height : 300,
      w: width >= 1200 ? width : 1200,
    }, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    nodeDimensionsIncludeLabels: true,
    fit: true,
  };

  //compare our subsystem to our stored array, if different set the new array
  if (
    JSON.stringify(childSubsystem) !== JSON.stringify(subsytemWithoutMnuemonics)
  ) {
    setChildSubsystem(subsytemWithoutMnuemonics);

    const elements = subsytemWithoutMnuemonics
      ? subsytemWithoutMnuemonics.assemblyDevices.map(
          ({ name, status }, index) => ({
            data: {
              id: index,
              label: name,
              status: status,
            },
          })
        )
      : [];

    const randomEdges = (elements: any[]) => {
      let edgesArray: any[] = [];
      elements.forEach((_, index) => {
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
    setCyElements([...elements, ...randomEdges(elements)]);
  }

  useEffect(() => {
    if (!cyRef.current) return;
    cyRef.current.layout(layout).run();
    cyRef.current.resize();
  }, [cyElements]);

  useEffect(() => {
    if (selectedAssemblyDeviceName && cyRef.current) {
      cyRef.current.nodes().deselect();
      cyRef.current.$(`node[label="${selectedAssemblyDeviceName}"]`).select();
    }
  }, [selectedAssemblyDeviceName]);

  const findAssemblyDeviceByName = (name: string) =>
    childSubsystem!.assemblyDevices.find((device) => device?.name === name);

  const handleClick = (e: any) => {
    const assemblyDevice = findAssemblyDeviceByName(e.target.data("label"));
    if (!assemblyDevice) return;
    selectAssemblyDevice(assemblyDevice);
  };

  const resize = () => {
    if (cyRef.current) {
      cyRef.current.layout(layout).run();
      cyRef.current.center();
      cyRef.current.resize();
    }
  };

  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current;
      cy.container().classList.add("cytoscape-container");
      cy.on("click", "node", handleClick);
      cy.on("mouseout", "node", function (e: any) {
        e.target.removeClass("hover");
        cy.container().style.cursor = "initial";
      });
      cy.on("mouseover", "node", function (e: any) {
        e.target.addClass("hover");
        cy.container().style.cursor = "pointer";
      });
      cy.on("resize", function () {
        cy.fit();
      });
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">{selectedChildSubsystem?.name}</div>
      <CytoscapeComponent
        elements={cyElements}
        stylesheet={theme}
        autoungrabify
        boxSelectionEnabled={false}
        userPanningEnabled={false}
        layout={layout}
        cy={(cy: any) => {
          cyRef.current = cy;
        }}
      />
    </RuxContainer>
  );
};

export default Assembly;
