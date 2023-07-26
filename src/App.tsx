import GlobalStatusBar from "./Command/Components/GlobalStatusBar";
import Investigate from "Investigate/Components/Investigate";
import Command from "Command/Components/Command";

import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import "./App.css";

import { useAppContext, ContextType } from "./provider/useAppContext";

function App() {
  const { showInvestigate }: ContextType = useAppContext();

  return (
    <div className="app-container">
      <GlobalStatusBar appName={showInvestigate ? "INVESTIGATE" : "COMMAND"} />
      <Command />
      <Investigate />
    </div>
  );
}

export default App;
