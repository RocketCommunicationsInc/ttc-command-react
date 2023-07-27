import { RuxButton, RuxProgress, RuxIcon, RuxTreeNode } from "@astrouxds/react";
import { useMemo, useRef } from "react";
import MnemonicListItem from "../MnemonicListItem/MnemonicListItem";

type PropTypes = {
  stepNumber: number | string;
};

const ExecutableListItem = ({ stepNumber }: PropTypes) => {
  const getRandomInt = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const progressBar = useRef<HTMLRuxProgressElement>(null);

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
    let value = 0;
    const progressInterval = setInterval(() => {
        if (value > 100) clearInterval(progressInterval)
        progressBar.current!.value = value +1
        value = value +1
    },10)
  }

  return (
    <div className="pass_executable-parent">
    <RuxButton className="pass_execute-button" iconOnly icon="play-arrow" onClick={handleExecuteButtonClick}></RuxButton>
    <RuxTreeNode expanded>
      <div slot="prefix" className="pass_number-wrapper">
        {stepNumber}
      </div>
      <div className="pass_executable-wrapper">
        <RuxButton iconOnly icon="play-arrow" onClick={handleExecuteButtonClick}></RuxButton>
        <div className="pass_executable-progress-wrapper">
          <div className="pass_command-name">Command Name Placeholder</div>
          <div className="pass_progress-time">
            <RuxProgress ref={progressBar} hideLabel />
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
