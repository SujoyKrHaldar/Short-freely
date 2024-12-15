const {
  VITE_CLIENT_URL,
  VITE_APPWRITE_URL,
  VITE_APPWRITE_PROJECT_ID,
  VITE_APPWRITE_DATABASE_ID,
  VITE_APPWRITE_USER_COLLECTION_ID,
  VITE_APPWRITE_URL_COLLECTION_ID,
} = import.meta.env;

const _config = {
  CLIENT_URL: VITE_CLIENT_URL,
  API_URL: VITE_APPWRITE_URL,
  API_PROJECT_ID: VITE_APPWRITE_PROJECT_ID,
  DATABASE_ID: VITE_APPWRITE_DATABASE_ID,
  USER_COLLECTION_ID: VITE_APPWRITE_USER_COLLECTION_ID,
  URL_COLLECTION_ID: VITE_APPWRITE_URL_COLLECTION_ID,
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
