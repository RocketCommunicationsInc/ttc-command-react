import { useEffect, useRef, useState } from "react";
import {
  RuxStatus,
  RuxTableRow,
  RuxTableCell,
  RuxIcon,
  RuxPopUp,
  RuxMenu,
  RuxMenuItem,
  RuxTooltip,
  RuxDialog,
} from "@astrouxds/react";
import type { Mnemonic, Status } from "@astrouxds/mock-data";
import { useTTCGRMActions } from "@astrouxds/mock-data";

import { useAppContext, ContextType } from "provider/useAppContext";
import { RuxDialogCustomEvent } from "@astrouxds/astro-web-components";

type PropTypes = {
  rowData: Mnemonic;
  chartDataSlope: number;
  index: number;
};

const WatcherListItem = ({ rowData, chartDataSlope, index }: PropTypes) => {
  const tableCellRef = useRef(null);
  const [textTruncated, setTextTruncated] = useState(false);
  const { modifyMnemonic } = useTTCGRMActions();
  const {
    toggleInvestigate,
    selectSubsystemsFromMnemonic,
    selectMnemonic,
  }: ContextType = useAppContext();

  const dialogElement = useRef<HTMLRuxDialogElement>(null);

  const handleRuxMenuSelected = (e: any, mnemonic: Mnemonic) => {
    if (e.detail.value === "remove") {
      if (dialogElement.current) dialogElement.current.open = true;
    }
    if (e.detail.value === "investigate") {
      selectMnemonic(mnemonic);
      selectSubsystemsFromMnemonic(mnemonic);
      toggleInvestigate();
    }
    return;
  };

  const handleDialogConfirm = (e: RuxDialogCustomEvent<boolean | null>) => {
    if (e.detail === true) {
      modifyMnemonic({
        ...rowData,
        watched: false,
      });
    }
  };

  useEffect(() => {
    if (tableCellRef.current) {
      const textEl = (tableCellRef.current as any).firstChild;
      console.log(textEl, "text");
      if (textEl) {
        const textWidth = textEl.scrollWidth;
        console.log(textWidth, "text width");
        const cellWidth = (tableCellRef.current as any).clientWidth;
        console.log(cellWidth, "cell width");
        setTextTruncated(textWidth > cellWidth);
      }
    }
  }, []);

  // useEffect(() => {
  //   const textEl = (tableRowRef.current as any).firstChild;
  //   console.log(textEl.offSetWidth, "width");
  //   console.log(textEl.scrollWidth, "scroll");
  //   if (tableRowRef.current) {
  //     setTextTruncated(textEl.scrollWidth > textEl.offSetWidth);
  //   }
  // }, []);
  // console.log(textTruncated);

  const tooltipMessage = `${rowData.subsystem}/ ${rowData.measurement} - ${rowData.mnemonicId} `;

  return (
    <>
      <RuxDialog
        ref={dialogElement}
        confirmText="Yes, Delete"
        denyText="Cancel"
        message="Please confirm you wish to delete the selected item from the Watcher?"
        clickToClose
        onRuxdialogclosed={(e) => handleDialogConfirm(e)}
      />
      <RuxTableRow key={rowData.mnemonicId} data-index={index}>
        <RuxTableCell>
          <RuxStatus status={rowData.status as Status} />
        </RuxTableCell>
        <RuxTableCell>
          <RuxTooltip message={tooltipMessage} placement="top" delay={300}>
            {rowData.mnemonicId}
          </RuxTooltip>
        </RuxTableCell>
        <RuxTableCell>{rowData.unit}</RuxTableCell>
        <RuxTableCell>{String(rowData.thresholdMax)}</RuxTableCell>
        {!textTruncated ? (
          <RuxTableCell ref={tableCellRef}>
            <>
              {rowData.currentValue}
              {chartDataSlope >= 0 ? (
                <RuxIcon icon="arrow-upward" size="extra-small" />
              ) : (
                <RuxIcon icon="arrow-downward" size="extra-small" />
              )}
            </>
          </RuxTableCell>
        ) : (
          <RuxTableCell ref={tableCellRef}>
            <RuxTooltip
              message={rowData.currentValue.toString()}
              placement="top"
              delay={300}
            >
              {rowData.currentValue}

              {chartDataSlope >= 0 ? (
                <RuxIcon icon="arrow-upward" size="extra-small" />
              ) : (
                <RuxIcon icon="arrow-downward" size="extra-small" />
              )}
            </RuxTooltip>
          </RuxTableCell>
        )}

        <RuxTableCell>
          <RuxPopUp placement="left" closeOnSelect>
            <RuxIcon slot="trigger" icon="more-horiz" size="1.5rem" />
            <RuxMenu
              onRuxmenuselected={(e) => handleRuxMenuSelected(e, rowData)}
            >
              <RuxMenuItem value="remove">Remove from Watcher</RuxMenuItem>
              <RuxMenuItem value="investigate">Investigate</RuxMenuItem>
            </RuxMenu>
          </RuxPopUp>
        </RuxTableCell>
      </RuxTableRow>
    </>
  );
};

export default WatcherListItem;
