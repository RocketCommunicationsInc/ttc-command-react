import {
  RuxButton,
  RuxInput,
  RuxMenu,
  RuxMenuItem,
  RuxPopUp,
} from "@astrouxds/react";
import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import "./SearchCommands.css";

type PropTypes = {
  commands: { commandString: string; description: string; commandId: number }[];
  setCommand: Dispatch<SetStateAction<object>>;
  command: object;
  addToPassQueue: any;
  pass: string;
};

type Command = {
  commandId?: number;
  command?: string;
  description?: string;
};

const SearchCommands = ({
  commands,
  setCommand,
  addToPassQueue,
  pass,
}: PropTypes) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentCommand, setCurrentCommand] = useState<Command | null>(null);
  const isDisabled = pass === "Pre-Pass";
  const searchPopup = useRef() as React.RefObject<HTMLRuxPopUpElement>;

  const filteredCommands = commands.filter((command) =>
    `${command.commandString}, (${command.description})`
      .toLowerCase()
      .includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (filteredCommands.length === 1) {
      setCurrentCommand(filteredCommands[0]);
    } else {
      setCurrentCommand(null);
    }
  }, [filteredCommands]);

  //send command and reset inputs
  const sendCommand = (current: object) => {
    setCommand(current);
    addToPassQueue(current);
    setCurrentCommand(null);
    setInputValue("");
  };

  return (
    <>
      <RuxPopUp placement="top-start">
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
        ref={searchPopup}
      >
        <span slot="trigger">
          <RuxButton
            iconOnly
            icon="unfold-more"
            disabled={isDisabled}
            onClick={(e) => {
              e.preventDefault();
            }}
          />
          <RuxInput
            type="search"
            placeholder="Start typing to search commands..."
            disabled={isDisabled}
            value={inputValue}
            onRuxinput={(e) => {
              setCurrentCommand(null);
              setInputValue(e.target.value);
            }}
          />
        </span>
        {filteredCommands.length >= 1 ? (
          <RuxMenu
            className="commands_input-menu"
            onRuxmenuselected={(e) => {
              const command = commands.find(
                (command) => command.commandId.toString() === e.detail.value
              );
              setCurrentCommand(command || null);
              setInputValue(
                `${command!.commandString}, (${command!.description})`
              );
            }}
          >
            {filteredCommands.map((item, index) => (
              <RuxMenuItem
                selected={filteredCommands.length === 1}
                key={index}
                value={item.commandId.toString()}
              >
                {item.commandString}, <i>({item.description})</i>
              </RuxMenuItem>
            ))}
          </RuxMenu>
        ) : (
          <span className="commands_no-match">
            No commands match the given search parameters.
          </span>
        )}
      </RuxPopUp>

      <RuxButton
        disabled={isDisabled || !currentCommand}
        onClick={() => {
          currentCommand && sendCommand(currentCommand);
        }}
      >
        Add to Queue
      </RuxButton>
    </>
  );
};

export default SearchCommands;
