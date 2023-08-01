import {
  RuxContainer,
  RuxStatus,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableRow,
} from "@astrouxds/react";
import { getRandomInt } from "utils";
import "./LinkStatus.css";
import { Status } from "@astrouxds/mock-data";

const statusValuesArr: Status[] = [
  "off",
  "caution",
  "critical",
  "normal",
  "serious",
  "standby",
];

const getRandomStatus: () => Status = () =>
  statusValuesArr[Math.floor(Math.random() * statusValuesArr.length)];

const status1 = getRandomStatus();
const status2 = getRandomStatus();
const status3 = getRandomStatus();

const int1 = getRandomInt(-100, -1);
const int2 = getRandomInt(-100, -1);
const int3 = getRandomInt(50, 90);
const int4 = getRandomInt(10000, 99999);
const int5 = getRandomInt(1000, 9999);
const int6 = getRandomInt(0, 5);

const LinkStatus = () => {
  return (
    <RuxContainer className="link-status">
      <div slot="header">Link Status</div>
      <RuxTable>
        <RuxTableBody>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status={status1} /> Lock
                <span className="total">{int1}</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Signal Strength: {int2}</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status={status2} />
                Telemetry<span className="total">{int3}</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Total Frame Count: {int4}</RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status={status3} />
                VCC <span className="total">{int5}</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>Bad CMD: {int6}</RuxTableCell>
          </RuxTableRow>
        </RuxTableBody>
      </RuxTable>
    </RuxContainer>
  );
};
export default LinkStatus;
