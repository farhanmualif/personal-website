import Footer from "../components/footer/Footer";
import { NavbarWithMegaMenu } from "../components/nav/Nav";
import Dashboard from "../components/dashboard/dashboard";
import React from "react";

export default function HomePage() {
  return (
    <>
      <NavbarWithMegaMenu />
      <Dashboard />
      <Footer />
    </>
  );
}
