import {
  RuxCheckbox,
  RuxProgress,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableHeader,
  RuxTableHeaderCell,
  RuxTableHeaderRow,
  RuxTableRow,
  RuxTree,
  RuxTreeNode,
} from "@astrouxds/react";
import "./PrePassList.css"

const PrePassList = () => {
  return (
    <>
    <RuxTable className="pre-pass-list-table">
      <RuxTableHeader>
        <RuxTableHeaderRow>
          <RuxTableHeaderCell>
            Step
          </RuxTableHeaderCell>
          <RuxTableHeaderCell>
            Instruction
          </RuxTableHeaderCell>
        </RuxTableHeaderRow>
      </RuxTableHeader>
      <RuxTableBody>
        <RuxTableRow>
          <RuxTableCell>
            1
          </RuxTableCell>
          <RuxTableCell>
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            1
          </RuxTableCell>
          <RuxTableCell>
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            2
          </RuxTableCell>
          <RuxTableCell>
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            3
          </RuxTableCell>
          <RuxTableCell>
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            4
          </RuxTableCell>
          <RuxTableCell>
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            5
          </RuxTableCell>
          <RuxTableCell>
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
          </RuxTableCell>
        </RuxTableRow>
      </RuxTableBody>
    </RuxTable>
      {/* <RuxTree>
        <RuxTreeNode>
          <div className="rux-tree-node_prefix" slot="prefix">
            1
          </div>
          <div className="rux-tree-node_content">
            <RuxCheckbox />
            Verify MNEMONIC = ON
          </div>
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
      </RuxTree> */}
    </>
  );
};

export default PrePassList;
