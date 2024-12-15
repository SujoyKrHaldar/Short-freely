import { databases } from "./initServer";
import config from "../config";
import { Query } from "appwrite";

const databaseId = config.getKey("DATABASE_ID");
const urlCollectionId = config.getKey("URL_COLLECTION_ID");

export const getUrlById = async (urlId) => {
  try {
    const response = await databases.getDocument(
      databaseId,
      urlCollectionId,
      urlId
    );

    return response;
  } catch (error) {
    throw error.message;
  }
};

export const getAllUrls = async (userId) => {
  try {
    const response = await databases.listDocuments(
      databaseId,
      urlCollectionId,
      [Query.equal("userId", userId), Query.orderDesc("$createdAt")]
    );

    return response;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};
export const createUrl = async () => {};
export const updateUrlById = async () => {};
export const deleteUrlById = async () => {};
