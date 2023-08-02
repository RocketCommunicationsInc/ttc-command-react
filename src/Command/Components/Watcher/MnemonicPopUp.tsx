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
import { useMemo } from "react";

type PropTypes = {
  triggerValue: string | number;
  data: Mnemonic;
  isPassPlan: boolean;
};

const MnemonicPopUp = ({ triggerValue, data, isPassPlan }: PropTypes) => {
  const { modifyMnemonic } = useTTCGRMActions();

  const {
    contact,
    toggleInvestigate,
    selectSubsystem,
    selectSubsystemsFromMnemonic,
  }: ContextType = useAppContext();

  const menmonicData = useMemo(
    () => [
      getRandomInt(110),
      getRandomInt(110),
      getRandomInt(110),
      data.currentValue,
      getRandomInt(110),
      getRandomInt(110),
      getRandomInt(110),
    ],
    [data.currentValue]
  );

  const handleSubsystemClick = (subsystem: Subsystem) => {
    toggleInvestigate();
    selectSubsystem(subsystem);
  };

  const handleSubsystemPassPlanClick = () => {
    selectSubsystemsFromMnemonic(data);
    toggleInvestigate();
  };

  const handleWatched = () => {
    modifyMnemonic({ ...data, watched: !data.watched });
  };

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
        {isPassPlan ? (
          <div slot="footer">
            <RuxCheckbox
              checked={data.watched}
              onRuxchange={() => handleWatched()}
            >
              Add to Watcher
            </RuxCheckbox>
          </div>
        ) : null}
      </RuxCard>
      <span slot="trigger">{triggerValue}</span>
    </RuxPopUp>
  );
};

export default MnemonicPopUp;
