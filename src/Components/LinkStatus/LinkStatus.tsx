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
                <span className="total">-99</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Signal Strength: -72.64</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status="serious" />
                Telemetry<span className="total">99.0</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Total Frame Count: 49336</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status="serious" />
                VCC <span className="total">7,290</span>
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
