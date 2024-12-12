import config from "../config";
import { Client, Account, Databases } from "appwrite";

const url = config.getKey("API_URL");
const projectId = config.getKey("API_PROJECT_ID");
const databaseId = config.getKey("DATABASE_ID");
const userCollectionId = config.getKey("USER_COLLECTION_ID");

export const appwriteConfig = {
  url,
  projectId,
  databaseId,
  userCollectionId,
};

const client = new Client();
client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
