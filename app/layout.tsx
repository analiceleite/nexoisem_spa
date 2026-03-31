import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NEXO ISEM | Engenharia Conectada ao Futuro',
  description: 'Engenharia industrial especializada em NR-12, manutenção preventiva e ManuTech - sistema de gestão de manutenção industrial. 15 anos de experiência em Joinville-SC.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/nexoisem_logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/nexoisem_logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/nexoisem_logo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/images/nexoisem_logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
