"use client";

import Image from "next/image";
import { React, useState } from "react";
import logo from "../../images/zorb.svg";
import ParticleConnectButton from "../components/global/ConnectButton";
import InputAutoFocus from "../components/custom/InputAutoFocus";
import Link from "next/link";

export default function Portfolio() {
  const [values, setValues] = useState(["", "", "", "", ""]);

  const areAllInputsFilled = values.every((value) => value !== "");
  return (
    <div className="m-0 p-0">
      <div className="w-full text-center bg-primary_orange text-white py-3.5 px-2 text-sm font-inter font-semibold">
        The protocol is not accepting deposits beyond the $1,000,000,000 cap.
        Please stay tuned for more updates.
      </div>

      <nav className="w-full h-32 flex justify-between items-center px-5 md:px-10 lg:px-36">
        <Link href="/">
          <Image
            className="md:w-[45px] w-8"
            width={45}
            height={45}
            src={logo}
            alt="kaarak logo"
          />
        </Link>

        <div className="flex justify-end items-center gap-5 font-nunito font-medium">
          <Link href="/" className="hover:underline">
            Restaking
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <ParticleConnectButton />
        </div>
      </nav>

      <section className="w-full flex flex-col justify-center items-center px-5">
        <div className="max-w-lg w-full background p-7 rounded-md mt-20 text-white font-inter">
          <h1 className="uppercase w-full text-center font-bold lg:text-2xl">
            Early access xp
          </h1>
          <h1 className="w-full text-center mt-4 text-sm md:text-base">
            Enter your invite code to start earning XP.
          </h1>

          <InputAutoFocus values={values} setValues={setValues} />

          <button
            disabled={!areAllInputsFilled}
            className="background font-bold text-base md:text-lg lg:text-xl w-full rounded-md border mt-10 h-12 md:h-14 lg:h-16 disabled:opacity-65 disabled:cursor-not-allowed"
          >
            Redeem Invite Code
          </button>
        </div>
      </section>
    </div>
  );
}
