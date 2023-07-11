export const isEmpty = (
  value?: object | Array<any> | string | boolean | null,
): boolean => {
  if (!value) return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return typeof value === 'object' && Object.keys(value as object).length === 0;
};
