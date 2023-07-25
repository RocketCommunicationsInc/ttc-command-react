import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
  RuxButton,
} from "@astrouxds/react";
import "./SubsystemsTree.css";
import type { ChildSubsystem, Subsystem } from "@astrouxds/mock-data";

type PropTypes = {
  toggleInvestigate: () => void;
  setSelectedChildSubsystem: React.Dispatch<
    React.SetStateAction<ChildSubsystem>
  >;
  satName: string;
  subsystems: Subsystem[];
  selectedSubsystem: Subsystem;
  selectedChildSubsystem: ChildSubsystem;
};

const SubsystemsTree = ({
  toggleInvestigate,
  setSelectedChildSubsystem,
  satName,
  subsystems,
  selectedSubsystem,
  selectedChildSubsystem,
}: PropTypes) => {
  return (
    <RuxContainer className="investigate-subsystem">
      <div slot="header">{satName} Subsystems</div>
      <RuxTree>
        {subsystems.map((subsystem, index) => (
          <RuxTreeNode
            expanded={selectedSubsystem.name === subsystem.name}
            key={index}
          >
            <RuxStatus slot="prefix" status={subsystem.status} />
            {subsystem.name}
            {subsystem.childSubsystems.map((child, index) => (
              <RuxTreeNode
                key={index}
                slot="node"
                selected={child === selectedChildSubsystem}
                onRuxtreenodeselected={() => setSelectedChildSubsystem(child)}
              >
                <RuxStatus slot="prefix" status={child.status} />
                {child.name}
              </RuxTreeNode>
            ))}
          </RuxTreeNode>
        ))}
      </RuxTree>
      <div className="subsystems_footer" slot="footer">
        <RuxButton
          borderless
          icon="keyboard-arrow-left"
          onClick={toggleInvestigate}
        >
          Return to Command
        </RuxButton>
      </div>
    </RuxContainer>
  );
};

export default SubsystemsTree;
