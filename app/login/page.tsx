"use client";

import { useSession } from "next-auth/react";
import { Login } from "../auth/login/page";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    redirect("/home");
  }
  return <Login />;
}
