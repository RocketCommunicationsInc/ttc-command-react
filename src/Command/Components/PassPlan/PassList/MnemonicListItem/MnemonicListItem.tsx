import {
    RuxCheckbox,
    RuxTableCell,
    RuxTableRow,
  } from "@astrouxds/react";
  import { generateMnemonics } from "@astrouxds/mock-data";
import type { Mnemonic } from "@astrouxds/mock-data/dist/types";
import MnemonicPopUp from "../../../Watcher/MnemonicPopUp";
import { faker } from "@faker-js/faker";
  import { useState } from "react";
  
  type PropTypes = {
    stepNumber: number;
  };

  const generateMnemonicValue = () =>
  faker.number.float({ max: 110, precision: 0.1 });

const generateChartData = () =>
  faker.helpers.multiple(() => generateMnemonicValue(), { count: 1 });

const mnemonicsData = generateMnemonics(1, {});
console.log(mnemonicsData)
const updatedMnemoncicsData = mnemonicsData.map((data) => {
  return {
    ...data,
    previousReadings: generateChartData(),
  };
});
  
  const MnemonicListItem = ({ stepNumber }: PropTypes) => {
    return (
      <>
        {mnemonicsData.map(
            (data) => {
            return (
                <RuxTableRow key={data.id}>
                    <RuxTableCell>
                        <div className="pass_number-wrapper">{stepNumber}</div>
                    </RuxTableCell>
                    <RuxTableCell>
                        <div className="pass_mnemonic-wrapper">
                            <RuxCheckbox />
                            Verify{'\u00A0'}<MnemonicPopUp triggerValue={data.mnemonicId} data={data} />{'\u00A0'}={'\u00A0'}{data.currentValue}
                        </div>
                    </RuxTableCell>
                </RuxTableRow>
            );
            }
        )}
      {/* {updatedMnemoncicsData.map(
              (dataObj: Mnemonic & { previousReadings: number[] }, index) => {
                // const lastDataPoint = dataObj.previousReadings.at(-1) || 0;
                // const chartDataSlope =
                //   lastDataPoint - dataObj.previousReadings[0];
                return (
                    <RuxTableRow key={dataObj.id} data-index={index}>
                        <RuxTableCell>
                            <div className="pass_number-wrapper">{stepNumber}</div>
                        </RuxTableCell>
                        <RuxTableCell>
                            <MnemonicPopUp triggerValue={dataObj.mnemonicId} data={dataObj} />
                        </RuxTableCell>
                    </RuxTableRow>
                //   <WatcherListItem
                //     key={dataObj.id}
                //     rowData={dataObj}
                //     chartDataSlope={chartDataSlope}
                //     index={index}
                //   />
                );
              }
            )} */}
      </>
    );
  };
  
  export default MnemonicListItem;
  