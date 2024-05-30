import axios from "axios";
import { sessionSchema } from "../../schemas/session-schema";

export const createSession = async (accountId: string) => {
  const { data } = await axios.post("http://localhost:4000/sessions", {
    accountId,
  });

  return sessionSchema.parse(data);
};
