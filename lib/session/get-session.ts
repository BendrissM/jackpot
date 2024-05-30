import axios from "axios";
import { nullableSessionSchema } from "../../schemas/session-schema";

export const getSessionByAccount = async (accountId: string) => {
  const res = await axios.get(
    `http://localhost:4000/accounts/${accountId}/session`
  );

  return nullableSessionSchema.parse(res.data);
};
