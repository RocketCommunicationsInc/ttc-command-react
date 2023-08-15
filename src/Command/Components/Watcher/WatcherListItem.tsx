import {
  RuxStatus,
  RuxTableRow,
  RuxTableCell,
  RuxIcon,
  RuxPopUp,
  RuxMenu,
  RuxMenuItem,
  RuxTooltip,
} from "@astrouxds/react";
import type { Mnemonic, Status } from "@astrouxds/mock-data";
import { useTTCGRMActions } from "@astrouxds/mock-data";

import { useAppContext, ContextType } from "provider/useAppContext";

type PropTypes = {
  rowData: Mnemonic;
  chartDataSlope: number;
  index: number;
};

const WatcherListItem = ({ rowData, chartDataSlope, index }: PropTypes) => {
  const { modifyMnemonic } = useTTCGRMActions();
  const {
    toggleInvestigate,
    selectSubsystemsFromMnemonic,
    selectMnemonic,
  }: ContextType = useAppContext();

  const handleRuxMenuSelected = (e: any, mnemonic: Mnemonic) => {
    if (e.detail.value === "remove") {
      modifyMnemonic({
        ...rowData,
        watched: false,
      });
    }
    if (e.detail.value === "investigate") {
      selectMnemonic(mnemonic);
      selectSubsystemsFromMnemonic(mnemonic);
      toggleInvestigate();
    }
    return;
  };

  const tooltipMessage = `${rowData.subsystem}/ ${rowData.measurement} - ${rowData.mnemonicId} `;

  return (
    <RuxTableRow key={rowData.mnemonicId} data-index={index}>
      <RuxTableCell>
        <RuxStatus status={rowData.status as Status} />
      </RuxTableCell>
      <RuxTableCell>
        <RuxTooltip message={tooltipMessage} placement="top" delay={300}>
          {rowData.mnemonicId}
        </RuxTooltip>
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
          <RuxIcon slot="trigger" icon="more-horiz" size="1.5rem" />
          <RuxMenu onRuxmenuselected={(e) => handleRuxMenuSelected(e, rowData)}>
            <RuxMenuItem value="remove">Remove from Watcher</RuxMenuItem>
            <RuxMenuItem value="investigate">Investigate</RuxMenuItem>
          </RuxMenu>
        </RuxPopUp>
      </RuxTableCell>
    </RuxTableRow>
  );
};

export default WatcherListItem;
