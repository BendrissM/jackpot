import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { createSession, getSessionByAccount } from "../lib";
import { AccountId } from "../types/account";

const sessionKeys = {
  all: ["sessions"] as const,
  one: (id: AccountId) => [...sessionKeys.all, "account", id] as const,
};

export const useSessionQuery = (accountId: AccountId) => {
  return useSuspenseQuery({
    queryKey: sessionKeys.one(accountId),
    queryFn: () => (accountId ? getSessionByAccount(accountId) : null),
  });
};

export const useCreateSessionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (accountId: string) => createSession(accountId),
    onSuccess: (session) => {
      queryClient.invalidateQueries({
        queryKey: sessionKeys.one(session.accountId),
      });
    },
  });
};
