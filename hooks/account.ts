import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { createAccount, getAccount } from "../lib";
import { AccountId } from "../types/account";
import { CreateAccount } from "../schemas/account-schema";

const accountKeys = {
  all: ["accounts"] as const,
  one: (id: AccountId) => [...accountKeys.all, id] as const,
};

export const useAccountQuery = (accountId: AccountId) => {
  return useSuspenseQuery({
    queryKey: accountKeys.one(accountId),
    queryFn: () => (accountId ? getAccount(accountId) : null),
  });
};

export const useCreateAccountMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newAccount: CreateAccount) => createAccount(newAccount),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: accountKeys.one(data.id),
      });
    },
  });
};
