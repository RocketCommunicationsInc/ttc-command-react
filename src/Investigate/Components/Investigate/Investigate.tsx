import type { Contact } from "@astrouxds/mock-data";
import { useState } from "react";
import InvestigateSubsystems from "./InvestigateSubsystems/InvestigateSubsystems";
import Assembly from "./Assembly/Assembly";
import Mnemonics from "./Mnemonics/Mnemonics";
import "./Investigate.css";

type PropTypes = {
  toggleInvestigate: () => void;
  showInvestigate: boolean;
  contact: Contact;
};

const Investigate = ({
  toggleInvestigate,
  showInvestigate,
  contact,
}: PropTypes) => {
  const [childSubsystem, setChildSubsystem] = useState<string>(
    contact.subsystems[0].childSubsystems[0].name
  );
  const toggleChildSubsystem = (childSystem: string) => {
    setChildSubsystem(() => childSystem);
  };

  return (
    <div className="investigate-background" data-active={showInvestigate}>
      <InvestigateSubsystems
        toggleInvestigate={toggleInvestigate}
        toggleChildSubsystem={toggleChildSubsystem}
        satName={contact.satellite}
        subsystems={contact.subsystems}
      />
      <Assembly childSubsystem={childSubsystem} />
      <Mnemonics />
    </div>
  );
};

export default Investigate;
