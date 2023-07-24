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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./PrePassList.css"

type PropTypes = {
  setPass: Dispatch<SetStateAction<string>>;
}

const PrePassList = ({setPass}: PropTypes) => {
  const [aimState, setAimState] = useState<boolean>(false)
  const [sarmState, setSarmState] = useState<boolean>(false)
  const [lockState, setLockState] = useState<boolean>(false)
  const [aosState, setAosState] = useState<boolean>(false)
  const [vccState, setVccState] = useState<boolean>(false)
  const [passPlanState, setPassPlanState] = useState<boolean>(false)
  let [currentListItem, setCurrentListItem] = useState<number>(0)

  useEffect(() => {
    const stateFunctionArray = [setAimState, setSarmState, setLockState, setAosState, setVccState, setPassPlanState];
    const ruxProgress: HTMLRuxProgressElement[] = Array.from(document.querySelectorAll('rux-progress.pre-pass_progress'))!;
    if (currentListItem === stateFunctionArray.length) {
      setPass('Pass')
      return;
    }
    let value: number = 0
      setInterval(() => {
        if (value === 101) return;
        
        ruxProgress[currentListItem].value = value
        value = value + 1
      }, 5)
      setTimeout(() =>{
        stateFunctionArray[currentListItem](true)
        setCurrentListItem(currentListItem + 1)
      }, 1000)
      return;
  }, [currentListItem, setPass])

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
            AIM = { aimState === false ? 'PENDING' : 'CONNECTED' }
            <RuxProgress className="pre-pass_progress" hideLabel={true} />
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
              SARM = { sarmState === false ? 'PENDING' : 'CONNECTED' }
              <RuxProgress className="pre-pass_progress" hideLabel={true} />
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
              LOCK = { lockState === false ? 'PENDING' : 'CONNECTED' }
              <RuxProgress className="pre-pass_progress" hideLabel={true} />
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
            AOS = { aosState === false ? 'PENDING' : 'CONNECTED' }
            <RuxProgress className="pre-pass_progress" hideLabel={true} />
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
            VCC = { vccState === false ? 'PENDING' : 'CONNECTED' }
            <RuxProgress className="pre-pass_progress" hideLabel={true} />
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
            PASS PLAN = { passPlanState === false ? 'PENDING' : 'CONNECTED' }
            <RuxProgress className="pre-pass_progress" hideLabel={true} />
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
          <RuxProgress className="pre-pass_progress" slot="suffix" hideLabel={true} value={60} />
          <RuxTreeNode slot="node">
            <div className="rux-tree-content">Children</div>
          </RuxTreeNode>
        </RuxTreeNode>
      </RuxTree> */}
    </>
  );
};

export default PrePassList;
