import SubsystemsTree from "./Subsystems/SubsystemsTree";
import Assembly from "./Assembly/Assembly";
import Mnemonics from "./Mnemonics/Mnemonics";
import "./Investigate.css";

import { useAppContext, ContextType } from "provider/useAppContext";
import { RuxButton } from "@astrouxds/react";

const Investigate = () => {
  const {
    showInvestigate,
    selectedAssemblyDevice,
    toggleInvestigate,
    resetSelected,
  }: ContextType = useAppContext();

  const handleReturnToCommand = () => {
    toggleInvestigate();
    resetSelected();
  };

  return (
    <div className="investigate-background" data-active={showInvestigate}>
      <RuxButton
        className="investigate-breadcrumb"
        borderless
        size="small"
        icon="keyboard-arrow-left"
        onClick={() => handleReturnToCommand()}
      >
        Return to Command
      </RuxButton>
      <SubsystemsTree />
      <Assembly />
      <Mnemonics title={selectedAssemblyDevice.name} />
    </div>
  );
};

export default Investigate;
