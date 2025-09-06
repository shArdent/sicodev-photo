import { teamMembers } from '@/constants/team'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Photobooth by Siliwangi Code Developer (SICODEV)',
  description:
    'Meet our team at SicoDev - a web developer community that facilitates students in exploring and developing web development skills.',
}

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Get to know <span className="text-purple-400">About Us!</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Mari bergabung dengan kami untuk bersama-sama membangun masa depan
            teknologi yang lebih baik!
          </p>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Meet <span className="text-purple-400">Our Team</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Leadership Row - Ketua dan Wakil Ketua */}
            <div className="hidden md:flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8">
              {teamMembers.slice(0, 2).map((member, index) => (
                <div
                  key={index + 2}
                  className="basis-1/2 md:basis-1/4 relative text-center w-full h-auto md:w-[200px] md:h-[200px] lg:w-full lg:h-auto max-w-[182px] md:max-w-[266px] aspect-square overflow-hidden"
                >
                  <Image
                    src="/team-card.svg"
                    width={500}
                    height={500}
                    alt="team card"
                    className={cn(
                      'w-full h-full',
                      index % 2 === 0 ? 'rotate-0' : 'rotate-90'
                    )}
                  />
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="w-full h-full object-cover absolute aspect-square inset-0 object-center"
                  />
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 w-full text-center z-30 px-2">
                    <h3 className="font-bold text-white text-sm sm:text-lg italic">
                      {member.role}
                    </h3>
                    <p className="text-white text-xs font-medium">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:hidden grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {teamMembers.slice(0, 2).map((member, index) => (
                <div
                  key={index + 2}
                  className="relative text-center w-full h-auto md:w-[200px] md:h-[200px] lg:w-full lg:h-auto aspect-square overflow-hidden"
                >
                  <Image
                    src="/team-card.svg"
                    width={500}
                    height={500}
                    alt="team card"
                    className={cn(
                      'w-full h-full',
                      index % 2 === 0 ? 'rotate-0' : 'rotate-90'
                    )}
                  />
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="w-full h-full object-cover absolute aspect-square inset-0 object-center"
                  />
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 w-full text-center z-30 px-2">
                    <h3 className="font-bold text-white text-sm sm:text-lg italic">
                      {member.role}
                    </h3>
                    <p className="text-white text-xs font-medium">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rest of Team Members */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {teamMembers
                .slice(2, teamMembers.length - 3)
                .map((member, index) => (
                  <div
                    key={index + 2}
                    className="relative text-center w-full h-auto md:w-[200px] md:h-[200px] lg:w-full lg:h-auto aspect-square overflow-hidden"
                  >
                    <Image
                      src="/team-card.svg"
                      width={500}
                      height={500}
                      alt="team card"
                      className={cn(
                        'w-full h-full',
                        index % 2 === 0 ? 'rotate-0' : 'rotate-90'
                      )}
                    />
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className="w-full h-full object-cover absolute aspect-square inset-0 object-center"
                    />
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 w-full text-center z-30 px-2">
                      <h3 className="font-bold text-white text-sm sm:text-lg italic">
                        {member.role}
                      </h3>
                      <p className="text-white text-xs font-medium">
                        {member.name}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="hidden md:flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8">
              {teamMembers
                .slice(teamMembers.length - 3)
                .map((member, index) => (
                  <div
                    key={index + 2}
                    className="basis-1/2 md:basis-1/4 relative text-center w-full h-auto md:w-[200px] md:h-[200px] lg:w-full lg:h-auto max-w-[182px] md:max-w-[266px] aspect-square overflow-hidden"
                  >
                    <Image
                      src="/team-card.svg"
                      width={500}
                      height={500}
                      alt="team card"
                      className={cn(
                        'w-full h-full',
                        index % 2 === 0 ? 'rotate-0' : 'rotate-90'
                      )}
                    />
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className="w-full h-full object-cover absolute aspect-square inset-0 object-center"
                    />
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 w-full text-center z-30 px-2">
                      <h3 className="font-bold text-white text-sm sm:text-lg italic">
                        {member.role}
                      </h3>
                      <p className="text-white text-xs font-medium">
                        {member.name}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="grid md:hidden grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {teamMembers
                .slice(teamMembers.length - 3)
                .map((member, index) => (
                  <div
                    key={index + 2}
                    className={cn(
                      'relative text-center w-full h-auto md:w-[200px] md:h-[200px] lg:w-full lg:h-auto max-w-[266px] aspect-square overflow-hidden'
                      // index === 2 &&
                      //   'col-span-2 justify-self-center max-w-[192px]'
                    )}
                  >
                    <Image
                      src="/team-card.svg"
                      width={500}
                      height={500}
                      alt="team card"
                      className={cn(
                        'w-full h-full',
                        index % 2 === 0 ? 'rotate-0' : 'rotate-90'
                      )}
                    />
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className="w-full h-full object-cover absolute aspect-square inset-0 object-center"
                    />
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 w-full text-center z-30 px-2">
                      <h3 className="font-bold text-white text-sm sm:text-lg italic">
                        {member.role}
                      </h3>
                      <p className="text-white text-xs font-medium">
                        {member.name}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
