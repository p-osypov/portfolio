import { useState, useEffect } from 'react';
const get = <T>(key: string, initialData: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : initialData;
};
const set = <T>(key: string, data: T): T => {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};
const remove = (key: string): void => {
  localStorage.removeItem(key);
};

const locStorage = {
  get,
  set,
  remove,
};
export enum LOC_STORAGE_KEYS {
  // eslint-disable-next-line no-unused-vars
  conversation = 'conversation',
}
export const useLocaleStorage = <T>(key: string): T | null => {
  const [state, setState] = useState<T | null>(null);
  useEffect(() => {
    window.addEventListener('storage', (event) => {
      if (key === event.key) {
        setState(() => JSON.parse(event.newValue as string) as T);
      }
    });
    locStorage.get(key, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
};
export default locStorage;
