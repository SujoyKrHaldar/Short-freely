const {
  VITE_CLIENT_URL,
  VITE_APPWRITE_URL,
  VITE_APPWRITE_PROJECT_ID,
  VITE_APPWRITE_DATABASE_ID,
  VITE_APPWRITE_URL_COLLECTION_ID,
  VITE_APPWRITE_ANALYTIC_COLLECTION_ID,
  VITE_GET_LOCATION_API_URL,
} = import.meta.env;

const _config = {
  CLIENT_URL: VITE_CLIENT_URL,
  API_URL: VITE_APPWRITE_URL,
  API_PROJECT_ID: VITE_APPWRITE_PROJECT_ID,
  DATABASE_ID: VITE_APPWRITE_DATABASE_ID,
  URL_COLLECTION_ID: VITE_APPWRITE_URL_COLLECTION_ID,
  ANALYTIC_COLLECTION_ID: VITE_APPWRITE_ANALYTIC_COLLECTION_ID,
  GET_LOCATION_API_URL: VITE_GET_LOCATION_API_URL,
};

const config = {
  getKey(key) {
    const value = _config[key];

    if (!value) {
      console.error(
        `The ${key} variable is not found. Make sure to pass correct enviornment variable.`
      );
    }

    return value;
  },
};

export default config;
