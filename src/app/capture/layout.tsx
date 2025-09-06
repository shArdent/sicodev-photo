import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capture Photos - Photobooth by Siliwangi Code Developer (SICODEV)',
  description:
    'Capture your best moments with our photobooth! Take photos and create memories.',
}

export default function CaptureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
