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
  RuxIcon,
} from "@astrouxds/react";
import { useAppContext, ContextType } from "../../../provider/useAppContext";
import { useCallback, useMemo, useState } from "react";
import { useTTCGRMActions, type Mnemonic } from "@astrouxds/mock-data";

import "./Mnemonics.css";

type PropTypes = {
  title: string | any;
};

type SortDirection = "ASC" | "DESC";

const Mnemonics = ({ title }: PropTypes) => {
  const { modifyMnemonic } = useTTCGRMActions();
  const { selectedAssemblyDevice }: ContextType = useAppContext();
  const [searchValue, setSearchValue] = useState("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("ASC");
  const [sortProp, setSortProp] = useState("");
  const [filterValue, setFilterValue] = useState("All");

  const filteredMnemonicIds = selectedAssemblyDevice.mnemonics.filter((value) =>
    value.mnemonicId.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredMnemonicStatus =
    filterValue === "Critical"
      ? filteredMnemonicIds.filter((val) => val.status === "critical")
      : filterValue === "Marginal"
      ? filteredMnemonicIds.filter(
          (val) => val.status === "caution" || val.status === "serious"
        )
      : filteredMnemonicIds;

  const sortMnemonics = useCallback(
    (filteredMnemonics: Mnemonic[], sortDirection: SortDirection) => {
      const newSortedMnemonics = [...filteredMnemonics].sort((a, b) => {
        const statusOrder = [
          "off",
          "standby",
          "normal",
          "caution",
          "serious",
          "critical",
        ];
        const statusAsc = statusOrder.indexOf(a.status);
        const statusDesc = statusOrder.indexOf(b.status);
        if (sortDirection !== "ASC") {
          return statusAsc - statusDesc;
        } else {
          return statusDesc - statusAsc;
        }
      });
      return newSortedMnemonics;
    },
    []
  );

  const handleSort = () => {
    if ("status" === sortProp) {
      if (sortDirection === "ASC") {
        setSortDirection("DESC");
      } else {
        setSortDirection("ASC");
      }
    } else {
      setSortProp("status");
    }
  };

  const sortedMnemonics = useMemo(() => {
    return sortMnemonics(filteredMnemonicStatus, sortDirection);
  }, [filteredMnemonicStatus, sortMnemonics, sortDirection]);

  const handleWatching = (mnemonic: Mnemonic) => {
    modifyMnemonic({ ...mnemonic, watched: !mnemonic.watched });
  };

  const numOfWatchedMnemonics = filteredMnemonicStatus.filter(
    (mnemonic) => mnemonic.watched
  ).length;

  return (
    <RuxContainer className="mnemonics">
      <div slot="header">
        <span>{title}</span>
        <RuxInput
          onRuxinput={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Filter by name"
        />
        <RuxSegmentedButton
          selected={filterValue}
          onRuxchange={(e) => setFilterValue(e.target.selected)}
          data={[
            { label: "All" },
            { label: "Marginal" },
            { label: "Critical" },
          ]}
        />
      </div>
      <div className="table-wrapper mnemonics">
        <RuxTable>
          <RuxTableHeaderRow>
            <RuxTableHeaderCell onClick={handleSort}>
              Severity
              <RuxIcon
                icon={
                  sortDirection === "ASC" ? "arrow-drop-down" : "arrow-drop-up"
                }
                size="small"
                className="visible"
              />
            </RuxTableHeaderCell>
            <RuxTableHeaderCell>Mnemonic</RuxTableHeaderCell>
            <RuxTableHeaderCell>Measurment</RuxTableHeaderCell>
            <RuxTableHeaderCell>Value</RuxTableHeaderCell>
            <RuxTableHeaderCell>Unit</RuxTableHeaderCell>
            <RuxTableHeaderCell>
              Watching ({numOfWatchedMnemonics})
            </RuxTableHeaderCell>
          </RuxTableHeaderRow>
          <RuxTableBody>
            {sortedMnemonics.map((mnemonic, index) => (
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
                    onRuxchange={() => handleWatching(mnemonic)}
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
