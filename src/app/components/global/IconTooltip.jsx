import { useRef, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const IconTooltip = ({ title }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleOpenDropdown = () => {
    setIsDropdownOpen(true);
    clearTimeout(closeTimeoutRef.current);
  };

  const handleCloseDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);
  };

  return (
    <div
      onMouseEnter={handleOpenDropdown}
      onMouseLeave={handleCloseDropdown}
      ref={dropdownRef}
      className="relative"
    >
      <IoMdInformationCircleOutline
        onMouseEnter={handleOpenDropdown}
        onMouseLeave={handleCloseDropdown}
        onFocus={handleOpenDropdown}
        className="text-primary_orange fill-primary_orange"
      />

      {isDropdownOpen && (
        <div className="z-10 origin-to-right absolute top-6 -left-20 w-60 rounded-md shadow-lg bg-[#25292E] text-white ease-in-out p-3 text-sm md:font-medium">
          {title}
        </div>
      )}
    </div>
  );
};

export default IconTooltip;
