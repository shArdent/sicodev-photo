import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success - Photobooth by Siliwangi Code Developer (SICODEV)',
  description:
    'Photo captured successfully! Download your photobooth strip and share your memories.',
}

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
