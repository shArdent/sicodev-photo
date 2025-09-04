import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="relative w-full flex justify-between items-center py-8 px-10">
      <Link href={"/"}>
        <Image src="/sicodev1.svg" alt="next-icon" height={70} width={60} />
      </Link>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
        <Link
          href={"/"}
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href={"/frame"}
          className="text-white hover:text-gray-300 transition-colors"
        >
          Frame
        </Link>
        <Link
          href={"/about"}
          className="text-white hover:text-gray-300 transition-colors"
        >
          About Us
        </Link>
      </nav>
      <Image src="/sicodev2.svg" alt="next-icon" height={49} width={177} />
    </header>
  );
};

export default Navbar;
