"use client";

import React, { useState } from "react";
import RelayNav from "../../components/global/navbar/RelayNav";
import { Inter, Nunito_Sans } from "next/font/google";
import RelayMobileNav from "../../components/global/navbar/RelayMobileNav";

export const inter_init = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={inter_init.variable}>
      <RelayNav bgColor="" transparentBg={true} setOpen={setOpen} />
      <RelayMobileNav open={open} setOpen={setOpen} />
      {children}
    </div>
  );
}
