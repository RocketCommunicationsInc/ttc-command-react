import SubsystemsTree from "./Subsystems/SubsystemsTree";
import Assembly from "./Assembly/Assembly";
import Mnemonics from "./Mnemonics/Mnemonics";
import "./Investigate.css";

import { useAppContext, ContextType } from "provider/useAppContext";

const Investigate = () => {
  const { showInvestigate, selectedAssemblyDevice }: ContextType =
    useAppContext();

  return (
    <div className="investigate-background" data-active={showInvestigate}>
      <SubsystemsTree />
      <Assembly />
      <Mnemonics title={selectedAssemblyDevice.name} />
    </div>
  );
};

export default Investigate;
