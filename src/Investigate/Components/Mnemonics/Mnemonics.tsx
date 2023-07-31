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
import { useState } from "react";

type PropTypes = {
  title: string | any;
};

const Mnemonics = ({ title }: PropTypes) => {
  const { selectedAssemblyDevice }: ContextType = useAppContext();
  const [searchValue, setSearchValue] = useState("");

  const filteredMnemonics = selectedAssemblyDevice.mnemonics.filter((value) =>
    Object.values(value).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  const [watched, setWatched] = useState(filteredMnemonics);

  const handleWatching = (id: string) => {
    setWatched((prevData) =>
      prevData.map((device) =>
        device.id === id ? { ...device, watched: !device.watched } : device
      )
    );
  };

  const numOfWatchedMnemonics = watched.filter(
    (device) => device.watched
  ).length;

  return (
    <RuxContainer className="electronics">
      <div slot="header">
        <span>{title}</span>
        <RuxInput
          onRuxinput={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Filter by name"
        />
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
            <RuxTableHeaderCell>
              Watching ({numOfWatchedMnemonics})
            </RuxTableHeaderCell>
          </RuxTableHeaderRow>
          <RuxTableBody>
            {filteredMnemonics.map((mnemonic, index) => (
              <RuxTableRow key={index}>
                <RuxTableCell>
                  <RuxStatus status={mnemonic.status} />
                </RuxTableCell>
                <RuxTableCell>{mnemonic.mnemonicId}</RuxTableCell>
                <RuxTableCell>{mnemonic.measurement}</RuxTableCell>
                <RuxTableCell>{mnemonic.currentValue}</RuxTableCell>
                <RuxTableCell>{mnemonic.unit}</RuxTableCell>
                <RuxTableCell>
                  <RuxCheckbox
                    checked={mnemonic.watched}
                    label="Watching"
                    onRuxchange={() => handleWatching(mnemonic.id)}
                    key={mnemonic.id}
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
