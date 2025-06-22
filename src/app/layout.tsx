import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amipet - Todo lo que necesitas para el cuidado de tu mascota',
  description:
    'Gestiona el carnet de vacunación, publica mascotas perdidas, encuentra servicios veterinarios, petshops, hoteles caninos y mucho más. Todo en una sola app.',
  openGraph: {
    images: '/opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amipet - Todo lo que necesitas para el cuidado de tu mascota',
    description:
      'Gestiona el carnet de vacunación, publica mascotas perdidas, encuentra servicios veterinarios, petshops, hoteles caninos y mucho más. Todo en una sola app.',
    images: ['https://i.imgur.com/MPMcyPP.png']
  }
}


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex min-h-screen flex-col ${inter.className}`}
          >
            <Header />
            <div className="flex flex-1 justify-center w-full">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
