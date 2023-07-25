import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TTCGRMProvider } from "@astrouxds/mock-data";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const options = {
  alertsPercentage: 0 as const,
  initial: 1,
  limit: 1,
  desiredSubsystems: ["Altitude", "Payload", "Power", "Propulsion", "Thermal"],
};

root.render(
  <React.StrictMode>
    <TTCGRMProvider options={options}>
      <App />
    </TTCGRMProvider>
  </React.StrictMode>
);
