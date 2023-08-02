import {
  RuxCheckbox,
  RuxIcon,
  RuxPopUp,
  RuxCard,
  RuxButton,
} from "@astrouxds/react";
import { useTTCGRMActions, type Mnemonic } from "@astrouxds/mock-data";
import LineChart from "./LineChart";
import { getRandomInt } from "utils";
import { useAppContext, ContextType } from "provider/useAppContext";
import type { Subsystem } from "@astrouxds/mock-data";
import "./MnemonicPopUp.css";
import { Dispatch, SetStateAction } from "react";

type PropTypes = {
  triggerValue: string | number;
  data: Mnemonic;
  isPassPlan: boolean;
  setWatched?: Dispatch<SetStateAction<boolean>>;
};

const MnemonicPopUp = ({ triggerValue, data, isPassPlan, setWatched }: PropTypes) => {
  const { modifyMnemonic } = useTTCGRMActions();
  
  const {
    contact,
    toggleInvestigate,
    selectSubsystem,
    selectSubsystemsFromMnemonic,
  }: ContextType = useAppContext();

  const menmonicData = [
    getRandomInt(110),
    getRandomInt(110),
    getRandomInt(110),
    data.currentValue,
    getRandomInt(110),
    getRandomInt(110),
    getRandomInt(110),
  ];

  const handleSubsystemClick = (subsystem: Subsystem) => {
    toggleInvestigate();
    selectSubsystem(subsystem);
  };

  const handleSubsystemPassPlanClick = () => {
    selectSubsystemsFromMnemonic(data);
    toggleInvestigate();
  };

  const handleWatched = () => {
    setWatched && setWatched(prevState => !prevState);
    modifyMnemonic({ ...data, watched: !data.watched });
  }

  return (
    <RuxPopUp
      placement="right-end"
      strategy="fixed"
      className="mnemonic-pop-up"
    >
      <RuxCard>
        <span slot="header">{data.mnemonicId}</span>
        {isPassPlan ? <LineChart chartData={menmonicData} /> : null}
        <div>
          <span>Value</span>
          <span>{data.currentValue}</span>
        </div>
        <div>
          <span className="subsystem">Subsystem</span>
          {isPassPlan ? (
            <RuxButton
              size="small"
              borderless
              onClick={() => handleSubsystemPassPlanClick()}
            >
              {data.subsystem}
              <RuxIcon size="1rem" icon="launch" />
            </RuxButton>
          ) : (
            <RuxButton
              size="small"
              borderless
              onClick={() => handleSubsystemClick(contact.subsystems[0])}
            >
              {data.subsystem}
              <RuxIcon size="1rem" icon="launch" />
            </RuxButton>
          )}
        </div>
        {isPassPlan && setWatched ? (
          <div slot="footer">
            <RuxCheckbox onRuxchange={() => handleWatched()}>Add to Watcher</RuxCheckbox>
          </div>
        ) : null}
      </RuxCard>
      <span slot="trigger">{triggerValue}</span>
    </RuxPopUp>
  );
};

export default MnemonicPopUp;
