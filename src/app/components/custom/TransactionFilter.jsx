import { GoDotFill } from "react-icons/go";
const { MdSearch } = require("react-icons/md");
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import SelectMenu from "./SelectMenu";
import { ecosystem_tabs } from "@/app/lib/ecosystem";

const TransactionFilter = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-7">
      <div className="flex items-center gap-3">
        <div className="relative rounded-full h-11 text-[#7E868C] w-[400px]">
          <MdSearch color="#777" size={23} className="absolute left-5 top-3" />
          <input
            type="search"
            placeholder="Filter by wallet addres, ENS, or trsnaction hash"
            className="w-full h-11 border pl-12 text-sm rounded-3xl  border-gray-200 outline-[#5746AF]"
          />
        </div>

        <div className="flex justify-start items-center">
          <GoDotFill color="green" size={22} />
          <p className="text-gray-700 text-sm">Live</p>
        </div>
      </div>

      <div className="flex justify-start items-center">
        <div className="flex justify-start items-center gap-1">
          <p className="text-[#7E868C] text-sm font-medium">Route</p>
          <SelectMenu title="All chains" data={ecosystem_tabs} />
          <FaArrowRightArrowLeft size={20} color="#777" className="mx-4" />
          <SelectMenu title="All chains" data={ecosystem_tabs} />
        </div>
      </div>
    </div>
  );
};

export default TransactionFilter;
