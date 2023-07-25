import GlobalStatusBar from "./Command/Components/GlobalStatusBar";
import { useTTCGRMActions, useTTCGRMContacts } from "@astrouxds/mock-data";

import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import "./App.css";
import { useState, useEffect } from "react";

import type { Subsystem } from "@astrouxds/mock-data";
import Investigate from "Investigate/Components/Investigate";
import Command from "Command/Components/Command";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

function App() {
  const { dataArray: contacts } = useTTCGRMContacts();
  const { addAlert, modifyMnemonic } = useTTCGRMActions();
  const contact = contacts[0];
  console.log(contact);
  const [showInvestigate, setShowInvestigate] = useState<boolean>(false);
  const [selectedSubsystem, setSelectedSubsystem] = useState<Subsystem>(
    contact.subsystems[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (contact.alerts.length < 25) addAlert(contact.id);
    }, 3000);

    return () => clearInterval(interval);
  }, [addAlert, contact.alerts.length, contact.id]);

  const toggleInvestigate = () => {
    setShowInvestigate((prevState) => !prevState);
    if (showInvestigate) setSelectedSubsystem(contact.subsystems[0]);
  };

  useEffect(() => {
    // set 20 random mnemonics to watched
    for (let i = 0; i < 20; i++) {
      const mnemonic = contact.mnemonics[getRandomInt(20)];
      modifyMnemonic({ ...mnemonic, watched: true });
    }
  }, []);

  console.log(contact);
  return (
    <div className="app-container">
      <GlobalStatusBar appName={showInvestigate ? "INVESTIGATE" : "COMMAND"} />
      <Command
        toggleInvestigate={toggleInvestigate}
        contact={contact}
        showInvestigate={showInvestigate}
        setSelectedSubsystem={setSelectedSubsystem}
      />
      <Investigate
        contact={contact}
        toggleInvestigate={toggleInvestigate}
        showInvestigate={showInvestigate}
        selectedSubsystem={selectedSubsystem}
      />
    </div>
  );
}

export default App;
