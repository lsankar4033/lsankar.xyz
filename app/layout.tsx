import type { Metadata } from 'next'
import { IBM_Plex_Sans, Work_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const ibmPlex = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-ibm-plex'
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: 'LSANKAR',
  description: 'Personal website and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlex.variable} ${workSans.variable}`}>
      <body className={ibmPlex.className}>
        <div className="min-h-screen">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Navigation />
            <main className="mt-8">
              {children}
            </main>
            <footer className="mt-16 py-8 border-t border-gray-200">
              <div className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Lakshman Sankar
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}