/* eslint-disable no-unused-vars */
import { ID } from "appwrite";
import { account } from "./initServer";

export const registerUser = async ({ name, email, password }) => {
  const response = await account.create(ID.unique(), email, password, name);

  if (!response.status) {
    return new Error("Something went wrong. Please try again later.");
  }

  const data = await loginUser({ email, password });

  return data;
};

export const loginUser = async ({ email, password }) => {
  const session = await account.createEmailPasswordSession(email, password);
  if (!session.current) {
    await logoutUser();
    return new Error("Something went wrong. Please try again later.");
  }
  const currentUserData = await getCurrentUser();
  return { session, currentUserData };
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    return false;
  }
};

export const logoutUser = async () => {
  await account.deleteSession("current");
  return true;
};

export const getCurrentUserSession = () => {};

export const getAllUserSession = () => {};

export const updateUserPassword = () => {};
