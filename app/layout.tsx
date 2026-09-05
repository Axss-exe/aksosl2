import { Analytics } from '@vercel/analytics/next'
import { Geist, Instrument_Serif } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const instrument = Instrument_Serif({ subsets: ['latin'], variable: '--font-instrument', weight: '400' })

export const metadata: Metadata = {
  title: 'AKSOS — Make the invisible legible',
  description: 'The intelligence layer that makes relationships across Africa\'s ecosystems visible.',
  generator: 'AKSOS',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#F5F5F2', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${geist.variable} ${instrument.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
