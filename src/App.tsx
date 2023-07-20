import Alerts from "./Command/Components/Alerts/Alerts";
import PassPlan from "./Command/Components/PassPlan/PassPlan";
import Watcher from "./Command/Components/Watcher/Watcher";
import GlobalStatusBar from "./Command/Components/GlobalStatusBar";
import LinkStatus from "Command/Components/LinkStatus/LinkStatus";
import Subsystems from "Command/Components/Subsystems/Subsystems";
import InvestigateSubsystems from "./Investigate/Components/InvestigateSubsystems/InvestigateSubsystems";
import { TTCGRMProvider } from "@astrouxds/mock-data";

import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import "./App.css";
import Assembly from "Investigate/Components/Assembly/Assembly";
import Mnemonics from "Investigate/Components/Mnemonics/Mnemonics";
import { useState } from "react";

const options = {
  alertsPercentage: 50 as const,
  initial: 15,
  interval: 2,
  limit: 45,
};

function App() {
  const [showInvestigate, setShowInvestigate] = useState<boolean>(false);

  const toggleInvestigate = () => {
    setShowInvestigate((prevState) => !prevState);
  };

  return (
    <div className="app-container">
      <TTCGRMProvider options={options}>
        <GlobalStatusBar appName={showInvestigate ? "INVESTIGATE" : "COMMAND"} />
        <div className="command-background" data-active={!showInvestigate}>
          <Alerts />
          <PassPlan />
          <Subsystems toggleInvestigate={toggleInvestigate} />
          <LinkStatus />
          <Watcher />
        </div>
        <div
          className="investigate-background"
          data-active={showInvestigate}
        >
          <InvestigateSubsystems toggleInvestigate={toggleInvestigate} />
          <Assembly />
          <Mnemonics />
        </div>
      </TTCGRMProvider>
    </div>
  );
}

export default App;
