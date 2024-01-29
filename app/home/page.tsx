import Footer from "../components/footer/Footer";
// import { NavbarWithMegaMenu } from "../components/nav/Nav";
import Dashboard from "../components/dashboard/dashboard";
import React from "react";
import Navbar from "../components/nav/Navbar";

export default function HomePage() {
  return (
    <>
      {/* <NavbarWithMegaMenu /> */}
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}
