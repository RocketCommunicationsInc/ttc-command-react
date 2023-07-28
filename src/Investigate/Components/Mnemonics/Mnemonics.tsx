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

import "./Mnemonics.css";
import { useAppContext } from "provider/useAppContext";

type PropTypes = {
  title: string | any;
};

const Mnemonics = ({ title }: PropTypes) => {
  const { contact } = useAppContext()
  console.log(contact.mnemonics)

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
            <RuxTableRow>
              <RuxTableCell>
                <RuxStatus status="critical" />
              </RuxTableCell>
              <RuxTableCell>PWST21A</RuxTableCell>
              <RuxTableCell>
                Start Tracker 1 Heater 8P Voltage Monitor
              </RuxTableCell>
              <RuxTableCell>74.2</RuxTableCell>
              <RuxTableCell>Volts</RuxTableCell>
              <RuxTableCell>
                <RuxCheckbox checked label="Watching" />
              </RuxTableCell>
            </RuxTableRow>
          </RuxTableBody>
        </RuxTable>
      </div>
    </RuxContainer>
  );
};

export default Mnemonics;
