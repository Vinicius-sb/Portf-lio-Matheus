import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio | Vinicius',
  description: 'Competências, habilidades e contato de Vinicius.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}
