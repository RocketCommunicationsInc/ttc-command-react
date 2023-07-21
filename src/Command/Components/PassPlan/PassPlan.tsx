import {
  RuxContainer,
  RuxOption,
  RuxSelect,
  RuxTree,
  RuxTreeNode,
  RuxCheckbox,
  RuxProgress,
} from "@astrouxds/react";
import "./PassPlan.css";
import commands from '../../../utils/commands.json'
import SearchCommands from "./SearchCommands/SearchCommands";
import { useEffect, useState } from "react";

const PassPlan = () => {
  const [command, setCommand] = useState<string>('');
  const [pass, setPass] = useState('Pre-Pass');

  useEffect(() => {
    setTimeout(() => {
      setPass('Pass')
    }, 10000)
  }, [pass])

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
      <div className={`banner ${pass}`}>{pass}</div>
      <div className="rux-tree-header">
        <span>Step</span>
        <span>Instruction</span>
      </div>
      <li className="pass-plan-list">
        <RuxTree>
          <RuxTreeNode>
            <div className="rux-tree-node_prefix" slot="prefix">
              1
            </div>
            <div className="rux-tree-node_content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
            </div>
            <RuxTreeNode slot="node">
              <div className="rux-tree-content">Children</div>
            </RuxTreeNode>
          </RuxTreeNode>
        </RuxTree>
      </li>
      <li className="pass-plan-list">
        <RuxTree>
          <RuxTreeNode>
            <div className="rux-tree-node_prefix" slot="prefix">
              2
            </div>
            <div className="rux-tree-node_content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
            </div>
            <RuxTreeNode slot="node">
              <div className="rux-tree-content">Children</div>
            </RuxTreeNode>
          </RuxTreeNode>
        </RuxTree>
      </li>
      <li className="pass-plan-list">
        <RuxTree>
          <RuxTreeNode>
            <div className="rux-tree-node_prefix" slot="prefix">
              3
            </div>
            <div className="rux-tree-node_content">
              <RuxCheckbox />
              Verify MNEMONIC = ON
            </div>
            <RuxProgress slot="suffix" hideLabel={true} value={60} />
            <RuxTreeNode slot="node">
              <div className="rux-tree-content">Children</div>
            </RuxTreeNode>
          </RuxTreeNode>
        </RuxTree>
      </li>
      <div slot="footer">
        <SearchCommands commands={commands} setCommand={setCommand} command={command} addToPassQueue={addToPassQueue} pass={pass} />
      </div>
    </RuxContainer>
  );
};

export default PassPlan;
