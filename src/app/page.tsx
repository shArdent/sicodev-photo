import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center px-15">
      <div className="relative w-full">
        <Image
          className="-rotate-[15deg] relative left-20 top-10 z-9 [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
          src={"/LayoutB.svg"}
          alt="Photo layout"
          width={210}
          height={740}
        />
        <Image
          className="-rotate-3 absolute top-0 right-10 z-10"
          src={"/LayoutB.svg"}
          alt="Photo layout"
          width={210}
          height={740}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-white text-center w-[150%] gap-7">
        <div>
          <h1 className="font-bold text-5xl mb-3">
            Frame your <i className="text-[#3E08AB]">best moments</i> and take a
            photo with us today.
          </h1>
          <p>
            Snap a photo, strike your best pose, and keep the memory in our
            special frame.
          </p>
        </div>
        <Link href={"/capture"} >
          <button
            type="button"
            className="bg-white text-[#3E08AB] cursor-pointer w-fit px-10 py-3 rounded-2xl font-bold"
          >
            Take a Photo
          </button>
        </Link>
      </div>
    </main>
  );
}
