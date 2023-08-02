import { RuxTree } from "@astrouxds/react";
import SelectMenuListItem from "./SelectMenuListItem/SelectMenuListItem";
import "./PassList.css";
import MnemonicListItem from "./MnemonicListItem/MnemonicListItem";
import ExecutableListItem from "./ExecutableListItem/ExecutableListItem";
import { Mnemonic } from "@astrouxds/mock-data";
import { generateRandomNumberArray } from "utils";

type PropTypes = {
  mnemonics: Mnemonic[];
};

const numberArray1 = generateRandomNumberArray(3);

const numberArray2 = generateRandomNumberArray(2);

const PassList = ({ mnemonics }: PropTypes) => {
  return (
    <>
      <RuxTree className="pass_body-wrapper">
        {numberArray1.map((item, index) => (
          <MnemonicListItem
            key={index}
            stepNumber={index + 1}
            slotNode={false}
            mnemonic={mnemonics[item]}
          />
        ))}
        <SelectMenuListItem stepNumber={4} />
        <ExecutableListItem stepNumber={5} mnemonics={mnemonics} />
        {numberArray2.map((item, index) => (
          <MnemonicListItem
            key={index}
            stepNumber={index + 6}
            slotNode={false}
            mnemonic={mnemonics[item]}
          />
        ))}
      </RuxTree>
    </>
  );
};

export default PassList;
