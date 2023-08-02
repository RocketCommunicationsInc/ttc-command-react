import { RuxIndeterminateProgress } from "@astrouxds/react";
import { Dispatch, SetStateAction } from "react";

type PropTypes = {
  setPass: Dispatch<SetStateAction<string>>;
};

const PrePassComplete = ({ setPass }: PropTypes) => {
  return (
    <div className="pass_pre-pass-complete-wrapper">
      <RuxIndeterminateProgress />
      <div>
        <i>Loading Pass Plan...</i>
      </div>
    </div>
  );
};

export default PrePassComplete;
