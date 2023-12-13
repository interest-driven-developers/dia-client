import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DIA - Developer Interview Assistant',
  description: '개발자 면접 도우미',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
    let session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header session={session}  />
        {children}</body>
    </html>
  )
}
