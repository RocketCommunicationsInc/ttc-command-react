import { RuxTree } from "@astrouxds/react";
import SelectMenuListItem from "./SelectMenuListItem/SelectMenuListItem";
import "./PassList.css";
import MnemonicListItem from "./MnemonicListItem/MnemonicListItem";
import ExecutableListItem from "./ExecutableListItem/ExecutableListItem";
import { Mnemonic } from "@astrouxds/mock-data";
import { generateRandomNumberArray } from "utils";

type PropTypes = {
  commandList: string[];
  mnemonics: Mnemonic[];
};

const itemAmount: number = 8;

const numberArray1 = generateRandomNumberArray(3);

const numberArray2 = generateRandomNumberArray(2);

const PassList = ({ commandList, mnemonics }: PropTypes) => {
  return (
    <>
      <RuxTree className="pass-plan_tree-wrapper">
        {numberArray1.map((item, index) => (
          <MnemonicListItem
            key={index}
            stepNumber={index + 1}
            slotNode={false}
            mnemonic={mnemonics[item]}
          />
        ))}
        <SelectMenuListItem stepNumber={4} />
        <ExecutableListItem
          stepNumber={5}
          mnemonics={mnemonics}
          queueCommand={"WAIT_TYPE"}
        />
        {numberArray2.map((item, index) => (
          <MnemonicListItem
            key={index}
            stepNumber={index + 6}
            slotNode={false}
            mnemonic={mnemonics[item]}
          />
        ))}
        {commandList.length > 0
          ? commandList.map((item, index) => {
              return (
                <ExecutableListItem
                  key={index}
                  stepNumber={itemAmount + index}
                  queueCommand={item}
                  mnemonics={mnemonics}
                />
              );
            })
          : null}
      </RuxTree>
    </>
  );
};

export default PassList;
