import axios from "axios";
import { Account, accountSchema } from "../../schemas/account-schema";

export const getAccount = async (accountId: string) => {
  const res = await axios.get<Account>(
    `http://localhost:4000/accounts/${accountId}`
  );

  return accountSchema.parse(res.data);
};
