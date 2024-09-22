import { FaCheckCircle } from "react-icons/fa";
import { transaction_data } from "@/app/lib/transactions";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";

export const Table = () => {
  return (
    <div className="mt-4 w-full whitespace-nowrap font-inter overflow-x-auto">
      <table className="w-full font-inter">
        <tr className="border-b border-gray-200 text-sm text-gray-500 bg-white z-10">
          <td className="font-medium p-4">From</td>
          <td className="font-medium p-4">To</td>
          <td className="font-medium p-4">Transaction</td>
          <td className="font-medium p-4">Status</td>
          <td className="font-medium p-4">Fill Time</td>
        </tr>
        <tbody>
          {transaction_data.map((item, index) => (
            <tr
              key={index}
              className="font-inter hover:bg-gray-50 ease transition-all"
            >
              <td className="font-medium p-4">
                <div className="flex flex-col">
                  <div className="flex justify-start items-center gap-1">
                    <Image
                      src={item.imgSrc}
                      alt={item.sender}
                      width={32}
                      height={32}
                    />
                    <p>{item.amount}</p>
                  </div>

                  <div className="flex justify-start items-center gap-1 text-sm mt-1.5">
                    <p className="text-gray-500">Sender:</p>
                    <p className="text-[#5746AF]">{item.sender}</p>
                    <FaCopy
                      size={22}
                      color="#888"
                      className="border p-0.5 rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className="font-medium p-4">
                <div className="flex flex-col">
                  <div className="flex justify-start items-center gap-1">
                    <Image
                      src={item.imgSrc}
                      alt={item.sender}
                      width={32}
                      height={32}
                    />
                    <p>{item.amount}</p>
                  </div>

                  <div className="flex justify-start items-center gap-1 text-sm mt-1.5">
                    <p className="text-gray-500">Sender:</p>
                    <p className="text-[#5746AF]">{item.sender}</p>
                    <FaCopy
                      size={22}
                      color="#888"
                      className="border p-0.5 rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className="font-medium p-4">
                <div className="flex flex-col">
                  <div className="flex justify-start items-center gap-1 text-sm mt-1.5">
                    <p className="text-gray-800">Deposit:</p>
                    <p className="text-[#5746AF]">{item.sender}</p>
                    <FaCopy
                      size={22}
                      color="#888"
                      className="border p-0.5 rounded-full"
                    />
                  </div>
                  <div className="flex justify-start items-center gap-1 text-sm mt-1.5">
                    <p className="text-gray-800">Fill:</p>
                    <p className="text-[#5746AF]">{item.sender}</p>
                    <FaCopy
                      size={22}
                      color="#888"
                      className="border p-0.5 rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className="font-medium p-4">
                {item.status === 1 ? (
                  <div className="rounded-full p-2 flex items-center gap-2 bg-green-50 w-max">
                    <FaCheckCircle className="text-green-500" size={17} />
                    <p className="text-sm text-green-900 font-semibold">
                      Success
                    </p>
                  </div>
                ) : null}
                <p className="text-gray-500 text-sm">
                  {item.time * 2} minutes ago
                </p>
              </td>
              <td className="font-medium p-4">{item.time}s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
