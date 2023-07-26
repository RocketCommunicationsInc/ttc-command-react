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

import { useAppContext, ContextType } from "provider/useAppContext";

const Subsystems = () => {
  const {
    contact,
    toggleInvestigate,
    selectSubsystem
  }: ContextType = useAppContext();

  const subsystems = contact.subsystems;

  const handleSubsystemClick = (subsystem: Subsystem) => { 
    toggleInvestigate();
    selectSubsystem(subsystem)
  }

  return (
    <RuxContainer className="subsystems">
      <div slot="header">Subsystems</div>
      <RuxTable>
        {subsystems.map((subsystem, index) => (
          <RuxTableRow key={index}>
            <RuxTableCell>
              <RuxStatus status={subsystem.status} />
              {subsystem.name}
            </RuxTableCell>
            <RuxTableCell>
              <RuxIcon
                size="1rem"
                icon="launch"
                onClick={() => handleSubsystemClick(subsystem)}
              />
            </RuxTableCell>
          </RuxTableRow>
        ))}
      </RuxTable>
    </RuxContainer>
  );
};

export default Subsystems;
