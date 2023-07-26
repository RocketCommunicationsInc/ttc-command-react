import {
  RuxButton,
  RuxInput,
  RuxMenu,
  RuxMenuItem,
  RuxPopUp,
} from "@astrouxds/react";
import { Dispatch, SetStateAction, useState } from "react";
import "./SearchCommands.css";

type PropTypes = {
  commands: { commandString: string; description: string; commandId: number }[];
  setCommand: Dispatch<SetStateAction<object>>;
  command: object;
  addToPassQueue: any;
  pass: string;
};

const SearchCommands = ({
  commands,
  setCommand,
  command,
  addToPassQueue,
  pass,
}: PropTypes) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentCommand, setCurrentCommand] = useState<object>({});
  const [error, setError] = useState<string | null>(null);
  const isDisabled = pass === "Pre-Pass";

  const filteredCommands = commands.filter((command) => {
    return (
      command.commandString.toLowerCase().includes(inputValue.toLowerCase()) ||
      command.description.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  const handleSubmit = () => {
    //check to see if there is a current command (if so the user clicked their choice)
    if (Object.keys(currentCommand).length !== 0) {
      setCommand(currentCommand);
      addToPassQueue(currentCommand);
      setCurrentCommand({});
      setInputValue("");

      //if not see if there is only one filteredCommand, if so, thats the one they mean
    } else if (filteredCommands.length === 1) {
      setCommand(filteredCommands[0]);
      addToPassQueue(filteredCommands[0]);
      setCurrentCommand({});
      setInputValue("");

      //otherwise the current input isn't a specific command
    } else {
      setError("please select a specific command");
    }
  };

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
          value={inputValue}
          invalid={error ? true : undefined}
          error-text={error || null}
          onRuxinput={(e) => {
            setError(null);
            setCurrentCommand({});
            setInputValue(e.target.value);
          }}
        />
        {filteredCommands.length >= 1 ? (
          <RuxMenu
            className="commands_input-menu"
            onRuxmenuselected={(e) => {
              const command = commands.find(
                (command) => command.commandId.toString() === e.detail.value
              );
              setError(null);
              setCurrentCommand(command || {});
              setInputValue(command!.commandString);
            }}
          >
            {filteredCommands.map((item, index) => (
              <RuxMenuItem key={index} value={item.commandId.toString()}>
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

      <RuxButton disabled={isDisabled} onClick={() => handleSubmit()}>
        Add to Queue
      </RuxButton>
    </>
  );
};

export default SearchCommands;
