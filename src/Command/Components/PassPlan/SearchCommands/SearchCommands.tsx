import {
  RuxButton,
  RuxInput,
  RuxMenu,
  RuxMenuItem,
  RuxMenuItemDivider,
  RuxPopUp,
} from "@astrouxds/react";
import { Dispatch, SetStateAction, useState } from "react";
import "./SearchCommands.css";

type PropTypes = {
  commands: CommandType[];
  setCommand: Dispatch<SetStateAction<object>>;
  command: object;
  addToPassQueue: any;
  pass: string;
};

type CommandType = {
  commandId?: number;
  commandString?: string;
  description?: string;
};

const SearchCommands = ({
  commands,
  setCommand,
  addToPassQueue,
  pass,
}: PropTypes) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentCommand, setCurrentCommand] = useState<CommandType | null>(
    null
  );
  const [recentCommands, setRecentCommands] = useState<CommandType[]>([]);
  const isDisabled = pass === "Pre-Pass";

  const filteredCommands = commands.filter((command) =>
    `${command.commandString}, (${command.description})`
      .toLowerCase()
      .includes(inputValue.toLowerCase())
  );

  if (filteredCommands.length === 1 && !currentCommand) {
    setCurrentCommand(filteredCommands[0]);
  }

  const filteredRecentCommands = recentCommands.filter((command) =>
    `${command.commandString}, (${command.description})`
      .toLowerCase()
      .includes(inputValue.toLowerCase())
  );

  //send command and reset inputs
  const sendCommand = (current: object) => {
    setCommand(current);
    addToPassQueue(current);
    setCurrentCommand(null);
    setInputValue("");

    //deal with recentCommands
    setRecentCommands((prevCommands) => {
      if (prevCommands.length >= 5) {
        prevCommands.pop();
      }
      return [current, ...prevCommands];
    });
  };

  return (
    <>
      <RuxPopUp
        className="commands_input-pop-up"
        placement="top-start"
        closeOnSelect={true}
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
                (command) => command.commandId!.toString() === e.detail.value
              );
              setCurrentCommand(command || null);
              setInputValue(
                `${command!.commandString}, (${command!.description})`
              );
            }}
          >
            {filteredRecentCommands.length > 0 ? (
              <>
                <h4 className="menu-title">Recent Commands</h4>
                {filteredRecentCommands.map((item, index) => (
                  <RuxMenuItem
                    selected={
                      !!currentCommand &&
                      currentCommand.commandId === item.commandId
                    }
                    key={index}
                    value={item.commandId!.toString()}
                  >
                    {item.commandString}, <i>({item.description})</i>
                  </RuxMenuItem>
                ))}
                <RuxMenuItemDivider />
              </>
            ) : null}

            <h4 className="menu-title">Commands</h4>
            {filteredCommands.map((item, index) => (
              <RuxMenuItem
                selected={
                  !!currentCommand &&
                  currentCommand.commandId === item.commandId
                }
                key={index}
                value={item.commandId!.toString()}
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
