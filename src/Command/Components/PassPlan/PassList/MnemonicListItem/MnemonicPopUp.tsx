import {
  RuxCheckbox,
  RuxIcon,
  RuxPopUp,
  RuxCard,
  RuxButton,
} from "@astrouxds/react";
import { useTTCGRMActions } from "@astrouxds/mock-data";
import type { Mnemonic } from "@astrouxds/mock-data";
import LineChart from "../../../Watcher/LineChart";
import { getRandomInt } from "utils";
import { useAppContext, ContextType } from "provider/useAppContext";
import "./MnemonicPopUp.css";
import { useMemo } from "react";

type PropTypes = {
  triggerValue: string | number;
  data: Mnemonic;
};

const MnemonicPopUp = ({ triggerValue, data }: PropTypes) => {
  const { modifyMnemonic } = useTTCGRMActions();

  const { toggleInvestigate, selectSubsystemsFromMnemonic }: ContextType =
    useAppContext();

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
        {<LineChart chartData={menmonicData} />}
        <div>
          <span>Value</span>
          <span>
            {data.currentValue} {data.unit}
          </span>
        </div>
        <div>
          <span className="subsystem">Subsystem</span>
          <RuxButton
            size="small"
            borderless
            onClick={() => handleSubsystemPassPlanClick()}
          >
            {data.subsystem}
            <RuxIcon size="1rem" icon="launch" />
          </RuxButton>
        </div>
        <div slot="footer">
          <RuxCheckbox
            checked={data.watched}
            onRuxchange={() => handleWatched()}
          >
            Add to Watcher
          </RuxCheckbox>
        </div>
      </RuxCard>
      <span slot="trigger">{triggerValue}</span>
    </RuxPopUp>
  );
};

export default MnemonicPopUp;
