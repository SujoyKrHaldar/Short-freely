import { ID, Query } from "appwrite";
import { databases } from "./initServer";
import config from "../config";
import { UAParser } from "ua-parser-js";

const databaseId = config.getKey("DATABASE_ID");
const analyticCollectionId = config.getKey("ANALYTIC_COLLECTION_ID");
const GET_LOCATION_API_URL = config.getKey("GET_LOCATION_API_URL");

export const createLinkStats = async ({ urlId, originalUrl, urlTitle }) => {
  const parser = new UAParser();
  const res = parser.getResult();

  const browser = res.browser.name;
  const device = res.device.type || "Desktop";
  const os = res.os.name;

  const response = await fetch(GET_LOCATION_API_URL);
  const { city, region, country_name: country } = await response.json();

  const stats = {
    city,
    region,
    country,
    urlId,
    originalUrl,
    urlTitle,
    device,
    os,
    browser,
  };

  const result = await databases.createDocument(
    databaseId,
    analyticCollectionId,
    ID.unique(),
    stats
  );

  return result;
};

export const getAllClickCounts = async () => {
  try {
    const response = await databases.listDocuments(
      databaseId,
      analyticCollectionId,
      [Query.select(["$id"])]
    );

    return response.total;
  } catch (error) {
    throw error.message;
  }
};
