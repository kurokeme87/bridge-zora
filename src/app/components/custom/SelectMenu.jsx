// This componenthas drodpwn too
"use client";

import { crypto_ecosystems } from "@/app/lib/ecosystem";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SelectMenu = ({ title, data = [] }) => {
  const dropdowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

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
    <div ref={dropdowRef} className="relative font-inter">
      <button
        className="font-medium text-sm border rounded-full px-4 py-2.5 hover:bg-gray-50 ease transition-all duration-300 text-gray-600 flex justify-center items-center gap-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>
          From{" "}
          <span className="font-semibold text-gray-900">
            {selected ? selected : "All chains"}
          </span>
        </p>
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
    } z-50  shadow-tab_box justify-start items-center p-2 w-max min-w-44 max-h-72 h-max overflow-y-auto transition-transform duration-300 ease-in-out absolute top-14 -left-24 bg-white rounded-md font-inter whitespace-nowrap`}
      >
        <div className="flex flex-col">
          {crypto_ecosystems.map((item, index) => (
            <div
              role="button"
              key={index}
              className="flex justify-start items-center gap-2 p-3 hover:bg-gray-100 ease transition-all"
            >
              <Image src={item.imgSrc} alt={item.name} width={20} height={20} />
              <p
                onClick={() => setIsOpen(false)}
                className={`w-full text-gray-700 capitalize text-sm font-medium`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;
