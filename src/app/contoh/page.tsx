import ProfileCard from '@/components/MemberCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Example - Photobooth by Siliwangi Code Developer (SICODEV)',
  description: 'Example page showcasing components and features.',
}

const page = () => {
  return (
    <div>
      <ProfileCard name="Diva" role="admin" image="/" />
    </div>
  )
}

export default page
