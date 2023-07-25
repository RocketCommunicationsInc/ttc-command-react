import {
  RuxStatus,
  RuxTableRow,
  RuxTableCell,
  RuxIcon,
  RuxPopUp,
  RuxMenu,
  RuxMenuItem,
} from "@astrouxds/react";
import MnemonicPopUp from "./MnemonicPopUp";
import type { Mnemonic, Status } from "@astrouxds/mock-data";
import { useTTCGRMActions } from "@astrouxds/mock-data";

type PropTypes = {
  rowData: Mnemonic;
  chartDataSlope: number;
  index: number;
};

const WatcherListItem = ({ rowData, chartDataSlope, index }: PropTypes) => {
  const { modifyMnemonic } = useTTCGRMActions();

  const handleRuxMenuSelected = (e: any) => { 
    if (e.detail.value === "remove"){
      modifyMnemonic({
        ...rowData,
        watched: false,
      }) else { 

      }
    }
    
  return (
    <RuxTableRow key={rowData.mnemonicId} data-index={index}>
      <RuxTableCell>
        <RuxStatus status={rowData.status as Status} />
      </RuxTableCell>
      <RuxTableCell>
        <MnemonicPopUp triggerValue={rowData.mnemonicId} data={rowData} />
      </RuxTableCell>
      <RuxTableCell> {rowData.unit}</RuxTableCell>
      <RuxTableCell>{String(rowData.thresholdMax)}</RuxTableCell>
      <RuxTableCell>
        <>
          {rowData.currentValue}
          {chartDataSlope >= 0 ? (
            <RuxIcon icon="arrow-upward" size="extra-small" />
          ) : (
            <RuxIcon icon="arrow-downward" size="extra-small" />
          )}
        </>
      </RuxTableCell>
      <RuxTableCell>
        <RuxPopUp placement="left" closeOnSelect>
          <RuxIcon slot="trigger" icon="more-horiz" size="small" />
          <RuxMenu
            onRuxmenuselected={handleRuxMenuSelected}      
          >
            <RuxMenuItem value="remove">Remove from Watcher</RuxMenuItem>
            <RuxMenuItem value="investigate">Investigate</RuxMenuItem>
          </RuxMenu>
        </RuxPopUp>
      </RuxTableCell>
    </RuxTableRow>
  );
};

export default WatcherListItem;
