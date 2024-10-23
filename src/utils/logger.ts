export const logError = (message: string, error: any) => {
  console.error(`ERROR: ${message}`, error);
};

export const logInfo = (message: string) => {
  console.info(`INFO: ${message}`);
};

export const logDebug = (message: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`DEBUG: ${message}`);
  }
};
