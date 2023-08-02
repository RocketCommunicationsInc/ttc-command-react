import { RuxContainer, RuxOption, RuxSelect } from "@astrouxds/react";
import "./PassPlan.css";
import commands from "../../../utils/commands.json";
import SearchCommands from "./SearchCommands/SearchCommands";
import { useState } from "react";
import PrePassList from "./PrePassList/PrePassList";
import PassList from "./PassList/PassList";
import { useAppContext, ContextType } from "provider/useAppContext";

const PassPlan = () => {
  const [command, setCommand] = useState({});
  const [pass, setPass] = useState("Pre-Pass");
  const [commandList, setCommandList] = useState<string[]>([])
  const { contact }: ContextType = useAppContext();
  const passPlanMnemonics = contact.mnemonics.slice(0,100)

  const addToPassQueue = (commandListItem: {commandId: number, commandString: string, description: string}) => {
    if (!commandListItem) return;
    setCommandList([...commandList, commandListItem.commandString]);
  };
  return (
    <RuxContainer className="pass-plan">
      <div slot="header" className="header">
        <span>IRON 4090 PASS PLAN</span>
        <RuxSelect className="header-select" size="small" label="Mode">
          <RuxOption label="Semi-Auto" value="" />
          <RuxOption label="Automatic" value="" />
        </RuxSelect>
      </div>
        <div className={`banner ${pass}`}>{pass}</div>
        <div className="pass_header-wrapper">
        <div className="pass_header-step">Step</div>
        <div className="pass_header-instruction">Instruction</div>
        </div>
        {pass === "Pre-Pass" ? <PrePassList setPass={setPass} /> : <PassList commandList={commandList} mnemonics={passPlanMnemonics} />}
      <div slot="footer">
        <SearchCommands
          commands={commands}
          setCommand={setCommand}
          command={command}
          addToPassQueue={addToPassQueue}
          pass={pass}
        />
      </div>
    </RuxContainer>
  );
};

export default PassPlan;
