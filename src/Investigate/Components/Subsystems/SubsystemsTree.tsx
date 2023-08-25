import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
} from "@astrouxds/react";
import "./SubsystemsTree.css";

import { useAppContext, ContextType } from "../../../provider/useAppContext";
import { AssemblyDevice, ChildSubsystem } from "@astrouxds/mock-data";

const SubsystemsTree = () => {
  const {
    contact,
    selectedChildSubsystem,
    selectChildSubsystem,
    selectAssemblyDevice,
    resetSelected,
    selectedSubsystem,
  }: ContextType = useAppContext();

  const subsystems = contact.subsystems;
  const satName = contact.satellite;

  const handleSelected = (
    childSubsystem: ChildSubsystem,
    assemblyDevice: AssemblyDevice
  ) => {
    console.log(childSubsystem, assemblyDevice);
    selectAssemblyDevice(assemblyDevice);
  };

  return (
    <RuxContainer className="investigate-subsystem">
      <div slot="header">{satName} Subsystems</div>
      <RuxTree>
        {subsystems.map((subsystem, index) => (
          <RuxTreeNode
            expanded={selectedSubsystem.name === subsystem.name}
            id={`subsystem ${subsystem.name}`}
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
                  onRuxtreenodeselected={() => {
                    selectChildSubsystem(child);
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
                          handleSelected(child, device);
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
