import {
  RuxContainer,
  RuxStatus,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableRow,
} from "@astrouxds/react";
import "./LinkStatus.css";

const LinkStatus = () => {
  return (
    <RuxContainer className="link-status">
      <div slot="header">Link Status</div>
      <RuxTable>
        <RuxTableBody>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status="serious" /> Lock
                <span className="total">-</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Signal Strength: -</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status="serious" />
                Telemetry<span className="total">-</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Total Frame Count: 0</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status="serious" />
                VCC <span className="total">-</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Bad CMD: 0</RuxTableCell>
          </RuxTableRow>
        </RuxTableBody>
      </RuxTable>
    </RuxContainer>
  );
};
export default LinkStatus;
