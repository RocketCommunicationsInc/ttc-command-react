import { RuxTree } from "@astrouxds/react";
import SelectMenuListItem from "./SelectMenuListItem/SelectMenuListItem";
import "./PassList.css";
import MnemonicListItem from "./MnemonicListItem/MnemonicListItem";
import ExecutableListItem from "./ExecutableListItem/ExecutableListItem";

type PropTypes = {
  commandList: string[];
};

const PassList = ({ commandList }: PropTypes) => {
  const itemAmount: number = 8;

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
        <ExecutableListItem stepNumber={5} queueCommand={"WAIT_TYPE"} />
        <MnemonicListItem stepNumber={6} slotNode={false} />
        <MnemonicListItem stepNumber={7} slotNode={false} />
        {commandList.length > 0
          ? commandList.map((item, index) => {
              return (
                <ExecutableListItem
                  key={index}
                  stepNumber={itemAmount + index}
                  queueCommand={item}
                />
              );
            })
          : null}
      </RuxTree>
    </>
  );
};

export default PassList;
