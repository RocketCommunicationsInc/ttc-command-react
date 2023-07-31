import { RuxButton, RuxProgress, RuxIcon, RuxTreeNode } from "@astrouxds/react";
import { useMemo, useRef, useState, useEffect } from "react";
import MnemonicListItem from "../MnemonicListItem/MnemonicListItem";

type PropTypes = {
  stepNumber: number | string;
};

const ExecutableListItem = ({ stepNumber }: PropTypes) => {
  const getRandomInt = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const progressBar = useRef<HTMLRuxProgressElement>(null);
  const [value, setValue] = useState<number>(0);
  const inProgress = value > 0 && value < 100
  const progressComplete = value <= 100
  const mnemonicItems = useMemo(() => {
    const randomNumber = getRandomInt(2, 5);
    const numberArray = Array.from({ length: randomNumber }, (_, i) => i + 1);

    return Array.from({ length: randomNumber }, (_, index) => {
      return (
        <MnemonicListItem
          key={index}
          stepNumber={`${stepNumber}.${numberArray[index]}`}
          slotNode={true}
        />
      );
    });
  }, [stepNumber]);


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
              <RuxProgress ref={progressBar} value={value} hideLabel />
              <RuxIcon icon="schedule" size="extra-small" />
              00:00:25
            </div>
          </div>
        </div>
        {mnemonicItems}
      </RuxTreeNode>
    </div>
  );
};

export default ExecutableListItem;
