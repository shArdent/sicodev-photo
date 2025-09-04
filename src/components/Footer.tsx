import { Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10 flex flex-col gap-5">
      <div className="flex justify-center gap-4 mb-4">
        <Image
          src={"/unsil.svg"}
          alt="Universitas Siliwangi"
          width={50}
          height={50}
        />
        <Image src={"/hmif.svg"} alt="HMIF" width={50} height={50} />
        <Image src={"/sicodev3.svg"} alt="Sicodev" width={50} height={50} />
        <Image src={"/blu.svg"} alt="BLU" width={50} height={50} />
      </div>

      <div className="text-center text-white mb-2">
        <Instagram className="inline-block w-5 h-5 mr-2" />
        @sicodev.unsil
      </div>

      <div className="text-center text-gray-400 text-sm">
        © 2025 Sicodev. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
