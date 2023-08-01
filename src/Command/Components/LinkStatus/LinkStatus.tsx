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
import { useEffect, useMemo, useState } from "react";

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

  const int1 = useMemo(() => getRandomInt(-100, -1), []);
  const int2 = useMemo(() => getRandomInt(-100, -1), []);
  const int3 = useMemo(() => getRandomInt(50, 90), []);
  const int4 = useMemo(() => getRandomInt(10000, 99999), []);
  const int5 = useMemo(() => getRandomInt(1000, 9999), []);
  const int6 = useMemo(() => getRandomInt(0, 5), []);

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
