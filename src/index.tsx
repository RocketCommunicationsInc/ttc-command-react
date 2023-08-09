import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TTCGRMProvider, ContactsServiceOptions } from "@astrouxds/mock-data";
import AppProvider from "provider/useAppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const options: ContactsServiceOptions = {
  alertsPercentage: 0 as const,
  initial: 1,
  limit: 1,
  subsystemOptions: {
    desiredSubsystems: [
      "Attitude",
      "Payload",
      "Power",
      "Propulsion",
      "Thermal",
    ],
    assemblyDeviceOptions: {
      mnemonicsPerAssemblyDevice: 10,
    }
    ,
    mnemonicOptions: {
      deviation: -6,
      seriousThresholdRange: 4,
      cautionThresholdRange: 6
    }
  },
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
