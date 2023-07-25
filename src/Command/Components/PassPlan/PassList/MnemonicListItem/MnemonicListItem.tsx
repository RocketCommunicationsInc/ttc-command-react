import {
    RuxCheckbox,
    RuxTableCell,
    RuxTableRow,
  } from "@astrouxds/react";
  import { generateMnemonics } from "@astrouxds/mock-data";
import MnemonicPopUp from "../../../Watcher/MnemonicPopUp";
  
  type PropTypes = {
    stepNumber: number;
    mnemonicRowAmount: number;
  };


  
  const MnemonicListItem = ({ stepNumber, mnemonicRowAmount }: PropTypes) => {
    const mnemonicsData = generateMnemonics(mnemonicRowAmount, {});
    console.log(mnemonicsData)
    return (
      <>
        {mnemonicsData.map(
            (data) => {
            return (
                <RuxTableRow key={data.id}>
                    <RuxTableCell>
                        <div className="pass_number-wrapper">{stepNumber}</div>
                    </RuxTableCell>
                    <RuxTableCell>
                        <div className="pass_mnemonic-wrapper">
                            <RuxCheckbox />
                            Verify{'\u00A0'}<MnemonicPopUp triggerValue={data.mnemonicId} data={data} />{'\u00A0 = \u00A0'}{data.currentValue}
                        </div>
                    </RuxTableCell>
                </RuxTableRow>
            );
            }
        )}
      </>
    );
  };
  
  export default MnemonicListItem;
  