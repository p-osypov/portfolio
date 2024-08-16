import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { TConversation } from '@/server/types';

export enum LOC_STORAGE_KEYS {
  conversation = 'conversation',
  systemIsActivated = 'systemIsActivated',
}
type LocalStorageValues = {
  [LOC_STORAGE_KEYS.conversation]: TConversation;
  [LOC_STORAGE_KEYS.systemIsActivated]: boolean;
};

const initialLocalStorageValues: LocalStorageValues = {
  [LOC_STORAGE_KEYS.conversation]: [],
  [LOC_STORAGE_KEYS.systemIsActivated]: false,
};
type LocalStorageContextType = LocalStorageValues & {
  set: <NV>(_key: string, _newValue: NV) => NV;
  get: <DV>(_key: string, _defaultValue: DV) => DV;
};

const LocalStorageContext = createContext<LocalStorageContextType | null>(null);

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageProvider: React.FC<LocalStorageProviderProps> = ({
  children,
}) => {
  const [values, setValues] = useState<LocalStorageValues>(
    initialLocalStorageValues,
  );

  const get = <DV,>(key: string, defaultValue: DV): DV => {
    if (typeof localStorage === 'undefined') return defaultValue;
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) return defaultValue;
    try {
      return JSON.parse(storedValue) as DV;
    } catch {
      return storedValue as DV; // In case the value is a string
    }
  };

  const getLocalStorageValues = useCallback(() => {
    return Object.keys(LOC_STORAGE_KEYS).reduce((acc, key) => {
      return { ...acc, [key]: get<unknown>(key, null) };
    }, {} as LocalStorageValues);
  }, []);

  const set = <NV,>(key: string, newValue: NV): NV => {
    if (typeof newValue === 'string') {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    const newValues = { ...values, [key]: newValue };
    setValues(newValues);
    return newValue;
  };

  useEffect(() => {
    setValues(getLocalStorageValues());
  }, [getLocalStorageValues]);

  return (
    <LocalStorageContext.Provider value={{ ...values, get, set }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = (): LocalStorageContextType => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider',
    );
  }
  return context;
};
