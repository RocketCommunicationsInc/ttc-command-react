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
  selectedAssemblyDeviceName: string;
  selectedMnemonic: Mnemonic;
  lightTheme: boolean;
  toggleTheme: () => void;
  resetSelected: () => void;
  selectMnemonic: (mnemonic: Mnemonic) => void;
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
  const { addAlert, modifyMnemonic, modifyContact } = useTTCGRMActions();
  const contact = contacts[0];
  const firstSubsystem = contact.subsystems[0];
  const firstChildSubsystem = contact.subsystems[0].childSubsystems[0];
  const firstAssemblyDevice =
    contact.subsystems[0].childSubsystems[0].assemblyDevices[0];

  const [showInvestigate, setShowInvestigate] = useState<boolean>(false);

  const [selectedSubsystemName, setSelectedSubsystemName] = useState<string>(
    firstSubsystem.name
  );
  const [selectedChildSubsystemName, setSelectedChildSubsystemName] =
    useState<string>(firstChildSubsystem.name);
  const [selectedAssemblyDeviceName, setSelectedAssemblyDeviceName] =
    useState<string>(firstAssemblyDevice.name);
  const [selectedMnemonic, setSelectedMnemonic] = useState<Mnemonic | null>(
    null
  );
  const [lightTheme, setLightTheme] = useState(false);

  //toggles light theme
  const toggleTheme = () => {
    setLightTheme((prevState) => !prevState);
  };

  //Utility finder functions
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

  const selectedSubsystem =
    findSubsystemByName(selectedSubsystemName) || firstSubsystem;
  const selectedChildSubsystem =
    findChildSubsystemByName(selectedSubsystem, selectedChildSubsystemName) ||
    firstChildSubsystem;
  const selectedAssemblyDevice = findAssemblyDeviceByName(
    selectedChildSubsystem,
    selectedAssemblyDeviceName
  );

  // Exported state setters
  const toggleInvestigate = () => {
    setShowInvestigate((prevState) => !prevState);
    if (showInvestigate) resetSelected();
  };

  const resetSelected = () => {
    setSelectedSubsystemName(firstSubsystem.name);
    setSelectedChildSubsystemName(firstChildSubsystem.name);
    setSelectedAssemblyDeviceName(firstAssemblyDevice.name);
    setSelectedMnemonic(null);
  };

  const selectSubsystem = (subsystem: Subsystem) => {
    setSelectedSubsystemName(subsystem.name);
    setSelectedChildSubsystemName(subsystem.childSubsystems[0].name);
    setSelectedAssemblyDeviceName(
      subsystem.childSubsystems[0].assemblyDevices[0].name
    );
  };

  const selectChildSubsystem = (childSubsystem: ChildSubsystem) => {
    const subsystem =
      findSubsystemByName(childSubsystem.subsystemParent) || firstSubsystem;
    if (
      childSubsystem.name === selectedMnemonic?.childSubsystem &&
      childSubsystem.subsystemParent === selectedMnemonic.subsystem
    )
      return;
    setSelectedSubsystemName(subsystem.name);
    setSelectedChildSubsystemName(childSubsystem.name);
    setSelectedMnemonic(null);
  };

  const selectAssemblyDevice = (assemblyDevice: AssemblyDevice) => {
    setSelectedAssemblyDeviceName(assemblyDevice.name);
  };

  const selectMnemonic = (mnemonic: Mnemonic) => {
    setSelectedMnemonic(mnemonic);
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

    setSelectedSubsystemName(subsystem.name);
    setSelectedChildSubsystemName(childSubsystem.name);
    setSelectedAssemblyDeviceName(assemblyDevices.name);
  };

  // Creates the initaial mock data functionality
  useEffect(() => {
    // set contact aos and los in relation to current time
    const newAos = new Date().getTime() + 1 * 60000;
    const newLos = new Date(newAos).getTime() + 30 * 60000;
    modifyContact({ ...contact, aos: newAos, los: newLos });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    selectedAssemblyDeviceName,
    selectedMnemonic,
    lightTheme,
    toggleTheme,
    resetSelected,
    selectSubsystem,
    selectChildSubsystem,
    selectAssemblyDevice,
    selectMnemonic,
    selectSubsystemsFromMnemonic,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
