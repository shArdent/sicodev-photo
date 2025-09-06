import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Photobooth by Siliwangi Code Developer (SICODEV)',
  description:
    'Photobooth application developed by Siliwangi Code Developer (SICODEV) for event documentation purposes.',
}

export default function Home() {
  return (
    <main className="flex justify-center items-center px-10 ">
      <div className="relative w-full">
        <Image
          className="-rotate-[15deg] relative left-40 top-10 z-9 [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
          src={'/LayoutB.svg'}
          alt="Photo layout"
          width={250}
          height={810}
        />
        <Image
          className="-rotate-3 absolute top-0 right-10 z-10"
          src={'/LayoutB.svg'}
          alt="Photo layout"
          width={250}
          height={810}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-white text-center w-[160%] gap-7">
        <div>
          <h1 className="font-bold text-5xl mb-3 max-w-4xl leading-15">
            Frame your{' '}
            <i className="bg-gradient-to-r from-[#8F5CFF] to-[#3E08AB] bg-clip-text text-transparent">
              best moments
            </i>{' '}
            and take a photo with us today.
          </h1>
          <p>
            Snap a photo, strike your best pose, and keep the memory in our
            special frame.
          </p>
        </div>
        <Link href={'/capture'}>
          <button
            type="button"
            className="bg-white text-[#3E08AB] cursor-pointer w-fit px-10 py-3 rounded-2xl font-bold"
          >
            Take a Photo
          </button>
        </Link>
      </div>
    </main>
  )
}
