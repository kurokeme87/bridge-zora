// This componenthas drodpwn too
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavLinkButton = ({ title, data = [], align }) => {
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
        className="flex justify-start items-center gap-3 font-nunito font-semibold hover:underline"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{title}</p>
        <IoIosArrowDown
          className={`${
            isOpen ? "rotate-180" : ""
          } ease transition-all duration-200`}
        />
      </button>

      {/* Dropdown conntent */}
      <div
        className={`
    ${
      isOpen
        ? "pointer-events-auto translate-y-0 opacity-100"
        : "dropdown-content group-hover:translate-y-0 opacity-0 translate-y-10 pointer-events-none"
    } z-50 py-1 px-3 flex flex-col justify-start items-center w-max min-w-32 transition-transform duration-300 ease-in-out absolute top-10 md:top-7 right-0 left-0 bg-white border border-gray-800 rounded md:text-sm text-white whitespace-nowrap`}
      >
        {data.map((item, index) => (
          <Link
            target="_blank"
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

export default NavLinkButton;
