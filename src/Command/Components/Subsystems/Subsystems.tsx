import {
  RuxContainer,
  RuxTableCell,
  RuxTableRow,
  RuxTable,
  RuxIcon,
  RuxStatus,
  RuxTooltip,
} from "@astrouxds/react";
import "./Subsystems.css";
import type { Subsystem } from "@astrouxds/mock-data";

import { useAppContext, ContextType } from "provider/useAppContext";

const Subsystems = () => {
  const { contact, toggleInvestigate, selectSubsystem }: ContextType =
    useAppContext();

  const subsystems = contact.subsystems;

  const handleSubsystemClick = (subsystem: Subsystem) => {
    toggleInvestigate();
    selectSubsystem(subsystem);
  };

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
              <RuxTooltip message="Investigate" placement="left" delay={300}>
                <RuxIcon
                  size="1rem"
                  icon="launch"
                  onClick={() => handleSubsystemClick(subsystem)}
                />
              </RuxTooltip>
            </RuxTableCell>
          </RuxTableRow>
        ))}
      </RuxTable>
    </RuxContainer>
  );
};

export default Subsystems;
