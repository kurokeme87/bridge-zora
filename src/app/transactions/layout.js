"use client";

import { useState } from "react";
import Navbar from "../components/global/Navbar";
import MobileNavbar from "../components/global/navbar/MobileNavbar";

// import localFont from "next/font/local";

// const myFont = localFont({
//   src: [
//     {
//       path: "../../fonts/pure/PureType-Extended700.otf",
//       weight: "bold",
//       style: "normal",
//     },
//     // {
//     //   path: "../../fonts/pure/PureTypeVariable.otf",
//     //   style: "normal",
//     // },
//     {
//       path: "../../fonts/pure/PureType-400.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../fonts/pure/PureType-Condensed100.otf",
//       weight: "100",
//       style: "normal",
//     },
//   ],
//   display: "swap",
//   variable: "--font-pure",
// });

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar setOpen={setOpen} />
      <MobileNavbar setOpen={setOpen} open={open} />
      {children}
    </div>
  );
}
