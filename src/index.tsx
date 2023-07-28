import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TTCGRMProvider } from "@astrouxds/mock-data";
import AppProvider from "provider/useAppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const options = {
  alertsPercentage: 0 as const,
  initial: 1,
  limit: 1,
  subsystemOptions: {
    desiredSubsystems: ["Attitude", "Payload", "Power", "Propulsion", "Thermal"],
    mnemonicsPerAssemblyDevice: 10
  }

};

root.render(
  <React.StrictMode>
    <TTCGRMProvider options={options}>
      <AppProvider>
        <App />
      </AppProvider>
    </TTCGRMProvider>
  </React.StrictMode>
);
