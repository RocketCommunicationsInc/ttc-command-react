import { RuxContainer } from "@astrouxds/react";
import CytoscapeComponent from "react-cytoscapejs";
import { Styles, Layout } from "./CytoScapeStyles";
import { useAppContext, ContextType } from "../../../provider/useAppContext";
import { useEffect, useRef, useState } from "react";
import { getRandomInt } from "utils";
import { ChildSubsystem } from "@astrouxds/mock-data";

const Assembly = () => {
  const {
    selectAssemblyDevice,
    selectedChildSubsystem,
    selectedAssemblyDeviceName,
  }: ContextType = useAppContext();
  const [childSubsystem, setChildSubsystem] = useState<ChildSubsystem | null>(
    null
  );

  const cyRef = useRef<any>(null);

  const findAssemblyDeviceByName = (name: string) =>
    selectedChildSubsystem.assemblyDevices.find(
      (device) => device?.name === name
    );

  const handleClick = (e: any) => {
    const assemblyDevice = findAssemblyDeviceByName(e.target.data("label"));
    if (!assemblyDevice) return;
    selectAssemblyDevice(assemblyDevice);
  };

  //compare our subsystem to our stored array, if different set the new array
  if (
    JSON.stringify(childSubsystem) !== JSON.stringify(selectedChildSubsystem)
  ) {
    console.log("changed?");
    setChildSubsystem(selectedChildSubsystem);
  }

  //now that we have subsystem in a state we can use it to generate nodes and edges
  useEffect(() => {
    console.log("changed!");
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
    cy.layout(Layout).run();
    cy.ready(() => cy.resize());
    cy.fit();
  }, [childSubsystem]);

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

  useEffect(() => {
    if (!selectedAssemblyDeviceName) return;
    cyRef.current.nodes().deselect();
    cyRef.current.$(`node[label="${selectedAssemblyDeviceName}"]`).select();
  }, [selectedAssemblyDeviceName]);

  return (
    <RuxContainer className="star-tracker">
      <div slot="header">{selectedChildSubsystem?.name}</div>
      <div style={{ width: 1200, height: 400, maxWidth: "100%" }}>
        <CytoscapeComponent
          elements={[]}
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
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
      </div>
    </RuxContainer>
  );
};

export default Assembly;
