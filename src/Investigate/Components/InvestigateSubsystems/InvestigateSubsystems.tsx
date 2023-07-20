import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
  RuxButton,
} from "@astrouxds/react";
import "./InvestigateSubsystems.css";
import type { Subsystem } from '@astrouxds/mock-data'


type PropTypes = {
  toggleInvestigate: () => void
  satName: string
  subsystems: Subsystem[];
};

const InvestigateSubsystems = ({
  toggleInvestigate,
  satName,
  subsystems
}: PropTypes) => {

  return (
    <RuxContainer className="investigate-subsystem">
      <div slot="header">{satName} Subsystems</div>
      <RuxTree>
        {subsystems.map(subsystem => (
          <RuxTreeNode>
            <RuxStatus slot="prefix" status={subsystem.status} />
            {subsystem.name}
            {subsystem.childSubsystems.map(child => (
              <RuxTreeNode slot="node">
                <RuxStatus slot="prefix" status={child.status} />
                {child.name}
              </RuxTreeNode>
            ))}
          </RuxTreeNode>))       
        }
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

export default InvestigateSubsystems;
