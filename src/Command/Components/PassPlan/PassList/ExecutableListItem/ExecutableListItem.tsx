import { RuxButton, RuxProgress, RuxIcon, RuxTreeNode } from "@astrouxds/react";
import { useMemo, useRef, useState, useEffect } from "react";
import MnemonicListItem from "../MnemonicListItem/MnemonicListItem";

type PropTypes = {
  stepNumber: number | string;
  queueCommand: string;
};

const ExecutableListItem = ({ stepNumber, queueCommand }: PropTypes) => {
  const getRandomInt = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const progressBar = useRef<HTMLRuxProgressElement>(null);
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [progressComplete, setProgressComplete] = useState<boolean>(false);
  const initialValue = useRef(0)
  const [value, setValue] = useState<number>(initialValue.current)

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



  useEffect(() => {
    if (progressComplete) return;
    if (value > 100 && !progressComplete) {
      setProgressComplete(true)
    }
    let interval: any
    //Implementing the setInterval method
    if(inProgress && !progressComplete){
      interval = setInterval(() => {
          setValue(value + 1);
      }, 50);
  } else {
    clearInterval(interval)
  }

    //Clearing the interval
    return () => clearInterval(interval);
}, [value, inProgress, progressComplete]);

  const handleExecuteButtonClick = () => {
    if (progressComplete) return;
    setInProgress(!inProgress)
  }

  return (
    <div className="pass_executable-parent">
        {
            !progressComplete && <RuxButton className="pass_execute-button" iconOnly icon={inProgress ? 'pause' : 'play-arrow'} onClick={handleExecuteButtonClick} />
        }
    <RuxTreeNode expanded>
      <div slot="prefix" className="pass_number-wrapper">
        {stepNumber}
      </div>
      <div className="pass_executable-wrapper">
        {
            !progressComplete ? <RuxButton iconOnly icon={inProgress ? 'pause' : 'play-arrow'} onClick={handleExecuteButtonClick} /> : <RuxIcon icon="check-circle-outline" size="small" />
        }
        
        <div className="pass_executable-progress-wrapper">
          <div className="pass_command-name">{queueCommand}</div>
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
