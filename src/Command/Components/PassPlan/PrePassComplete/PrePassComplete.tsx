import { RuxIndeterminateProgress } from "@astrouxds/react";

const PrePassComplete = () => {
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
