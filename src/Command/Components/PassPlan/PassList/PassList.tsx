import { RuxTree } from "@astrouxds/react";
import SelectMenuListItem from "./SelectMenuListItem/SelectMenuListItem";
import "./PassList.css";
import MnemonicListItem from "./MnemonicListItem/MnemonicListItem";
import ExecutableListItem from "./ExecutableListItem/ExecutableListItem";
import { Mnemonic } from "@astrouxds/mock-data";
import { getRandomInt } from "utils";

type PropTypes = {
  mnemonics: Mnemonic[];
}

const numberArray1 = [
  getRandomInt(0,100),
  getRandomInt(0,100),
  getRandomInt(0,100),
]

const numberArray2 = [
  getRandomInt(0,100),
  getRandomInt(0,100),
]

const PassList = ({mnemonics}: PropTypes) => {
  // const randomMnemonics = useMemo(() => {
  //   let mnemonicsArray: Mnemonic[] = []
    
  //     mnemonicsArray.push(mnemonics[getRandomInt(0,100)])

    
  //   return mnemonicsArray;
  // },[])

  return (
    <>
      <div className="pass_header-wrapper">
        <div className="pass_header-step">Step</div>
        <div className="pass_header-instruction">Instruction</div>
      </div>
      <RuxTree className="pass_body-wrapper">
        {
          numberArray1.map((item, index) => (
            <MnemonicListItem
            key={index}
            stepNumber={index + 1}
            slotNode={false}
            mnemonic={mnemonics[item]}
          />
          ))
        }
        <SelectMenuListItem stepNumber={4} />
        <ExecutableListItem stepNumber={5} mnemonics={mnemonics} />
        {
          numberArray2.map((item, index) => (
            <MnemonicListItem
            key={index}
            stepNumber={index + 6}
            slotNode={false}
            mnemonic={mnemonics[item]}
          />
          ))
        }
      </RuxTree>
    </>
  );
};

export default PassList;
