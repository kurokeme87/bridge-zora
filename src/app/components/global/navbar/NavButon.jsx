// This componenthas drodpwn too
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NavButton = ({ title, data = [], align }) => {
  const dropdowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdowRef.current && !dropdowRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdowRef} className="relative">
      <button
        className="font-medium text-black"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{title}</p>
      </button>

      {/* Dropdown conntent */}
      <div
        className={`
    ${
      isOpen
        ? "pointer-events-auto translate-y-0 opacity-100"
        : "dropdown-content group-hover:translate-y-0 opacity-0 translate-y-10 pointer-events-none"
    } z-50 py-1 px-3 flex flex-col justify-start items-center w-max min-w-32 transition-transform duration-300 ease-in-out absolute top-10 md:top-7 right-0 lg:left-0 bg-white border border-gray-800 rounded md:text-sm text-white whitespace-nowrap`}
      >
        {data.map((item, index) => (
          <Link
            onClick={() => setIsOpen(false)}
            key={index}
            href={item.link}
            className={`w-full p-1 hover:font-semibold text-gray-800 text-${
              align ? align : "center"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavButton;
