import { RuxCheckbox, RuxIcon, RuxTreeNode } from "@astrouxds/react";
import { Mnemonic } from "@astrouxds/mock-data";
import MnemonicPopUp from "../../../Watcher/MnemonicPopUp";
import { useState } from "react";

type PropTypes = {
  stepNumber: number | string;
  slotNode: boolean;
  mnemonic: Mnemonic;
};

const MnemonicListItem = ({ stepNumber, slotNode, mnemonic }: PropTypes) => {
  const [watched, setWatched] = useState<boolean>(false);

  return (
    <>
      <RuxTreeNode slot={slotNode ? "node" : ""} key={mnemonic.id}>
        <div slot="prefix" className="pass_number-wrapper">
          {stepNumber}
        </div>
        <div className="pass_mnemonic-wrapper">
          <RuxCheckbox />
          {"Verify\u00A0"}
          <MnemonicPopUp
            isPassPlan
            setWatched={setWatched}
            triggerValue={mnemonic.mnemonicId}
            data={mnemonic}
          />
          {"\u00A0 = \u00A0"}
          {mnemonic.currentValue}
          {watched && (
            <div className="pass_mnemonic-watching">
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
