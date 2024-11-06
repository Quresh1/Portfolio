import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Your Portfolio',
  description: 'A showcase of my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head />
      <body 
        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans"
        suppressHydrationWarning
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}