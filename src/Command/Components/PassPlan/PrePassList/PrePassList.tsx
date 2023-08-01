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
import "./PrePassList.css";

type PropTypes = {
  setPass: Dispatch<SetStateAction<string>>;
};

const PrePassList = ({ setPass }: PropTypes) => {
  const [aimState, setAimState] = useState<string>("PENDING");
  const [sarmState, setSarmState] = useState<string>("PENDING");
  const [lockState, setLockState] = useState<string>("PENDING");
  const [aosState, setAosState] = useState<string>("PENDING");
  const [vccState, setVccState] = useState<string>("PENDING");
  const [passPlanState, setPassPlanState] = useState<string>("PENDING");
  let [currentListItem, setCurrentListItem] = useState<number>(0);

  useEffect(() => {
    // Grab an array of the state functions for each table row, their progress bars and checkboxes
    const stateFunctionArray = [
      setAimState,
      setSarmState,
      setLockState,
      setAosState,
      setVccState,
      setPassPlanState,
    ];
    const ruxProgress: HTMLRuxProgressElement[] = Array.from(
      document.querySelectorAll("rux-progress.pre-pass_progress")
    )!;
    const ruxCheckbox: HTMLRuxCheckboxElement[] = Array.from(
      document.querySelectorAll("rux-checkbox.pre-pass_checkbox")
    )!;

    // if the current list item is the length of the state function array, set the pass from 'pre-pass' into 'pass'
    if (currentListItem === stateFunctionArray.length) {
      setPass("Pass");
      return;
    }

    // every 7 milliseconds for each progress bar, set the progress value from 0-100 (filling the bar)
    let value: number = 0;
    const loadBar = () => {
      if (value > 100) {
        clearInterval(progressInterval);
      } else {
        ruxProgress[currentListItem].value = value;
        value = value + 1;
      }
    };

    const progressInterval = setInterval(loadBar, 10);

    //for each list item, wait the allotted time and then set the checkbox to checked and the text to complete.
    setTimeout(() => {
      stateFunctionArray[currentListItem]("CONNECTED");
      ruxCheckbox[currentListItem].checked = true;

      // if on the last item, wait a little longer to make sure the user can see the state change to 'complete' before swapping to 'pass'
      if (currentListItem === stateFunctionArray.length - 1) {
        setTimeout(() => {
          setCurrentListItem(currentListItem + 1);
        }, 300);
      } else {
        setCurrentListItem(currentListItem + 1);
      }
    }, 1500);
    return;
  }, [currentListItem, setPass]);

  return (
    <>
      <RuxTable className="pre-pass-list-table">
        <RuxTableHeader>
          <RuxTableHeaderRow>
            <RuxTableHeaderCell>Step</RuxTableHeaderCell>
            <RuxTableHeaderCell>Instruction</RuxTableHeaderCell>
          </RuxTableHeaderRow>
        </RuxTableHeader>
        <RuxTableBody>
          <RuxTableRow>
            <RuxTableCell>
              <div className="pre-pass_cell-item-number">1</div>
            </RuxTableCell>
            <RuxTableCell>
              <div className="pre-pass_cell-wrapper-content">
                <RuxCheckbox className="pre-pass_checkbox" />
                AIM = {aimState}
                <RuxProgress className="pre-pass_progress" hideLabel={true} />
              </div>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <div className="pre-pass_cell-item-number">2</div>
            </RuxTableCell>
            <RuxTableCell>
              <div className="pre-pass_cell-wrapper-content">
                <RuxCheckbox className="pre-pass_checkbox" />
                SARM = {sarmState}
                <RuxProgress className="pre-pass_progress" hideLabel={true} />
              </div>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <div className="pre-pass_cell-item-number">3</div>
            </RuxTableCell>
            <RuxTableCell>
              <div className="pre-pass_cell-wrapper-content">
                <RuxCheckbox className="pre-pass_checkbox" />
                LOCK = {lockState}
                <RuxProgress className="pre-pass_progress" hideLabel={true} />
              </div>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <div className="pre-pass_cell-item-number">4</div>
            </RuxTableCell>
            <RuxTableCell>
              <div className="pre-pass_cell-wrapper-content">
                <RuxCheckbox className="pre-pass_checkbox" />
                AOS = {aosState}
                <RuxProgress className="pre-pass_progress" hideLabel={true} />
              </div>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <div className="pre-pass_cell-item-number">5</div>
            </RuxTableCell>
            <RuxTableCell>
              <div className="pre-pass_cell-wrapper-content">
                <RuxCheckbox className="pre-pass_checkbox" />
                VCC = {vccState}
                <RuxProgress className="pre-pass_progress" hideLabel={true} />
              </div>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <div className="pre-pass_cell-item-number">6</div>
            </RuxTableCell>
            <RuxTableCell>
              <div className="pre-pass_cell-wrapper-content">
                <RuxCheckbox className="pre-pass_checkbox" />
                PASS PLAN = {passPlanState}
                <RuxProgress className="pre-pass_progress" hideLabel={true} />
              </div>
            </RuxTableCell>
          </RuxTableRow>
        </RuxTableBody>
      </RuxTable>
    </>
  );
};

export default PrePassList;
