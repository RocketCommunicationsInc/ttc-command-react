import type { Contact } from "@astrouxds/mock-data";
import { useState } from "react";
import SubsystemsTree from "./Subsystems/SubsystemsTree";
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

  return (
    <div className="investigate-background" data-active={showInvestigate}>
      <SubsystemsTree
        toggleInvestigate={toggleInvestigate}
        setChildSubsystem={setChildSubsystem}
        satName={contact.satellite}
        subsystems={contact.subsystems}
      />
      <Assembly childSubsystem={childSubsystem} />
      <Mnemonics />
    </div>
  );
};

export default Investigate;
