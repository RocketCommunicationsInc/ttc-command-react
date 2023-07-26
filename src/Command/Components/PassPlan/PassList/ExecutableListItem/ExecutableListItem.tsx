import {
  RuxButton,
  RuxCheckbox,
  RuxProgress,
  RuxIcon,
  RuxTreeNode,
} from "@astrouxds/react";
import { generateMnemonics } from "@astrouxds/mock-data";
import MnemonicPopUp from "../../../Watcher/MnemonicPopUp";

type PropTypes = {
  stepNumber: number;
  mnemonicRowAmount: number;
};

const ExecutableListItem = ({ stepNumber, mnemonicRowAmount }: PropTypes) => {
  const mnemonicsData = generateMnemonics(mnemonicRowAmount, {});

  return (
        <RuxTreeNode>
          <div slot="prefix" className="pass_number-wrapper">{stepNumber}</div>
          <div className="pass_executable-wrapper">
            <RuxButton iconOnly icon="play-arrow" />
            <div className="pass_executable-progress-wrapper">
                <div className="pass_command-name">
                    Command Name Placeholder
                </div>
                <div className="pass_progress-time">
                    <RuxProgress hideLabel />
                    <RuxIcon icon="schedule" size="extra-small" />00:00:25
                </div>
            </div>
          </div>

          {mnemonicsData.map((data) => {
            return (
              <RuxTreeNode slot="node" key={data.id}>
                <div slot="prefix" className="pass_number-wrapper">{`${stepNumber}.1`}</div>
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
        </RuxTreeNode>
  );
};

export default ExecutableListItem;
