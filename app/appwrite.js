import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65c7634dace221a2c3a9"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
