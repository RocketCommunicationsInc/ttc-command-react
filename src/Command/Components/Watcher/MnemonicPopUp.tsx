import {
  RuxCheckbox,
  RuxIcon,
  RuxPopUp,
  RuxCard,
  RuxButton,
} from "@astrouxds/react";
import { type Mnemonic } from "@astrouxds/mock-data";
import LineChart from "./LineChart";
import { getRandomInt } from "utils";
import { useAppContext, ContextType } from "provider/useAppContext";
import type { Subsystem } from "@astrouxds/mock-data";
import { useState } from "react";

type PropTypes = {
  triggerValue: string | number;
  data: Mnemonic;
  isPassPlan: boolean;
};

const styles = {
  iconStyles: {
    marginLeft: "var(--spacing-1)",
    marginBottom: "var(--spacing-1)",
  },
  linkStyles: {
    display: "flex",
    alignItems: "center",
  },
};

const MnemonicPopUp = ({ triggerValue, data, isPassPlan }: PropTypes) => {
  const { contact, toggleInvestigate, selectSubsystem }: ContextType =
    useAppContext();

  const handleSubsystemClick = (subsystem: Subsystem) => {
    toggleInvestigate();
    selectSubsystem(subsystem);
  };

  const menmonicData = [
    getRandomInt(110),
    getRandomInt(110),
    getRandomInt(110),
    data.currentValue,
    getRandomInt(110),
    getRandomInt(110),
    getRandomInt(110),
  ];

  const attitudeSubsystem = contact.subsystems.filter(
    (subsystem) => subsystem.name === "Attitude"
  );

  console.log(data.subsystem, "data");

  const handleSubsystemPassPlanClick = () => {
    toggleInvestigate();
    // selectSubsystem(data.subsystem);
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
          <span>Subsystem</span>
          <RuxButton
            size="small"
            borderless
            onClick={() =>
              handleSubsystemClick(
                attitudeSubsystem[0]
                  ? attitudeSubsystem[0]
                  : contact.subsystems[0]
              )
            }
            style={styles.linkStyles}
          >
            Attitude
            <RuxIcon style={styles.iconStyles} size="1rem" icon="launch" />
          </RuxButton>
        </div>
        {isPassPlan ? (
          <div slot="footer">
            <RuxCheckbox>Add to Watcher</RuxCheckbox>
          </div>
        ) : null}
      </RuxCard>
      <span slot="trigger">{triggerValue}</span>
    </RuxPopUp>
  );
};

export default MnemonicPopUp;
