import React from 'react'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './ar.css'

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

// Arabic pages: right-to-left content inside the shared English header/footer.
export default function ArabicLayout({ children }) {
  return (
    <div lang='ar' dir='rtl' className={`ar-root ${arabic.variable}`}>
      {children}
    </div>
  )
}
