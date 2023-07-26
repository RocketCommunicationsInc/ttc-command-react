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
  const [inputValue, setInputValue] = useState(command);
  const isDisabled = pass === "Pre-Pass";

  const filteredCommands = commands.filter((command) => {
    console.log(inputValue);
    return (
      command.commandString.toLowerCase().includes(inputValue.toLowerCase()) ||
      command.description.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  const handleSubmit = () => {
    console.log("submitted with input value of", inputValue, command);
    //make sure that submitted value matches a command
    // commands.find();

    addToPassQueue(command);
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
          onRuxinput={(e) => {
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
