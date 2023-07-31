import { RuxButton, RuxProgress, RuxIcon, RuxTreeNode } from "@astrouxds/react";
import { useState } from "react";
import MnemonicListItem from "../MnemonicListItem/MnemonicListItem";
import { getRandomInt } from "../../../../../utils";

type PropTypes = {
  stepNumber: number | string;
};

const randomNumber = getRandomInt(5, 2);

const ExecutableListItem = ({ stepNumber }: PropTypes) => {
  const [value, setValue] = useState<number>(0);
  const inProgress = value > 0 && value < 100;
  const progressComplete = value <= 100;

  const handleExecuteButtonClick = () => {
    const interval = setInterval(() => {
      if (value >= 100) clearInterval(interval);
      setValue((prevValue) => prevValue + 1);
    }, 50);
  };

  return (
    <div className="pass_executable-parent">
      <RuxTreeNode expanded>
        <div slot="prefix" className="pass_number-wrapper">
          {stepNumber}
        </div>
        <div className="pass_executable-wrapper">
          {progressComplete ? (
            <RuxButton
              iconOnly
              icon={inProgress ? "pause" : "play-arrow"}
              onClick={handleExecuteButtonClick}
            />
          ) : (
            <RuxIcon icon="check-circle-outline" size="small" />
          )}

          <div className="pass_executable-progress-wrapper">
            <div className="pass_command-name">Command Name Placeholder</div>
            <div className="pass_progress-time">
              <RuxProgress value={value} hideLabel />
              <RuxIcon icon="schedule" size="extra-small" />
              00:00:25
            </div>
          </div>
        </div>
        {[...Array(randomNumber)].map((_, index) => (
          <MnemonicListItem
            key={index}
            stepNumber={`${stepNumber}.${index}`}
            slotNode={true}
          />
        ))}
      </RuxTreeNode>
    </div>
  );
};

export default ExecutableListItem;
