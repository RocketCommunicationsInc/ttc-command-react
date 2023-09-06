import { RuxProgress, RuxStatus, RuxTree, RuxTreeNode } from "@astrouxds/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type PropTypes = {
  setPass: Dispatch<SetStateAction<string>>;
};

const PrePassList = ({ setPass }: PropTypes) => {
  const [passPlanListItemState, setPassPlanListItemState] = useState<{
    [key: string]: number;
  }>({
    aim: 0,
    sarm: 0,
    lock: 0,
    aos: 0,
    vcc: 0,
    passPlan: 0,
  });

  useEffect(() => {
    // every 20 milliseconds for each progress bar, set the progress value from 0-100 (filling the bar)
    const loadBar = () => {
      if (Object.values(passPlanListItemState).every(value => value === 100)) {
        setPass("Pre-Pass-Complete");
        clearInterval(progressInterval)
        return
      };

      for (const key in passPlanListItemState) { 
        const value = passPlanListItemState[key]
        if (value < 100 ) {
          setPassPlanListItemState((prevState) => {
            return {
              ...passPlanListItemState,
              [key]: prevState[key] + 1,
            }
          });
          break
        } else { 
          continue
        }
        
      }
    };

    const progressInterval = setInterval(loadBar, 40);

    return () => {
      clearInterval(progressInterval);
    };
  }, [
    passPlanListItemState,
    setPass,
  ]);

  return (
    <RuxTree className="pass-plan_tree-wrapper">
      {Object.entries(passPlanListItemState).map(([key, value], index) => {
        return (
          <RuxTreeNode key={`${key}`}>
            <div slot="prefix" className="pass-plan_number-wrapper">
              {index + 1}
            </div>
            <div className="pass-plan_tree-content-wrapper">
              {value < 100 ? (
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
              {`${key.toUpperCase()} = ${value >= 100 ? 'CONNECTED' : 'PENDING'}`}
            </div>
            <RuxProgress
              slot="suffix"
              className="pre-pass_progress"
              hideLabel={true}
              value={passPlanListItemState[key]}
            />
          </RuxTreeNode>
        );
      })}
    </RuxTree>
  );
};

export default PrePassList;
