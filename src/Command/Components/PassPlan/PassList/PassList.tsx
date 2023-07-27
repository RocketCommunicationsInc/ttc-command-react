import { RuxTree } from "@astrouxds/react";
import SelectMenuListItem from "./SelectMenuListItem/SelectMenuListItem";
import "./PassList.css";
import MnemonicListItem from "./MnemonicListItem/MnemonicListItem";
import ExecutableListItem from "./ExecutableListItem/ExecutableListItem";

const PassList = () => {
  return (
    <>
      <div className="pass_header-wrapper">
        <div className="pass_header-step">Step</div>
        <div className="pass_header-instruction">Instruction</div>
      </div>
      <RuxTree className="pass_body-wrapper">
        <MnemonicListItem stepNumber={1} slotNode={false} />
        <MnemonicListItem stepNumber={1} slotNode={false} />
        <MnemonicListItem stepNumber={1} slotNode={false} />
        <SelectMenuListItem stepNumber={2} />
        <ExecutableListItem stepNumber={3} />
        <MnemonicListItem stepNumber={4} slotNode={false} />
      </RuxTree>
    </>
  );
};

export default PassList;
