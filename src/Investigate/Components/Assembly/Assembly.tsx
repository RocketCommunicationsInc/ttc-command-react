import { RuxContainer } from "@astrouxds/react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import { Styles } from "./CytoScapeStyles";
//@ts-ignore
import dagre from "cytoscape-dagre";
import { useAppContext, ContextType } from "../../../provider/useAppContext";
import { useEffect, useMemo, useRef, useState } from "react";
import { getRandomInt } from "utils";

cytoscape.use(dagre);

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
  }: ContextType = useAppContext();
  const [childSubsystem, setChildSubsystem] =
    useState<ChildSubsystemNoMnemonics | null>(null);

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

  //compare our subsystem to our stored array, if different set the new array
  if (
    JSON.stringify(childSubsystem) !== JSON.stringify(subsytemWithoutMnuemonics)
  ) {
    setChildSubsystem(subsytemWithoutMnuemonics);
  }

  const cyRef = useRef<any>(null);

  const findAssemblyDeviceByName = (name: string) =>
    childSubsystem!.assemblyDevices.find((device) => device?.name === name);

  const handleClick = (e: any) => {
    const assemblyDevice = findAssemblyDeviceByName(e.target.data("label"));
    if (!assemblyDevice) return;
    selectAssemblyDevice(assemblyDevice);
  };

  const width = cyRef.current
    ? cyRef.current.container().getBoundingClientRect().width
    : 1200;
  const height = cyRef.current
    ? cyRef.current.container().getBoundingClientRect().height
    : 300;
  console.log(width, height);

  const Layout = useMemo(
    () => ({
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
      fit: false,
    }),
    [width, height]
  );

  //now that we have subsystem in a state we can use it to generate nodes and edges
  useEffect(() => {
    const cy = cyRef.current;

    const elements = childSubsystem
      ? childSubsystem.assemblyDevices.map(({ name, status }, index) => ({
          data: {
            id: index,
            label: name,
            status: status,
          },
        }))
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

    cy.elements().remove();
    cy.add([...elements, ...randomEdges(elements)]);
    if (selectedAssemblyDeviceName) {
      cy.nodes().deselect();
      cy.$(`node[label="${selectedAssemblyDeviceName}"]`).select();
    }
    cy.layout(Layout).run();
    cy.resize();
  }, [childSubsystem, Layout, selectedAssemblyDeviceName]);

  useEffect(() => {
    const resize = () => {
      if (cyRef.current) {
        cyRef.current.layout(Layout).run();
        cyRef.current.center();

        cyRef.current.resize();
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [Layout]);

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">{selectedChildSubsystem?.name}</div>
      <CytoscapeComponent
        elements={[]}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          minHeight: 200,
          minWidth: 200,
        }}
        stylesheet={Styles}
        autoungrabify
        boxSelectionEnabled={false}
        userPanningEnabled={false}
        layout={Layout}
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
          cy.on("resize", function () {
            cyRef.current.fit();
          });
        }}
      />
    </RuxContainer>
  );
};

export default Assembly;
