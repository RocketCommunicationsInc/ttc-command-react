import {
  RuxContainer,
  RuxOption,
  RuxSelect,
  RuxTree,
  RuxTreeNode,
  RuxCheckbox,
  RuxProgress,
  RuxInput,
  RuxButton,
} from "@astrouxds/react";
import "./PassPlan.css";

const Constellation = () => {
  return (
    <RuxContainer className="pass-plan">
      <div slot="header" className="header">
        <span>IRON 4090 PASS PLAN</span>
        <RuxSelect size="small" label="Mode">
          <RuxOption label="Semi-Auto" value="" />
          <RuxOption label="Automatic" value="" />
        </RuxSelect>
      </div>
      <div className="banner">Pre-Pass</div>
      <div className="rux-tree-header">
        <span>Step</span>
        <span>Instruction</span>
      </div>
      <li className="pass-plan-list">
        <RuxTree>
          <RuxTreeNode>
            <div className="rux-tree-node_prefix" slot="prefix">
              1
            </div>
            <div className="rux-tree-node_content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
            </div>
            <RuxTreeNode slot="node">
              <div className="rux-tree-content">Children</div>
            </RuxTreeNode>
          </RuxTreeNode>
        </RuxTree>
      </li>
      <li className="pass-plan-list">
        <RuxTree>
          <RuxTreeNode>
            <div className="rux-tree-node_prefix" slot="prefix">
              2
            </div>
            <div className="rux-tree-node_content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
            </div>
            <RuxTreeNode slot="node">
              <div className="rux-tree-content">Children</div>
            </RuxTreeNode>
          </RuxTreeNode>
        </RuxTree>
      </li>
      <li className="pass-plan-list">
        <RuxTree>
          <RuxTreeNode>
            <div className="rux-tree-node_prefix" slot="prefix">
              3
            </div>
            <div className="rux-tree-node_content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
            </div>
            <RuxProgress slot="suffix" hideLabel={true} value={60} />
            <RuxTreeNode slot="node">
              <div className="rux-tree-content">Children</div>
            </RuxTreeNode>
          </RuxTreeNode>
        </RuxTree>
      </li>
      <div slot="footer">
        <RuxInput
          type="search"
          placeholder="Start typing to search commands..."
        />
        <RuxButton>Add to Queue</RuxButton>
      </div>
    </RuxContainer>
  );
};

export default Constellation;
