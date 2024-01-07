import { M_PLUS_2 } from 'next/font/google'
import './globals.css'

const m_PLUS_2 = M_PLUS_2({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next Portfolio',
  description: '健康寿命を伸ばす次世代トレーニング',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={m_PLUS_2.className}>{children}</body>
    </html>
  )
}
