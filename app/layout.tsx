import { Providers } from './providers'
import styles from '../styles/Home.module.css'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Jackpot',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Providers>
          <div className={styles.container}>
            <main className={styles.main}>
              <h1 className={styles.title}>Jackpot!</h1>

              <p className={styles.description}>Pricenow coding challenge</p>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
