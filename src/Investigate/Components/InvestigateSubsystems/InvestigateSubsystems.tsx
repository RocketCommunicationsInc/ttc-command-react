import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
  RuxButton,
} from "@astrouxds/react";
import { useState } from "react";
import './InvestigateSubsystems.css'

const InvestigateSubsystems = () => {
  const [investigatePanelActive, setInvestigatePanelActive] = useState<boolean>(false)
  const handleReturnToCommandClick = () => {
    setInvestigatePanelActive(() => !investigatePanelActive)
    const investigatePanelElement = document.querySelector('.investigate-background')!;
    const commandPanelElement = document.querySelector('.command-background')!;

    investigatePanelActive ? investigatePanelElement?.setAttribute('data-active', 'true') : investigatePanelElement.setAttribute('data-active', 'false')
    !investigatePanelActive ? commandPanelElement?.setAttribute('data-active', 'true') : commandPanelElement.setAttribute('data-active', 'false')
  }

  return (
    <RuxContainer className="investigate-subsystem" data-active={investigatePanelActive}>
      <div slot="header">Iron 4090 Subsystems</div>
      <RuxTree>
        <RuxTreeNode>
          <RuxStatus slot="prefix" status="serious" />
          Altitude
          <RuxTreeNode slot="node">
            <RuxStatus slot="prefix" status="serious" />
            Star Tracker
          </RuxTreeNode>
          <RuxTreeNode slot="node">
            <RuxStatus slot="prefix" status="serious" />
            Earth Sensors
          </RuxTreeNode>
          <RuxTreeNode slot="node">
            <RuxStatus slot="prefix" status="serious" />
            Reaction Wheels
          </RuxTreeNode>
          <RuxTreeNode slot="node">
            <RuxStatus slot="prefix" status="serious" />
            Sun Sensors
          </RuxTreeNode>
        </RuxTreeNode>
        <RuxTreeNode>
          <RuxStatus slot="prefix" status="serious" />
          Payload
        </RuxTreeNode>
        <RuxTreeNode>
          <RuxStatus slot="prefix" status="serious" />
          Power
        </RuxTreeNode>
        <RuxTreeNode>
          <RuxStatus slot="prefix" status="serious" />
          Propulsion
        </RuxTreeNode>
        <RuxTreeNode>
          <RuxStatus slot="prefix" status="serious" />
          Thermal
        </RuxTreeNode>
      </RuxTree>
      <div className="subsystems_footer" slot="footer">
        <RuxButton borderless icon="keyboard-arrow-left" onClick={handleReturnToCommandClick}>
          Return to Command
        </RuxButton>
      </div>
    </RuxContainer>
  );
};

export default InvestigateSubsystems;
