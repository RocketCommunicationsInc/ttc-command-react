import {
  RuxTable,
  RuxTableBody,
  RuxTableHeader,
  RuxTableHeaderCell,
  RuxTableHeaderRow,
} from "@astrouxds/react";
import SelectMenuListItem from "./SelectMenuListItem/SelectMenuListItem";
import "./PassList.css"
import MnemonicListItem from "./MnemonicListItem/MnemonicListItem";

const PassList = () => {
  return (
    <>
      <RuxTable className="pre-pass-list-table">
        <RuxTableHeader>
          <RuxTableHeaderRow>
            <RuxTableHeaderCell>Step</RuxTableHeaderCell>
            <RuxTableHeaderCell>Instruction</RuxTableHeaderCell>
          </RuxTableHeaderRow>
        </RuxTableHeader>
        <RuxTableBody>
          <MnemonicListItem stepNumber={1} mnemonicRowAmount={2}/>
          <SelectMenuListItem stepNumber={2} />
          <MnemonicListItem stepNumber={3} mnemonicRowAmount={3} />
          
        </RuxTableBody>
      </RuxTable>
    </>
  );
};

export default PassList;
