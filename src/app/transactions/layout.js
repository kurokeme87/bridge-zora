"use client";

import { useState } from "react";
import Navbar from "../components/global/Navbar";
import MobileNavbar from "../components/global/navbar/MobileNavbar";

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <html>
      <link rel="canonical" href="https://www.zorabridge.com/transactions" />

      <Navbar setOpen={setOpen} />
      <MobileNavbar setOpen={setOpen} open={open} />
      {children}
    </html>
  );
}
