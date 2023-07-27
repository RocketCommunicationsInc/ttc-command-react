import {
  RuxButton,
  RuxProgress,
  RuxIcon,
  RuxTreeNode,
} from "@astrouxds/react";
import MnemonicListItem from "../MnemonicListItem/MnemonicListItem";

type PropTypes = {
  stepNumber: number;
};

const ExecutableListItem = ({ stepNumber }: PropTypes) => {

  return (
        <RuxTreeNode expanded>
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
        <MnemonicListItem stepNumber={stepNumber} slotNode={true} />
        </RuxTreeNode>
  );
};

export default ExecutableListItem;
