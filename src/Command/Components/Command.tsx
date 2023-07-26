import Alerts from "./Alerts/Alerts";
import "./Command.css";
import LinkStatus from "./LinkStatus/LinkStatus";
import PassPlan from "./PassPlan/PassPlan";
import Subsystems from "./Subsystems/Subsystems";
import Watcher from "./Watcher/Watcher";

import { useAppContext, ContextType } from "../../provider/useAppContext";

const Command = () => {
  const { showInvestigate }: ContextType = useAppContext();

  return (
    <div className="command-background" data-active={!showInvestigate}>
      <Alerts />
      <PassPlan />
      <Subsystems />
      <LinkStatus />
      <Watcher />
    </div>
  );
};

export default Command;
