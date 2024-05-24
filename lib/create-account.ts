import axios from "axios";
import {
  Account,
  CreateAccount,
  accountSchema,
} from "../schemas/account-schema";

export const createAccount = async (account: CreateAccount) => {
  const { data } = await axios.post<Account>(
    "http://localhost:4000/accounts",
    account
  );

  return accountSchema.parse(data);
};
