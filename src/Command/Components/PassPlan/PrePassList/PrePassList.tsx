import {
  RuxCheckbox,
  RuxProgress,
  RuxTree,
  RuxTreeNode,
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
    <RuxTree>
      <RuxTreeNode>
        <div slot="prefix">1</div>
        <div className="pre-pass_cell-wrapper-content">
          <RuxCheckbox className="pre-pass_checkbox" />
          AIM = {aimState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix">2</div>
        <div className="pre-pass_cell-wrapper-content">
          <RuxCheckbox className="pre-pass_checkbox" />
          SARM = {sarmState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix">3</div>
        <div className="pre-pass_cell-wrapper-content">
          <RuxCheckbox className="pre-pass_checkbox" />
          LOCK = {lockState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix">4</div>
        <div className="pre-pass_cell-wrapper-content">
          <RuxCheckbox className="pre-pass_checkbox" />
          AOS = {aosState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix">5</div>
        <div className="pre-pass_cell-wrapper-content">
          <RuxCheckbox className="pre-pass_checkbox" />
          VCC = {vccState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix">6</div>
        <div className="pre-pass_cell-wrapper-content">
          <RuxCheckbox className="pre-pass_checkbox" />
          PASS PLAN = {passPlanState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
        />
      </RuxTreeNode>
    </RuxTree>
  );
};

export default PrePassList;
