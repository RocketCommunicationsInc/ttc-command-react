import { useState, createContext, useContext, useEffect } from "react";
import type {
  Contact,
  Subsystem,
  ChildSubsystem,
  AssemblyDevice,
  Mnemonic,
} from "@astrouxds/mock-data";
import { useTTCGRMActions, useTTCGRMContacts } from "@astrouxds/mock-data";
import { getRandomInt } from "../utils/index";

export type ContextType = {
  contact: Contact;
  showInvestigate: boolean;
  toggleInvestigate: () => void;
  selectedSubsystem: Subsystem;
  selectedChildSubsystem: ChildSubsystem;
  selectedAssemblyDevice: AssemblyDevice;
  resetSelected: () => void;
  selectSubsystem: (subsystem: Subsystem) => void;
  selectChildSubsystem: (childSubsystem: ChildSubsystem) => void;
  selectAssemblyDevice: (assemblyDevice: AssemblyDevice) => void;
  selectSubsystemsFromMnemonic: (mnemonic: Mnemonic) => void;
};

const AppContext = createContext({});

export const useAppContext = () => useContext<any>(AppContext);

type PropTypes = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: PropTypes) => {
  const { dataArray: contacts } = useTTCGRMContacts();
  const { addAlert, modifyMnemonic } = useTTCGRMActions();
  const contact = contacts[0];
  const firstSubsystem = contact.subsystems[0];
  const firstChildSubsystem = contact.subsystems[0].childSubsystems[0];
  const firstAssemblyDevice =
    contact.subsystems[0].childSubsystems[0].assemblyDevices[0];

  const [showInvestigate, setShowInvestigate] = useState<boolean>(false);

  const [selectedSubsystem, setSelectedSubsystem] =
    useState<Subsystem>(firstSubsystem);
  const [selectedChildSubsystem, setSelectedChildSubsystem] =
    useState<ChildSubsystem>(firstChildSubsystem);
  const [selectedAssemblyDevice, setSelectedAssemblyDevice] =
    useState<AssemblyDevice>(firstAssemblyDevice);

  const findSubsystemByName = (name?: string) =>
    contact.subsystems.find((subsystem) => subsystem.name === name);
  const findChildSubsystemByName = (subsystem: Subsystem, name?: string) =>
    subsystem.childSubsystems.find(
      (childSubsystem) => childSubsystem.name === name
    );
  const findAssemblyDeviceByName = (
    childSubsystem: ChildSubsystem,
    name?: string
  ) =>
    childSubsystem.assemblyDevices.find((device) => device.name === name) ||
    firstAssemblyDevice;

  const toggleInvestigate = () => {
    setShowInvestigate((prevState) => !prevState);
    if (showInvestigate) resetSelected();
  };

  const resetSelected = () => {
    setSelectedSubsystem(firstSubsystem);
    setSelectedChildSubsystem(firstChildSubsystem);
    setSelectedAssemblyDevice(firstAssemblyDevice);
  };

  const selectSubsystem = (subsystem: Subsystem) => {
    setSelectedSubsystem(subsystem);
    setSelectedChildSubsystem(subsystem.childSubsystems[0]);
    setSelectedAssemblyDevice(subsystem.childSubsystems[0].assemblyDevices[0]);
  };

  const selectChildSubsystem = (childSubsystem: ChildSubsystem) => {
    const subsystem = findSubsystemByName(childSubsystem.subsystemParent);
    setSelectedSubsystem(subsystem || firstSubsystem);
    setSelectedChildSubsystem(childSubsystem);
    setSelectedAssemblyDevice(childSubsystem.assemblyDevices[0]);
  };

  const selectAssemblyDevice = (assemblyDevice: AssemblyDevice) => {
    setSelectedAssemblyDevice(assemblyDevice);
  };

  const selectSubsystemsFromMnemonic = (mnemonic: Mnemonic) => {
    const subsystem = findSubsystemByName(mnemonic.subsystem);
    if (!subsystem) return;
    const childSubsystem = findChildSubsystemByName(
      subsystem,
      mnemonic.childSubsystem
    );
    if (!childSubsystem) return;
    const assemblyDevices = findAssemblyDeviceByName(
      childSubsystem,
      mnemonic.assemblyDevice
    );

    setSelectedSubsystem(subsystem);
    setSelectedChildSubsystem(childSubsystem);
    setSelectedAssemblyDevice(assemblyDevices);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (contact.alerts.length < 25) addAlert(contact.id);
    }, 3000);

    return () => clearInterval(interval);
  }, [addAlert, contact.alerts.length, contact.id]);

  useEffect(() => {
    // set 20 random mnemonics to watched
    for (let i = 0; i < 20; i++) {
      const mnemonic = contact.mnemonics[getRandomInt(20)];
      modifyMnemonic({ ...mnemonic, watched: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    contact,
    showInvestigate,
    toggleInvestigate,
    selectedSubsystem,
    selectedChildSubsystem,
    selectedAssemblyDevice,
    setSelectedAssemblyDevice,
    resetSelected,
    selectSubsystem,
    selectChildSubsystem,
    selectAssemblyDevice,
    selectSubsystemsFromMnemonic,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
