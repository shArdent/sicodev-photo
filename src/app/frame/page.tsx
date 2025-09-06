import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frame - Photobooth by Siliwangi Code Developer (SICODEV)',
  description:
    'Choose your photobooth frame and capture your smile with Temu Warga 2025 frame!',
}

const FramePage = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl px-10 flex flex-col gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
            Capture your smile with <br />
            <span className="text-[#3E08AB]">Temu Warga 2025</span> frame!
          </h1>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/LayoutB.svg"
              alt="Completed photobooth strip"
              width={310}
              height={740}
              className="object-contain 
             [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] 
             [mask-repeat:no-repeat] 
             [mask-size:100%_100%]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default FramePage
