import { RuxContainer } from "@astrouxds/react";
import AssemblySVG from "./AssemblySVG";

const Assembly = () => {
  return (
    <RuxContainer className="star-tracker">
      <div slot="header">Star Trackers Assembly</div>
      <AssemblySVG />
    </RuxContainer>
  );
};

export default Assembly;
