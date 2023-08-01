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

import "./Mnemonics.css";
import { useCallback, useMemo, useState } from "react";
import { Mnemonic } from "@astrouxds/mock-data";

type PropTypes = {
  title: string | any;
};

type SortDirection = "ASC" | "DESC";

const Mnemonics = ({ title }: PropTypes) => {
  const { selectedAssemblyDevice }: ContextType = useAppContext();
  const [searchValue, setSearchValue] = useState("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("ASC");
  const [sortProp, setSortProp] = useState("");

  const filteredMnemonics = selectedAssemblyDevice.mnemonics.filter((value) =>
    Object.values(value).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const sortMnemonics = useCallback(
    (filteredMnemonics: Mnemonic[], sortDirection: SortDirection) => {
      const newSortedMnemonics = [...filteredMnemonics].sort((a, b) => {
        if (sortDirection !== "ASC") {
          console.log(a.status, "status");
          return a.status > b.status ? -1 : 1;
        } else {
          return a.status > b.status ? 1 : -1;
        }
      });
      console.log(newSortedMnemonics);
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

  const sortedAssemblyDevices = useMemo(() => {
    return sortMnemonics(filteredMnemonics, sortDirection);
  }, [filteredMnemonics, sortMnemonics, sortDirection]);

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
            <RuxTableHeaderCell onClick={handleSort}>
              Severity
              <RuxIcon
                icon={
                  sortDirection === "ASC" ? "arrow-drop-down" : "arrow-drop-up"
                }
                size="small"
                className={sortProp === "message" ? "visible" : "hidden"}
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
            {sortedAssemblyDevices.map((mnemonic, index) => (
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
