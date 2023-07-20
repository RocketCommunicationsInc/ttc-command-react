import Alerts from "./Command/Components/Alerts/Alerts";
import PassPlan from "./Command/Components/PassPlan/PassPlan";
import Watcher from "./Command/Components/Watcher/Watcher";
import GlobalStatusBar from "./Command/Components/GlobalStatusBar";
import LinkStatus from "Command/Components/LinkStatus/LinkStatus";
import Subsystems from "Command/Components/Subsystems/Subsystems";
import { TTCGRMProvider } from "@astrouxds/mock-data";

import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import "./App.css";
import { useState } from "react";

import { generateContact } from "@astrouxds/mock-data";
import type { Contact } from "@astrouxds/mock-data";
import Investigate from "Investigate/Components/Investigate/Investigate";

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

  const toggleInvestigate = () => {
    setShowInvestigate((prevState) => !prevState);
  };

  return (
    <div className="app-container">
      <TTCGRMProvider options={options}>
        <GlobalStatusBar
          appName={showInvestigate ? "INVESTIGATE" : "COMMAND"}
        />
        <div className="command-background" data-active={!showInvestigate}>
          <Alerts toggleInvestigate={toggleInvestigate} />
          <PassPlan />
          <Subsystems toggleInvestigate={toggleInvestigate} />
          <LinkStatus />
          <Watcher />
        </div>
        <Investigate
          contact={contact}
          toggleInvestigate={toggleInvestigate}
          showInvestigate={showInvestigate}
        />
      </TTCGRMProvider>
    </div>
  );
}

export default App;
