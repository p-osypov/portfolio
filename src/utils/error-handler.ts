export const errorHandler = (
  error: any,
): { message: string; status: number } => {
  return {
    message:
      error?.response?.data?.error.message ||
      error?.response?.statusText ||
      error?.message ||
      error,
    status: error?.response?.status || 500,
  };
};
