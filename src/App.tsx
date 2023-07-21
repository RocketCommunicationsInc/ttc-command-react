import GlobalStatusBar from "./Command/Components/GlobalStatusBar";
import { TTCGRMProvider } from "@astrouxds/mock-data";

import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import "./App.css";
import { useState } from "react";

import { generateContact } from "@astrouxds/mock-data";
import type { Contact, Subsystem } from "@astrouxds/mock-data";
import Investigate from "Investigate/Components/Investigate";
import Command from "Command/Components/Command";

const options = {
  alertsPercentage: 50 as const,
  initial: 15,
  interval: 2,
  limit: 45,
};

const contact: Contact = generateContact(0, {
  desiredSubsystems: ["Altitude", "Payload", "Power", "Propulsion", "Thermal"],
});

function App() {
  const [showInvestigate, setShowInvestigate] = useState<boolean>(false);
  const [selectedSubsystem, setSelectedSubsystem] = useState<Subsystem>(
    contact.subsystems[0]
  );

  const toggleInvestigate = () => {
    setShowInvestigate((prevState) => !prevState);
    if (showInvestigate) setSelectedSubsystem(contact.subsystems[0])
    
  };

  return (
    <div className="app-container">
      <TTCGRMProvider options={options}>
        <GlobalStatusBar
          appName={showInvestigate ? "INVESTIGATE" : "COMMAND"}
        />
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
      </TTCGRMProvider>
    </div>
  );
}

export default App;
