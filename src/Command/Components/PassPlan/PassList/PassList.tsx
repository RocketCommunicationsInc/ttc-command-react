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
        <MnemonicListItem stepNumber={2} slotNode={false} />
        <MnemonicListItem stepNumber={3} slotNode={false} />
        <SelectMenuListItem stepNumber={4} />
        <ExecutableListItem stepNumber={5} />
        <MnemonicListItem stepNumber={6} slotNode={false} />
        <MnemonicListItem stepNumber={7} slotNode={false} />
      </RuxTree>
    </>
  );
};

export default PassList;
