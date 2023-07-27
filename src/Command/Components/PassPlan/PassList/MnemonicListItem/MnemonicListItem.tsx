import {
  RuxCheckbox,
  RuxIcon,
  RuxTreeNode,
} from "@astrouxds/react";
import { generateMnemonics } from "@astrouxds/mock-data";
import MnemonicPopUp from "../../../Watcher/MnemonicPopUp";

type PropTypes = {
  stepNumber: number;
  slotNode: boolean;
};

const mnemonicsData = generateMnemonics(4, {});

const MnemonicListItem = ({ stepNumber, slotNode }: PropTypes) => {
  return (
    <>
      {mnemonicsData.map((data) => {
        return (
          <RuxTreeNode slot={ slotNode ? "node" : "" } key={data.id}>
            <div slot="prefix" className="pass_number-wrapper">
              {stepNumber}
            </div>
            <div className="pass_mnemonic-wrapper">
              <RuxCheckbox />
              {"Verify\u00A0"}
              <MnemonicPopUp triggerValue={data.mnemonicId} data={data} />
              {"\u00A0 = \u00A0"}
              {data.currentValue}
              {data.watched && (
                <div className="pass_mnemonic-watching">
                  <RuxIcon icon="visibility" size="extra-small" />
                  <i>Watcing</i>
                </div>
              )}
            </div>
          </RuxTreeNode>
        );
      })}
    </>
  );
};

export default MnemonicListItem;
