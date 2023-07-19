import {
  RuxContainer,
  RuxTree,
  RuxTreeNode,
  RuxStatus,
} from "@astrouxds/react";

const InvestigateSubsystems = () => {
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
    </RuxContainer>
  );
};

export default InvestigateSubsystems;
