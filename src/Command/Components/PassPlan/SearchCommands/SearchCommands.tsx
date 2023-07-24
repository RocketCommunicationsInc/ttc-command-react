import {
  RuxButton,
  RuxInput,
  RuxMenu,
  RuxMenuItem,
  RuxPopUp,
} from "@astrouxds/react";
import { Dispatch, SetStateAction } from "react";
import "./SearchCommands.css";

type PropTypes = {
  commands: { commandString: string; description: string; commandId: number }[];
  setCommand: Dispatch<SetStateAction<string>>;
  command: string;
  addToPassQueue: any;
  pass: string;
};

const SearchCommands = ({
  commands,
  setCommand,
  command = "",
  addToPassQueue,
  pass,
}: PropTypes) => {
  const isDisabled = pass === "Pre-Pass";

  return (
    <>
      <RuxPopUp placement="top-start">
        <RuxButton
          slot="trigger"
          iconOnly
          icon="unfold-more"
          disabled={isDisabled}
        />
        <div className="history-popup">
          <span>Recent Commands:</span>
          <ul>
            <li>80000</li>
            <li>80010</li>
            <li>Memory Dump 4</li>
            <li>QPR Command 3</li>
            <li>Satellite Command</li>
          </ul>
          <span>Quick Response Procedures:</span>
          <ul>
            <li>QRP Command</li>
          </ul>
          <span>All Commands:</span>
          <ul>
            {commands.map((item, index) => (
              <li key={index}>
                {item.commandString}, <i>({item.description})</i>
              </li>
            ))}
          </ul>
        </div>
      </RuxPopUp>
      <RuxPopUp
        className="commands_input-pop-up"
        placement="top-start"
        closeOnSelect={true}
      >
        <RuxInput
          slot="trigger"
          type="search"
          placeholder="Start typing to search commands..."
          disabled={isDisabled}
          value={command}
        />
        <RuxMenu
          className="commands_input-menu"
          onRuxmenuselected={(e) => setCommand(e.detail.value)}
        >
          {commands.map((item, index) => (
            <RuxMenuItem key={index} value={item.commandString}>
              {item.commandString}, <i>({item.description})</i>
            </RuxMenuItem>
          ))}
        </RuxMenu>
      </RuxPopUp>

      <RuxButton disabled={isDisabled} onClick={() => addToPassQueue(command)}>
        Add to Queue
      </RuxButton>
    </>
  );
};

export default SearchCommands;
