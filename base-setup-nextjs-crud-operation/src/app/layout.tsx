import '@/assets/styles/index.scss';
import Layout from '@/component/hoc/Layout';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Base Next JS',
  description: 'Generated by create next app',
  manifest: "/manifest.json"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
