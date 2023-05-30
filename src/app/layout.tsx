import { ReactNode } from 'react'
import './globals.css'

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjure,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjure = BaiJamjure({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjure',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, Tailwind e Typ[escript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baijamjure.variable} font-sans text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
