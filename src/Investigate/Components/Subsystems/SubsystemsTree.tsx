import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
} from "@astrouxds/react";
import "./SubsystemsTree.css";

import { useAppContext, ContextType } from "../../../provider/useAppContext";
import { useEffect, useRef } from "react";

const SubsystemsTree = () => {
  const {
    contact,
    selectChildSubsystem,
    selectedChildSubsystem,
    selectAssemblyDevice,
    selectedAssemblyDeviceName,
    selectedSubsystem,
  }: ContextType = useAppContext();
  const tree = useRef<HTMLRuxTreeElement | null>(null);

  const subsystems = contact.subsystems;
  const satName = contact.satellite;

  //we need to make sure that the correct node is selected
  useEffect(() => {
    if (!tree.current) return;
    const treeNodes = Array.from(
      tree.current.querySelectorAll("rux-tree-node")
    );
    const selectedElement = treeNodes.find((treeItem) => {
      // const treeItemID = treeItem.id;
      // const parentItemID = treeItem.parentElement
      //   ? treeItem.parentElement.id
      //   : null;
      // const grandparentItemID = treeItem.parentElement?.parentElement
      // ? treeItem.parentElement.parentElement.id
      // : null;
      // console.log(selectedAssemblyDeviceName);
      if (selectedAssemblyDeviceName) {
        return (
          treeItem.id ===
            `deviceSubsystem${selectedAssemblyDeviceName.replace(
              /\s+/g,
              ""
            )}` &&
          treeItem.parentElement?.id ===
            `childSubsystem${selectedChildSubsystem.name.replace(
              /\s+/g,
              ""
            )}` &&
          treeItem.parentElement.parentElement?.id ===
            `subsystem${selectedSubsystem.name.replace(/\s+/g, "")}`
        );
      } else return null;
    });
    if (selectedElement && !selectedElement?.hasAttribute("selected")) {
      if (selectedElement.ariaLevel === "1") {
        selectedElement.setSelected(true);
        selectedElement.setExpanded(true);
      }
      const parentElement =
        selectedElement.parentElement as HTMLRuxTreeNodeElement;
      const grandparentElement =
        parentElement.parentElement as HTMLRuxTreeNodeElement;
      selectedElement.setSelected(true);
      parentElement?.setExpanded(true);
      grandparentElement?.setExpanded(true);
    }
  }, [selectedAssemblyDeviceName, selectedChildSubsystem, selectedSubsystem]);

  return (
    <RuxContainer className="investigate-subsystem">
      <div slot="header">{satName} Subsystems</div>
      <RuxTree ref={tree}>
        {subsystems.map((subsystem, index) => (
          <RuxTreeNode
            // expanded={selectedSubsystem.name === subsystem.name}
            id={`subsystem${subsystem.name}`}
            key={index}
          >
            <RuxStatus slot="prefix" status={subsystem.status} />
            {subsystem.name}
            {subsystem.childSubsystems.map((child, index) => {
              return (
                <RuxTreeNode
                  id={"childSubsystem" + child.name.replace(/\s+/g, "")}
                  key={index}
                  slot="node"
                  onRuxtreenodeselected={(e) => {
                    if (e.target !== e.currentTarget) return;
                    selectChildSubsystem(child);
                    selectAssemblyDevice(child.assemblyDevices[0]);
                  }}
                >
                  <RuxStatus slot="prefix" status={child.status} />
                  {child.name}

                  {child.assemblyDevices.map((device, index) => {
                    return (
                      <RuxTreeNode
                        id={"deviceSubsystem" + device.name.replace(/\s+/g, "")}
                        key={index}
                        slot="node"
                        onRuxtreenodeselected={() => {
                          selectChildSubsystem(child);
                          selectAssemblyDevice(device);
                          // check;
                        }}
                      >
                        <RuxStatus slot="prefix" status={device.status} />
                        {device.name}
                      </RuxTreeNode>
                    );
                  })}
                </RuxTreeNode>
              );
            })}
          </RuxTreeNode>
        ))}
      </RuxTree>
    </RuxContainer>
  );
};

export default SubsystemsTree;
