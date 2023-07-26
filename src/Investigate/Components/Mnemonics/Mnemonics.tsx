import {
  RuxTable,
  RuxContainer,
  RuxInput,
  RuxSegmentedButton,
  RuxTableHeaderCell,
  RuxTableHeaderRow,
  RuxTableBody,
  RuxTableRow,
  RuxTableCell,
  RuxStatus,
  RuxCheckbox,
} from "@astrouxds/react";
import { useAppContext, ContextType } from "../../../provider/useAppContext";

import "./Mnemonics.css";

type PropTypes = {
  title: string | any;
};

const Mnemonics = ({ title }: PropTypes) => {
  const { selectedAssemblyDevice }: ContextType = useAppContext();

  return (
    <RuxContainer className="electronics">
      <div slot="header">
        <span>{title}</span>
        <RuxInput type="search" placeholder="Filter by name" />
        <RuxSegmentedButton
          data={[
            { label: "All" },
            { label: "Marginal" },
            { label: "Critical" },
          ]}
        />
      </div>
      <div className="table-wrapper electronics">
        <RuxTable>
          <RuxTableHeaderRow>
            <RuxTableHeaderCell>Severity</RuxTableHeaderCell>
            <RuxTableHeaderCell>Mnemonic</RuxTableHeaderCell>
            <RuxTableHeaderCell>Measurment</RuxTableHeaderCell>
            <RuxTableHeaderCell>Value</RuxTableHeaderCell>
            <RuxTableHeaderCell>Unit</RuxTableHeaderCell>
            <RuxTableHeaderCell>Watching (2)</RuxTableHeaderCell>
          </RuxTableHeaderRow>
          <RuxTableBody>
            {selectedAssemblyDevice.mnemonics.map((device) => (
              <RuxTableRow>
                <RuxTableCell>
                  <RuxStatus status={device.status} />
                </RuxTableCell>
                <RuxTableCell>{device.mnemonicId}</RuxTableCell>
                <RuxTableCell>{device.measurement}</RuxTableCell>
                <RuxTableCell>{device.currentValue}</RuxTableCell>
                <RuxTableCell>{device.unit}</RuxTableCell>
                <RuxTableCell>
                  <RuxCheckbox
                    checked={device.watched === true ? true : false}
                    label="Watching"
                  />
                </RuxTableCell>
              </RuxTableRow>
            ))}
          </RuxTableBody>
        </RuxTable>
      </div>
    </RuxContainer>
  );
};

export default Mnemonics;
