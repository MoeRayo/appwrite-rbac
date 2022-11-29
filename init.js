
import { Client, Account } from "appwrite";
export const client = new Client();
export const account = new Account(client);

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('637d22e1659825ba4262') // Your project ID
;
