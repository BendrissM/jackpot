import { useState, useEffect } from "react";
import { AccountId } from "../types/account";

const getInitialAccountId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accountId");
  }
  return null;
};

export const useAccountId = () => {
  const [accountId, setAccountId] = useState<AccountId>(getInitialAccountId);

  const saveAccountId = (id: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accountId", id);
      setAccountId(id);
    }
  };

  return { accountId, saveAccountId };
};
