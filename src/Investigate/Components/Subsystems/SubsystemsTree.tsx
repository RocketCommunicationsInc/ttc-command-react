import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
  RuxButton,
} from "@astrouxds/react";
import "./SubsystemsTree.css";
import type { Subsystem } from "@astrouxds/mock-data";

type PropTypes = {
  toggleInvestigate: () => void;
  setChildSubsystem: React.Dispatch<React.SetStateAction<string>>;
  satName: string;
  subsystems: Subsystem[];
};

const SubsystemsTree = ({
  toggleInvestigate,
  setChildSubsystem,
  satName,
  subsystems,
}: PropTypes) => {
  return (
    <RuxContainer className="investigate-subsystem">
      <div slot="header">{satName} Subsystems</div>
      <RuxTree>
        {subsystems.map((subsystem, index) => (
          <RuxTreeNode>
            <RuxStatus slot="prefix" status={subsystem.status} />
            {subsystem.name}
            {subsystem.childSubsystems.map((child, index) => (
              <RuxTreeNode
                slot="node"
                onRuxtreenodeselected={() => setChildSubsystem(child.name)}
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
