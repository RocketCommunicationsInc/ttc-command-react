import { useEffect } from "react";
import { faker } from "@faker-js/faker";
import {
  RuxContainer,
  RuxTable,
  RuxTableHeader,
  RuxTableHeaderRow,
  RuxTableHeaderCell,
  RuxTableBody,
} from "@astrouxds/react";
import WatcherListItem from "./WatcherListItem";
import type { Mnemonic } from "@astrouxds/mock-data/dist/types";
import "./Watcher.css";

import { useAppContext, ContextType } from "../../../provider/useAppContext";

const styles = {
  container: {
    display: "flex",
  },
};

const generateMnemonicValue = () =>
  faker.number.float({ max: 110, multipleOf: 0.1 });

const generateChartData = () =>
  faker.helpers.multiple(() => generateMnemonicValue(), { count: 9 });

const Watcher = () => {
  const { contact }: ContextType = useAppContext();
  const watchedMnemonics = contact.mnemonics.filter(
    (mnemonic) => mnemonic.watched
  );

  const updatedMnemoncicsData = watchedMnemonics.map((data) => {
    return {
      ...data,
      previousReadings: generateChartData(),
    };
  });

  useEffect(() => {
    const watcherDiv = document.querySelector(".watcher");
    const tableRows = watcherDiv?.querySelectorAll("rux-table-row");
    //sets first MNEMONIC as selected on mount
    tableRows?.[0]?.setAttribute("selected", "");

    tableRows?.forEach((row) => {
      row.addEventListener("click", (event) => toggleSelected(event));
    });

    const toggleSelected = (event: any) => {
      const watcherDiv = document.querySelector(".watcher");
      const tableRows = watcherDiv?.querySelectorAll("rux-table-row");
      const closestRow = event.target.closest("rux-table-row");

      if (!closestRow || event.target.nodeName === "RUX-INPUT") return;
      tableRows?.forEach((row) => {
        row.removeAttribute("selected");
      });
      closestRow.setAttribute("selected", "");
    };
  }, []);

  return (
    <RuxContainer className="watcher">
      <div slot="header" style={styles.container}>
        Watcher
      </div>
      <div className="table-wrapper">
        <RuxTable>
          <RuxTableHeader>
            <RuxTableHeaderRow>
              <RuxTableHeaderCell>
                {/* placeholder for status icon column */}
              </RuxTableHeaderCell>
              <RuxTableHeaderCell>Mnemonic</RuxTableHeaderCell>
              <RuxTableHeaderCell>Unit</RuxTableHeaderCell>
              <RuxTableHeaderCell>Threshold</RuxTableHeaderCell>
              <RuxTableHeaderCell>Actual</RuxTableHeaderCell>
              <RuxTableHeaderCell>
                {/* placeholder for actions menu column */}
              </RuxTableHeaderCell>
            </RuxTableHeaderRow>
          </RuxTableHeader>
          <RuxTableBody>
            {updatedMnemoncicsData.map(
              (dataObj: Mnemonic & { previousReadings: number[] }, index) => {
                const lastDataPoint = dataObj.previousReadings.at(-1) || 0;
                const chartDataSlope =
                  lastDataPoint - dataObj.previousReadings[0];
                return (
                  <WatcherListItem
                    key={dataObj.id}
                    rowData={dataObj}
                    chartDataSlope={chartDataSlope}
                    index={index}
                  />
                );
              }
            )}
          </RuxTableBody>
        </RuxTable>
      </div>
    </RuxContainer>
  );
};

export default Watcher;
