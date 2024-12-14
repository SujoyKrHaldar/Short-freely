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

export const logoutUser = async (sessionId = "current") => {
  await account.deleteSession(sessionId);
  return true;
};

export const getCurrentUserSession = async () => {
  try {
    return await this.account.getSession("current");
  } catch (error) {
    return;
  }
};

export const getAllSession = async () => {
  try {
    const sessionList = await this.account.listSessions();
    return sessionList;
  } catch (error) {
    return;
  }
};

export const updatePassword = async (newPassword, oldPassword) => {
  try {
    const response = await this.account.updatePassword(
      newPassword,
      oldPassword
    );
    return response;
  } catch (error) {
    if (error.type === "user_invalid_credentials") throw "Invalid credentials.";

    throw error.message;
  }
};

export const updateUserPassword = () => {};
