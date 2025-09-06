import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QR Code - Photobooth by Siliwangi Code Developer (SICODEV)',
  description: 'Scan the QR code to download your photobooth image.',
}

export default function QRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
