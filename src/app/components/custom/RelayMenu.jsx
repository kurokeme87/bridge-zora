// This componenthas drodpwn too
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const RelayMenu = ({ title, data = [], align }) => {
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
    <div ref={dropdowRef} className="relative font-inter">
      <button
        className="font-semibold text-gray-500 flex justify-center items-center gap-2"
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
    } z-50  shadow-tab_box justify-start items-center p-4 w-max min-w-56 transition-transform duration-300 ease-in-out absolute top-10 -left-44 bg-white rounded-md font-inter whitespace-nowrap`}
      >
        <div className="border-b border-gray-300 pb-3 flex flex-col mb-3">
          {data.map((item, index) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={index}
              href={item.link}
              className={`w-full p-1 text-[#7E868C] text-left hover:text-purple-500 capitalize font-medium`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 1200 1227"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="inherit"
            ></path>
          </svg>

          <svg
            width="25"
            height="25"
            viewBox="0 0 1260 1260"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2)">
              <path
                d="M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z"
                fill="inherit"
              ></path>
              <path
                d="M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z"
                // fill="var(--colors-neutral-bg)"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="1259.61" height="1259.61" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RelayMenu;
