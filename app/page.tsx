"use client";
import { Suspense, useEffect } from "react";
import { useAccountQuery, useCreateAccountMutation } from "../hooks/account";
import Session from "./session";
import { useAccountId } from "../lib/useAccountId";

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

function Component() {
  const { accountId, saveAccountId } = useAccountId();
  const { data: account, isLoading } = useAccountQuery(accountId);
  const { mutate: createAccount, isPending } = useCreateAccountMutation();

  useEffect(() => {
    if (!accountId && !isPending) {
      console.log("creating new account...", account, accountId);
      createAccount(
        {},
        {
          onSuccess: (data) => {
            saveAccountId(data.id);
          },
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountId]);

  if (!account || isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>Account Balance: {account.balance}</div>
      <Session accountId={account.id} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>waiting....</div>}>
        <Component />
      </Suspense>
    </>
  );
}
