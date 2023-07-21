import type { Contact, Subsystem } from "@astrouxds/mock-data";
import { Dispatch, SetStateAction } from "react";
import Alerts from "./Alerts/Alerts";
import "./Command.css";
import LinkStatus from "./LinkStatus/LinkStatus";
import PassPlan from "./PassPlan/PassPlan";
import Subsystems from "./Subsystems/Subsystems";
import Watcher from "./Watcher/Watcher";

type PropTypes = {
    toggleInvestigate: () => void;
    showInvestigate: boolean;
    contact: Contact;
    setSelectedSubsystem: Dispatch<SetStateAction<Subsystem>>;
};

const Command = ({showInvestigate, toggleInvestigate, contact, setSelectedSubsystem}: PropTypes) => {
  return (
    <div className="command-background" data-active={!showInvestigate}>
        <Alerts toggleInvestigate={toggleInvestigate} />
        <PassPlan />
        <Subsystems
            subsystems={contact.subsystems}
            toggleInvestigate={toggleInvestigate}
            setSelectedSubsystem={setSelectedSubsystem}
        />
        <LinkStatus />
        <Watcher />
    </div>
  );
};

export default Command;
