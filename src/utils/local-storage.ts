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
  conversation = 'conversation',
}
export default locStorage;
