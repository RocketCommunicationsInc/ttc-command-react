import { RuxContainer } from "@astrouxds/react";
import SVG from "./SVG";

const StarTracker = () => {
  return (
    <RuxContainer className="star-tracker">
      <div slot="header">Star Tracker Assembly</div>
      <SVG />
    </RuxContainer>
  );
};

export default StarTracker;
