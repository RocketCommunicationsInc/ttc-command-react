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
          <div className="pre-pass_cell-item-number">
              1
            </div>
          </RuxTableCell>
          <RuxTableCell>
            <div className="pre-pass_cell-wrapper-content">
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
            </div>
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
          <div className="pre-pass_cell-item-number">
              2
            </div>
          </RuxTableCell>
          <RuxTableCell>
            <div className="pre-pass_cell-wrapper-content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
              <RuxProgress hideLabel={true} value={60} />
            </div>
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
          <div className="pre-pass_cell-item-number">
              3
            </div>
          </RuxTableCell>
          <RuxTableCell>
            <div className="pre-pass_cell-wrapper-content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
              <RuxProgress hideLabel={true} value={60} />
            </div>
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            <div className="pre-pass_cell-item-number">
              4
            </div>
          </RuxTableCell>
          <RuxTableCell>
            <div className="pre-pass_cell-wrapper-content">
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
            </div>
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
          <div className="pre-pass_cell-item-number">
              5
            </div>
          </RuxTableCell>
          <RuxTableCell>
            <div className="pre-pass_cell-wrapper-content">
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
            </div>
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
          <div className="pre-pass_cell-item-number">
              6
            </div>
          </RuxTableCell>
          <RuxTableCell>
            <div className="pre-pass_cell-wrapper-content">
            <RuxCheckbox />
            Verify MNEMONIC = ON
            <RuxProgress hideLabel={true} value={60} />
            </div>
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
