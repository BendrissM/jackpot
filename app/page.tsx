"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { getAccount } from "../lib/get-account";
import { useAccountQuery } from "../hooks/account";

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

function Component(props: { accountId: string }) {
  const { data: account } = useAccountQuery(props.accountId);

  return <div>Balance: {account.balance}</div>;
}

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>waiting....</div>}>
        <Component accountId="1" />
      </Suspense>
    </>
  );
}
