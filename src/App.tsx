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
import StartTracker from "Investigate/Components/StarTracker/StarTracker";
import Electronics from "Investigate/Components/Electronics/Electronics";

const options = {
  alertsPercentage: 50 as const,
  initial: 15,
  interval: 2,
  limit: 45,
};

function App() {
  return (
    <div className="app-container">
      <TTCGRMProvider options={options}>
        <GlobalStatusBar />
        <div className="command-background" data-active="true">
          {/* <Alerts />
          <PassPlan />
          <Subsystems />
          <LinkStatus />
        <Watcher /> */}
          <InvestigateSubsystems />
          <StartTracker />
          <Electronics />
        </div>
        <div
          className="investigate-background"
          //data-active="false"
        >
          {/* <InvestigateSubsystems />
          <StartTracker />
          <Electronics /> */}
        </div>
      </TTCGRMProvider>
    </div>
  );
}

export default App;
