import type { Contact } from "@astrouxds/mock-data";
import { useState } from "react";
import InvestigateSubsystems from "./InvestigateSubsystems/InvestigateSubsystems";
import Assembly from "./Assembly/Assembly";
import Mnemonics from "./Mnemonics/Mnemonics";

type PropTypes = {
toggleInvestigate: () => void;
contact: Contact,
};

const Investigate = ({toggleInvestigate, contact,}: PropTypes) => {
    const [childSubsystem, setChildSubsystem] = useState<string>('Star Tracker')
    const toggleChildSubsystem = (childSystem: string) => {
        setChildSubsystem(() => childSystem)
    }

    return (
    <>
        <InvestigateSubsystems
        toggleInvestigate={toggleInvestigate}
        toggleChildSubsystem={toggleChildSubsystem}
        satName={contact.satellite}
        subsystems={contact.subsystems}
        />
        <Assembly childSubsystem={childSubsystem} />
        <Mnemonics />
    </>
    );
};

export default Investigate;
  