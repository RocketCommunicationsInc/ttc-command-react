import { RuxContainer, RuxOption, RuxSelect } from "@astrouxds/react";
import "./PassPlan.css";
import commands from "../../../utils/commands.json";
import SearchCommands from "./SearchCommands/SearchCommands";
import { useEffect, useState } from "react";
import PrePassList from "./PrePassList/PrePassList";
import PassList from "./PassList/PassList";
import { useAppContext, ContextType } from "provider/useAppContext";
import PrePassComplete from "./PrePassComplete/PrePassComplete";

const PassPlan = () => {
  const [command, setCommand] = useState({});
  const [pass, setPass] = useState("Pre-Pass");
  const [commandList, setCommandList] = useState<string[]>([]);
  const [countdown, setCountdown] = useState<number>(4);
  const { contact }: ContextType = useAppContext();
  const passPlanMnemonics = contact.mnemonics.slice(0, 100);
  let countdownFormat: string = `00:00:0${countdown}`;

  const addToPassQueue = (commandListItem: {
    commandId: number;
    commandString: string;
    description: string;
  }) => {
    if (!commandListItem) return;
    setCommandList([...commandList, commandListItem.commandString]);
  };

  useEffect(() => {
    let interval: any;
    if (pass === "Pre-Pass-Complete" && countdown >= 1) {
      interval = setInterval(() => {
        setCountdown((prevValue) => {
          if (prevValue <= 0) {
            clearInterval(interval);
            setPass("Pass");
          }
          return prevValue - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pass]);
  return (
    <RuxContainer className="pass-plan">
      <div slot="header" className="header">
        <span>IRON 4090 PASS PLAN</span>
        <RuxSelect className="header-select" size="small" label="Mode">
          <RuxOption label="Semi-Auto" value="" />
          <RuxOption label="Automatic" value="" />
        </RuxSelect>
      </div>
      <div className={`banner ${pass}`}>
        {pass === "Pre-Pass-Complete"
          ? `${pass}. Pass starts in ${countdownFormat}`
          : pass}
      </div>
      <div className="pass_header-wrapper">
        <div className="pass_header-step">Step</div>
        <div className="pass_header-instruction">Instruction</div>
      </div>
      {pass === "Pre-Pass" ? (
        <PrePassList setPass={setPass} />
      ) : pass === "Pre-Pass-Complete" ? (
        <PrePassComplete setPass={setPass} />
      ) : (
        <PassList commandList={commandList} mnemonics={passPlanMnemonics} />
      )}
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
