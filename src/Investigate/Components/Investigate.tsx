import type { Contact, ChildSubsystem, Subsystem } from "@astrouxds/mock-data";
import { useState, useEffect } from "react";
import SubsystemsTree from "./Subsystems/SubsystemsTree";
import Assembly from "./Assembly/Assembly";
import Mnemonics from "./Mnemonics/Mnemonics";
import "./Investigate.css";

type PropTypes = {
  toggleInvestigate: () => void;
  showInvestigate: boolean;
  contact: Contact;
  selectedSubsystem: Subsystem;
};

const Investigate = ({
  toggleInvestigate,
  showInvestigate,
  contact,
  selectedSubsystem,
}: PropTypes) => {
  const [mnemonicTitle, setMnemonicTitle] = useState<string>("");

  const [selectedChildSubsystem, setSelectedChildSubsystem] =
    useState<ChildSubsystem>(selectedSubsystem.childSubsystems[0]);

  useEffect(() => {
    setSelectedChildSubsystem(selectedSubsystem.childSubsystems[0]);

    return () => {
      setSelectedChildSubsystem(contact.subsystems[0].childSubsystems[0]);
    };
  }, [contact.subsystems, selectedSubsystem.childSubsystems]);

  const handleClick = (title: string) => {
    setMnemonicTitle(title);
  };

  return (
    <div className="investigate-background" data-active={showInvestigate}>
      <SubsystemsTree
        toggleInvestigate={toggleInvestigate}
        setSelectedChildSubsystem={setSelectedChildSubsystem}
        satName={contact.satellite}
        subsystems={contact.subsystems}
        selectedSubsystem={selectedSubsystem}
        selectedChildSubsystem={selectedChildSubsystem}
      />
      <Assembly
        onSvgClick={handleClick}
        //childSubsystem={selectedChildSubsystem}
      />
      {mnemonicTitle !== "" ? (
        <Mnemonics title={mnemonicTitle} />
      ) : (
        <Mnemonics title={"Electronics"} />
      )}
    </div>
  );
};

export default Investigate;
