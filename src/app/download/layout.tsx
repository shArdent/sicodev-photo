import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download Photo - Photobooth by Siliwangi Code Developer (SICODEV)',
  description: 'Download your photobooth image and share your memories.',
}

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
