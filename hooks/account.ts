import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { CreateAccount } from "../schemas/account-schema";
import { createAccount, getAccount } from "../lib";

const accountKeys = {
  all: ["accounts"] as const,
  one: (id: string) => [...accountKeys.all, id] as const,
};

export const useAccountQuery = (accountId: string) => {
  return useSuspenseQuery({
    queryKey: accountKeys.one(accountId),
    queryFn: () => getAccount(accountId),
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
