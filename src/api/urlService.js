import { Query, ID, Permission, Role } from "appwrite";
import { databases } from "./initServer";
import config from "../config";

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

export const getAllUrls = async ({ userId, limit, offset }) => {
  try {
    const response = await databases.listDocuments(
      databaseId,
      urlCollectionId,
      [
        Query.equal("userId", userId),
        Query.orderDesc("$createdAt"),
        Query.limit(limit),
        Query.offset(offset),
      ]
    );

    return response;
  } catch (error) {
    throw error.message;
  }
};

export const createUrl = async (data) => {
  const result = await databases.createDocument(
    databaseId,
    urlCollectionId,
    ID.unique(),
    data,
    [Permission.read(Role.any())]
  );

  return result;
};

export const updateUrlById = async (data, urlId) => {
  const result = await databases.updateDocument(
    databaseId,
    urlCollectionId,
    urlId,
    data,
    [Permission.read(Role.any())]
  );

  return result;
};

export const deleteUrlById = async (urlId) => {
  return await databases.deleteDocument(databaseId, urlCollectionId, urlId);
};
