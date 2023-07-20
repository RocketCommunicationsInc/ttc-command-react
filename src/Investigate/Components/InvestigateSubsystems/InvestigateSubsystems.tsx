import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
  RuxButton,
} from "@astrouxds/react";
import "./InvestigateSubsystems.css";
import { generateContact } from "@astrouxds/mock-data";

const InvestigateSubsystems = ({
  handleAppSwap,
}: {
  handleAppSwap: () => void;
}) => {
  const subsystems = generateContact(0, {
    desiredSubsystems: [
      "Altitude",
      "Payload",
      "Power",
      "Propulsion",
      "Thermal",
    ],
  }).subsystems;
  console.log(subsystems);

  return (
    <RuxContainer className="investigate-subsystem">
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
        <RuxButton
          borderless
          icon="keyboard-arrow-left"
          onClick={handleAppSwap}
        >
          Return to Command
        </RuxButton>
      </div>
    </RuxContainer>
  );
};

export default InvestigateSubsystems;
