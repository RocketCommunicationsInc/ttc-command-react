import {
  RuxContainer,
  RuxOption,
  RuxSelect,
} from "@astrouxds/react";
import "./PassPlan.css";
import commands from '../../../utils/commands.json'
import SearchCommands from "./SearchCommands/SearchCommands";
import { useState } from "react";
import PrePassList from "./PrePassList/PrePassList";
import PassList from "./PassList/PassList";

const PassPlan = () => {
  const [command, setCommand] = useState<string>('');
  const [pass, setPass] = useState('Pre-Pass');

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPass('Pass')
  //   }, 10000)
  // }, [pass])

  const addToPassQueue = (commandListItem: string) => {
    if (commandListItem === '') return;
    console.log(commandListItem)
  }
  return (
    <RuxContainer className="pass-plan">
      <div slot="header" className="header">
        <span>IRON 4090 PASS PLAN</span>
        <RuxSelect size="small" label="Mode">
          <RuxOption label="Semi-Auto" value="" />
          <RuxOption label="Automatic" value="" />
        </RuxSelect>
      </div>
      <div>
        <div className={`banner ${pass}`}>{pass}</div>
        {pass === 'Pre-Pass' ? <PrePassList setPass={setPass} /> : <PassList />}
      </div>
      <div slot="footer">
        <SearchCommands commands={commands} setCommand={setCommand} command={command} addToPassQueue={addToPassQueue} pass={pass} />
      </div>
    </RuxContainer>
  );
};

export default PassPlan;
