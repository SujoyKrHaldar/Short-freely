import config from "../config";
import { Client, Account, Databases } from "appwrite";

const url = config.getKey("API_URL");
const projectId = config.getKey("API_PROJECT_ID");

const client = new Client();
client.setEndpoint(url);
client.setProject(projectId);

export const account = new Account(client);
export const databases = new Databases(client);
