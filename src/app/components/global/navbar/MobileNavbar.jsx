import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const MobileNavbar = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-[700px] opacity-0 invisible"
      } ease-out transition-all duration-300 md:hidden block fixed top-0 bottom-0 left-0 right-0 bg-white z-50`}
    >
      <div className="relative">
        <div
          className="absolute top-4 right-5 hover:bg-gray-100 rounded-full p-2 focus:bg-gray-200 ease"
          role="button"
          onClick={() => setOpen()}
        >
          <IoMdClose size={25} />
        </div>

        <div className="flex flex-col justify-start items-start h-full gap-4 text-primary_black w-full pt-20 pl-5 font-semibold font-nunito">
          <Link href="/restake">Restake</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/bridge">K2 Bridge</Link>
          <Link href="/build">Build</Link>
          <Link href="/build">Docs</Link>
          <Link href="/build">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
