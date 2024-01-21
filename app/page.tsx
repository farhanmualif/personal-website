import { Metadata } from "next";
import { Login } from "./auth/login/page";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
