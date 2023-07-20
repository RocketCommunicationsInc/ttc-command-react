import {
  RuxContainer,
  RuxTableCell,
  RuxTableRow,
  RuxTable,
  RuxIcon,
  RuxStatus,
} from "@astrouxds/react";
import "./Subsystems.css";

const Subsystems = ({ handleAppSwap }: { handleAppSwap: () => void }) => {
  return (
    <RuxContainer className="subsystems">
      <div slot="header">Subsystems</div>
      <RuxTable>
        <RuxTableRow>
          <RuxTableCell>
            <RuxStatus status="serious" />
            Altitude
          </RuxTableCell>
          <RuxTableCell>
            <RuxIcon size="1rem" icon="launch" onClick={handleAppSwap} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            <RuxStatus status="serious" />
            Payload
          </RuxTableCell>
          <RuxTableCell>
            <RuxIcon size="1rem" icon="launch" onClick={handleAppSwap} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            <RuxStatus status="serious" />
            Power
          </RuxTableCell>
          <RuxTableCell>
            <RuxIcon size="1rem" icon="launch" onClick={handleAppSwap} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            <RuxStatus status="serious" />
            Propulsion
          </RuxTableCell>
          <RuxTableCell>
            <RuxIcon size="1rem" icon="launch" onClick={handleAppSwap} />
          </RuxTableCell>
        </RuxTableRow>
        <RuxTableRow>
          <RuxTableCell>
            <RuxStatus status="serious" />
            Thermal
          </RuxTableCell>
          <RuxTableCell>
            <RuxIcon size="1rem" icon="launch" onClick={handleAppSwap} />
          </RuxTableCell>
        </RuxTableRow>
      </RuxTable>
    </RuxContainer>
  );
};

export default Subsystems;
