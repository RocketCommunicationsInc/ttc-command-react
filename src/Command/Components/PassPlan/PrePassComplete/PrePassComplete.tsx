import {
    RuxIndeterminateProgress,
    RuxTree,
    RuxTreeNode,
  } from "@astrouxds/react";
  import { Dispatch, SetStateAction } from "react";
  import "./PrePassList.css";
  
  type PropTypes = {
    setPass: Dispatch<SetStateAction<string>>;
  };
  
  const PrePassComplete = ({ setPass }: PropTypes) => {
  
    return (
      <RuxTree className="pass_body-wrapper">
        <RuxTreeNode>
            <RuxIndeterminateProgress />
        </RuxTreeNode>
      </RuxTree>
    );
  };
  
  export default PrePassComplete;
  