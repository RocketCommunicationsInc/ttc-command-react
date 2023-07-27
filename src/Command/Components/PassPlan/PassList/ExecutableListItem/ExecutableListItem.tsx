import { RuxButton, RuxProgress, RuxIcon, RuxTreeNode } from "@astrouxds/react";
import { useMemo } from "react";
import MnemonicListItem from "../MnemonicListItem/MnemonicListItem";

type PropTypes = {
  stepNumber: number | string;
};

const ExecutableListItem = ({ stepNumber }: PropTypes) => {
  const getRandomInt = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const mnemonicItems = useMemo(() => {
    const randomNumber = getRandomInt(2, 5);
    const numberArray = Array.from({ length: randomNumber }, (_, i) => i + 1);

    return Array.from({ length: randomNumber }, (_, index) => {
      return (
        <MnemonicListItem
          stepNumber={`${stepNumber}.${numberArray[index]}`}
          slotNode={true}
        />
      );
    });
  }, [stepNumber]);

  return (
    <RuxTreeNode expanded>
      <div slot="prefix" className="pass_number-wrapper">
        {stepNumber}
      </div>
      <div className="pass_executable-wrapper">
        <RuxButton iconOnly icon="play-arrow" />
        <div className="pass_executable-progress-wrapper">
          <div className="pass_command-name">Command Name Placeholder</div>
          <div className="pass_progress-time">
            <RuxProgress hideLabel />
            <RuxIcon icon="schedule" size="extra-small" />
            00:00:25
          </div>
        </div>
      </div>
      {mnemonicItems}
    </RuxTreeNode>
  );
};

export default ExecutableListItem;
