import { RuxButton, RuxInput, RuxMenu, RuxMenuItem, RuxPopUp } from "@astrouxds/react";
import { Dispatch, SetStateAction } from "react";
import './SearchCommands.css'

type PropTypes = {
  commands: { commandString: string; description: string; commandId: number }[];
  setCommand: Dispatch<SetStateAction<string>>;
  command: string;
  addToPassQueue: any;
};

const SearchCommands = ({ commands, setCommand, command, addToPassQueue }: PropTypes) => {

    const selectCommand = (e: CustomEvent) => {
        const { detail } = e;
        setCommand(detail.value)
      }

  return (
    <>
      <RuxPopUp placement="top-start">
        <RuxButton slot="trigger" iconOnly icon="unfold-more" />
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
            {commands.map(
              (
                item: { commandString: string; description: string },
                index: number
              ) => (
                <li key={index}>
                  {item.commandString}, <i>({item.description})</i>
                </li>
              )
            )}
          </ul>
        </div>
      </RuxPopUp>
      <RuxPopUp className="commands_input-pop-up" placement="top-start" closeOnSelect={true}>
        <RuxInput
            slot="trigger"
            type="search"
            placeholder="Start typing to search commands..."
            value={command !== '' ? command : ''}
        />
        <RuxMenu className="commands_input-menu" onRuxmenuselected={(e) => selectCommand(e)}>
                {commands.map(
                (
                    item: { commandString: string; description: string },
                    index: number
                ) => (
                    <RuxMenuItem key={index} value={item.commandString}>
                        {item.commandString}, <i>({item.description})</i>
                    </RuxMenuItem>
                )
                )}
        </RuxMenu>
      </RuxPopUp>
      
      <RuxButton onClick={() => addToPassQueue(command)}>Add to Queue</RuxButton>
    </>
  );
};

export default SearchCommands;
