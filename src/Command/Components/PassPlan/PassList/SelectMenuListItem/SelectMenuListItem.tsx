import { RuxOption, RuxSelect, RuxTreeNode } from "@astrouxds/react";
import { useState } from "react";
import "./SelectMenuListItem.css";

type PropTypes = {
  stepNumber: number;
};

const SelectMenuListItem = ({ stepNumber }: PropTypes) => {
  const [xyz, setXyz] = useState<string>("yes");
  const [receiveTelemetry, setReceiveTelemetry] = useState<string>("yes");
  return (
    <RuxTreeNode>
      <div slot="prefix" className="pass-plan_number-wrapper">
        {stepNumber}
      </div>
      <div className="pass_select-wrapper">
        <RuxSelect
          label="Is 'XYZ' Selected?"
          value={xyz}
          onRuxchange={(e) => setXyz(e.target.value as string)}
        >
          <RuxOption label="Yes" value="yes">
            Yes
          </RuxOption>
          <RuxOption label="No" value="no">
            No
          </RuxOption>
        </RuxSelect>
        <RuxSelect
          label="Are you receiving telemetry?"
          value={receiveTelemetry}
          onRuxchange={(e) => setReceiveTelemetry(e.target.value as string)}
        >
          <RuxOption label="Yes" value="yes">
            Yes
          </RuxOption>
          <RuxOption label="No" value="no">
            No
          </RuxOption>
        </RuxSelect>
      </div>
    </RuxTreeNode>
  );
};

export default SelectMenuListItem;
