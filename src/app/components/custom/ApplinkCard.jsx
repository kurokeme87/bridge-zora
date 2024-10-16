import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const ApplinkCard = ({ img, description, logo, link, target = "parent" }) => {
  return (
    <div className="border border-gray-800">
      <div className="border-b w-full h-60 border-gray-800 bg-cover bg-no-repeat overflow-hidden">
        <Image
          className="h-[200px] w-full"
          alt={description}
          width={100}
          height={50}
          src={img}
        />
      </div>

      <Link href={link} target={target === "blank" ? "_blank" : "_parent"}>
        <div className="p-5">
          <div className="w-full flex justify-between items-center">
            <p className="md:text-lg">{description}</p>
            <MdArrowOutward size={25} />
          </div>

          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="mt-10"
          />
        </div>
      </Link>
    </div>
  );
};

export default ApplinkCard;
