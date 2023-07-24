import {
  RuxOption,
  RuxSelect,
  RuxTableCell,
  RuxTableRow,
} from "@astrouxds/react";
import { useState } from "react";
import "./SelectMenuListItem.css";

type PropTypes = {
  stepNumber: number;
};

const SelectMenuListItem = ({ stepNumber }: PropTypes) => {
  const [xyz, setXyz] = useState<string>("yes");
  const [receiveTelemetry, setReceiveTelemetry] = useState<string>("yes");
  return (
    <>
      <RuxTableRow>
        <RuxTableCell>
          <div className="pass_number-wrapper">{stepNumber}</div>
        </RuxTableCell>
        <RuxTableCell>
          <div className="pass_select-wrapper">
            <RuxSelect
              label="Is 'XYZ' Selected?"
              value={xyz}
              onRuxchange={(e) => setXyz(e.target.value as string)}
            >
              <RuxOption label="yes" value="yes">
                Yes
              </RuxOption>
              <RuxOption label="no" value="no">
                No
              </RuxOption>
            </RuxSelect>
            <RuxSelect
              label="Are you receiving telemetry?"
              value={receiveTelemetry}
              onRuxchange={(e) => setReceiveTelemetry(e.target.value as string)}
            >
              <RuxOption label="yes" value="yes">
                Yes
              </RuxOption>
              <RuxOption label="no" value="no">
                No
              </RuxOption>
            </RuxSelect>
          </div>
        </RuxTableCell>
      </RuxTableRow>
    </>
  );
};

export default SelectMenuListItem;
