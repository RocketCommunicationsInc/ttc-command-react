import { RuxProgress, RuxStatus, RuxTree, RuxTreeNode } from "@astrouxds/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type PropTypes = {
  setPass: Dispatch<SetStateAction<string>>;
};

const PrePassList = ({ setPass }: PropTypes) => {
  const [passPlanListItemState, setPassPlanListItemState] = useState<{
    [key: string]: string;
  }>({
    aimState: "PENDING",
    sarmState: "PENDING",
    lockState: "PENDING",
    aosState: "PENDING",
    vccState: "PENDING",
    passPlanState: "PENDING",
  });
  let [currentListItem, setCurrentListItem] = useState<number>(0);
  let [stateValue, setStateValue] = useState<number>(0);

  const progressRefs = useRef<HTMLRuxProgressElement[]>([]);

  const stateArray = ["AIM", "SARM", "LOCK", "AOS", "VCC", "PASS PLAN"];

  useEffect(() => {
    // every 20 milliseconds for each progress bar, set the progress value from 0-100 (filling the bar)
    const loadBar = () => {
      if (stateValue > 100) {
        // if the current list item is the length of the state function array, set the pre-pass as complete
        if (currentListItem === stateArray.length) {
          setPass("Pre-Pass-Complete");
          clearInterval(progressInterval);
          return;
        }

        let listKey = Object.keys(passPlanListItemState)[currentListItem];
        setPassPlanListItemState({
          ...passPlanListItemState,
          [listKey]: "CONNECTED",
        });

        setCurrentListItem((prevState) => prevState + 1);
        setStateValue(0);
        clearInterval(progressInterval);
      } else {
        setStateValue((prevValue) => prevValue + 1);
        if (currentListItem < stateArray.length) {
          progressRefs.current[currentListItem].value = stateValue;
        }
      }
    };

    const progressInterval = setInterval(loadBar, 20);

    return () => {
      clearInterval(progressInterval);
    };
  }, [
    currentListItem,
    passPlanListItemState,
    setPass,
    stateArray.length,
    stateValue,
  ]);

  return (
    <RuxTree className="pass-plan_tree-wrapper">
      {stateArray.map((listItem, index) => {
        return (
          <RuxTreeNode key={`${listItem}-${index}`}>
            <div slot="prefix" className="pass-plan_number-wrapper">
              {index + 1}
            </div>
            <div className="pass-plan_tree-content-wrapper">
              {passPlanListItemState[
                Object.keys(passPlanListItemState)[index]
              ] === "PENDING" ? (
                <RuxStatus
                  className="pass-plan_status-symbol"
                  status="standby"
                />
              ) : (
                <RuxStatus
                  className="pass-plan_status-symbol"
                  status="normal"
                />
              )}
              {listItem} ={" "}
              {passPlanListItemState[Object.keys(passPlanListItemState)[index]]}
            </div>
            <RuxProgress
              slot="suffix"
              className="pre-pass_progress"
              hideLabel={true}
              ref={(element) =>
                (progressRefs.current[index] =
                  element as HTMLRuxProgressElement)
              }
            />
          </RuxTreeNode>
        );
      })}

      {/* <RuxTreeNode>
        <div slot="prefix" className="pass-plan_number-wrapper">
          1
        </div>
        <div className="pass-plan_tree-content-wrapper">
          {passPlanListItemState.aimState === "PENDING" ? (
            <RuxStatus className="pass-plan_status-symbol" status="standby" />
          ) : (
            <RuxStatus className="pass-plan_status-symbol" status="normal" />
          )}
          AIM = {passPlanListItemState.aimState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
          ref={(ref) => refs.current.push(ref as HTMLRuxProgressElement)}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix" className="pass-plan_number-wrapper">
          2
        </div>
        <div className="pass-plan_tree-content-wrapper">
          {sarmState === "PENDING" ? (
            <RuxStatus className="pass-plan_status-symbol" status="standby" />
          ) : (
            <RuxStatus className="pass-plan_status-symbol" status="normal" />
          )}
          SARM = {sarmState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
          ref={(ref) => refs.current.push(ref as HTMLRuxProgressElement)}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix" className="pass-plan_number-wrapper">
          3
        </div>
        <div className="pass-plan_tree-content-wrapper">
          {lockState === "PENDING" ? (
            <RuxStatus className="pass-plan_status-symbol" status="standby" />
          ) : (
            <RuxStatus className="pass-plan_status-symbol" status="normal" />
          )}
          LOCK = {lockState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
          ref={(ref) => refs.current.push(ref as HTMLRuxProgressElement)}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix" className="pass-plan_number-wrapper">
          4
        </div>
        <div className="pass-plan_tree-content-wrapper">
          {aosState === "PENDING" ? (
            <RuxStatus className="pass-plan_status-symbol" status="standby" />
          ) : (
            <RuxStatus className="pass-plan_status-symbol" status="normal" />
          )}
          AOS = {aosState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
          ref={(ref) => refs.current.push(ref as HTMLRuxProgressElement)}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix" className="pass-plan_number-wrapper">
          5
        </div>
        <div className="pass-plan_tree-content-wrapper">
          {vccState === "PENDING" ? (
            <RuxStatus className="pass-plan_status-symbol" status="standby" />
          ) : (
            <RuxStatus className="pass-plan_status-symbol" status="normal" />
          )}
          VCC = {vccState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
          ref={(ref) => refs.current.push(ref as HTMLRuxProgressElement)}
        />
      </RuxTreeNode>
      <RuxTreeNode>
        <div slot="prefix" className="pass-plan_number-wrapper">
          6
        </div>
        <div className="pass-plan_tree-content-wrapper">
          {passPlanState === "PENDING" ? (
            <RuxStatus className="pass-plan_status-symbol" status="standby" />
          ) : (
            <RuxStatus className="pass-plan_status-symbol" status="normal" />
          )}
          PASS PLAN = {passPlanState}
        </div>
        <RuxProgress
          slot="suffix"
          className="pre-pass_progress"
          hideLabel={true}
          ref={(ref) => refs.current.push(ref as HTMLRuxProgressElement)}
        />
      </RuxTreeNode> */}
    </RuxTree>
  );
};

export default PrePassList;
