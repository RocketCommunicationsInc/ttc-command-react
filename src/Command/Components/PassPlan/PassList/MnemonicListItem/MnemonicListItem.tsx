import { RuxCheckbox, RuxIcon, RuxTreeNode } from "@astrouxds/react";
import { Mnemonic } from "@astrouxds/mock-data";
import MnemonicPopUp from "../../../Watcher/MnemonicPopUp";

type PropTypes = {
  stepNumber: number | string;
  slotNode: boolean;
  mnemonic: Mnemonic;
};

const MnemonicListItem = ({ stepNumber, slotNode, mnemonic }: PropTypes) => {
  return (
    <>
      <RuxTreeNode slot={slotNode ? "node" : ""} key={mnemonic.id}>
        <div slot="prefix" className="pass-plan_number-wrapper">
          {stepNumber}
        </div>
        <div className="pass-plan_mnemonic-wrapper">
          <RuxCheckbox className="pass-plan_checkbox" />
          {"Verify\u00A0"}
          <MnemonicPopUp
            isPassPlan
            triggerValue={mnemonic.mnemonicId}
            data={mnemonic}
          />
          {"\u00A0 = \u00A0"}
          {mnemonic.currentValue}
          {mnemonic.watched && (
            <div className="pass-plan_mnemonic-watching">
              <RuxIcon icon="visibility" size="extra-small" />
              <i>Watching</i>
            </div>
          )}
        </div>
      </RuxTreeNode>
    </>
  );
};

export default MnemonicListItem;
