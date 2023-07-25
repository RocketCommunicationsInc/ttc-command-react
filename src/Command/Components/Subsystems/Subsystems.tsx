import {
  RuxContainer,
  RuxTableCell,
  RuxTableRow,
  RuxTable,
  RuxIcon,
  RuxStatus,
} from "@astrouxds/react";
import "./Subsystems.css";
import type { Subsystem } from "@astrouxds/mock-data";

type PropTypes = {
  subsystems: Subsystem[];
  toggleInvestigate: () => void;
  setSelectedSubsystem: React.Dispatch<React.SetStateAction<Subsystem>>;
};

const Subsystems = ({
  subsystems,
  toggleInvestigate,
  setSelectedSubsystem,
}: PropTypes) => {
  const handleInvestigate = (subsystem: Subsystem) => {
    toggleInvestigate();
    setSelectedSubsystem(subsystem);
  };

  return (
    <RuxContainer className="subsystems">
      <div slot="header">Subsystems</div>
      <div className="subsystem-wrapper">
        <RuxTable>
          {subsystems.map((subsystem) => (
            <RuxTableRow>
              <RuxTableCell>
                <RuxStatus status={subsystem.status} />
                {subsystem.name}
              </RuxTableCell>
              <RuxTableCell>
                <RuxIcon
                  size="1rem"
                  icon="launch"
                  onClick={() => handleInvestigate(subsystem)}
                />
              </RuxTableCell>
            </RuxTableRow>
          ))}
        </RuxTable>
      </div>
    </RuxContainer>
  );
};

export default Subsystems;
