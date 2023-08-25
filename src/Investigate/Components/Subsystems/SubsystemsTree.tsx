import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
} from "@astrouxds/react";
import "./SubsystemsTree.css";

import { useAppContext, ContextType } from "../../../provider/useAppContext";

const SubsystemsTree = () => {
  const {
    contact,
    selectedChildSubsystem,
    selectChildSubsystem,
    selectedSubsystem,
  }: ContextType = useAppContext();

  const subsystems = contact.subsystems;
  const satName = contact.satellite;

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
                  selected={child === selectedChildSubsystem}
                  onRuxtreenodeselected={() => {
                    selectChildSubsystem(child);
                  }}
                >
                  <RuxStatus slot="prefix" status={child.status} />
                  {child.name}
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
