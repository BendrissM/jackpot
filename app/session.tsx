"use client";
import { Suspense, useEffect } from "react";
import styles from "./page.module.css";
import type { Session } from "../schemas/session-schema";
import { useCreateSessionMutation, useSessionQuery } from "../hooks/session";
import Button from "../components/Button";

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

interface SessionProps {
  accountId: string;
}

export default function Session({ accountId }: SessionProps) {
  const { data: session } = useSessionQuery(accountId);
  const { mutate: createSession, isPending } = useCreateSessionMutation();

  if (!session) {
    return (
      <Button
        className={styles.button}
        onClick={() => createSession(accountId)}
      >
        Start Session
      </Button>
    );
  }

  return (
    <>
      <Suspense fallback={<div>waiting....</div>}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.block}>Block 1</div>
            <div className={styles.block}>Block 2</div>
            <div className={styles.block}>Block 3</div>
          </div>
          <button className={styles.button}>roll</button>
        </div>
      </Suspense>
    </>
  );
}
