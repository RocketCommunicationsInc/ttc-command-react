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
import { useEffect, useState } from "react";

const LinkStatus = () => {
  const [status1, setStatus1] = useState<Status>("off");
  const [status2, setStatus2] = useState<Status>("standby");
  const [status3, setStatus3] = useState<Status>("normal");

  useEffect(() => {
    const statusValuesArr = [
      "off",
      "caution",
      "critical",
      "normal",
      "serious",
      "standby",
    ];

    const randomStatus = Math.floor(Math.random() * statusValuesArr.length);
    const randomStatus2 = Math.floor(Math.random() * statusValuesArr.length);
    const randomStatus3 = Math.floor(Math.random() * statusValuesArr.length);
    setStatus1(statusValuesArr[randomStatus] as Status);
    setStatus2(statusValuesArr[randomStatus2] as Status);
    setStatus3(statusValuesArr[randomStatus3] as Status);
  }, []);

  return (
    <RuxContainer className="link-status">
      <div slot="header">Link Status</div>
      <RuxTable>
        <RuxTableBody>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status={status1} /> Lock
                <span className="total">{getRandomInt(-100, -1)}</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              Signal Strength: {getRandomInt(-100, -1)}
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status={status2} />
                Telemetry<span className="total">{getRandomInt(50, 90)}</span>
              </span>
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              Total Frame Count: {getRandomInt(10000, 99999)}
            </RuxTableCell>
          </RuxTableRow>
          <RuxTableRow>
            <RuxTableCell>
              <span>
                <RuxStatus status={status3} />
                VCC <span className="total">{getRandomInt(1000, 9999)}</span>
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
