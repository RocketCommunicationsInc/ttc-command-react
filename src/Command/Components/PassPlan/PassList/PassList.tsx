import {
  RuxCheckbox,
  RuxProgress,
  RuxTree,
  RuxTreeNode,
} from "@astrouxds/react";

const PassList = () => {
  return (
    <>
      <RuxTree>
        <RuxTreeNode>
          <div className="rux-tree-node_prefix" slot="prefix">
            1
          </div>
          <div className="rux-tree-node_content">
            <RuxCheckbox />A nice hat
          </div>
          <RuxTreeNode slot="node">
            <div className="rux-tree-content">Children</div>
          </RuxTreeNode>
        </RuxTreeNode>
      </RuxTree>

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
    </>
  );
};

export default PassList;
