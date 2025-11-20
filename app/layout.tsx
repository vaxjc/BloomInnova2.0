import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bloom Innova | Transformación con Impacto',
  description: 'Aceleración empresarial y medición ESG. Preparamos tu empresa para atraer capital y liderar la nueva economía en 90 días.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-bloom-surface text-bloom-navy font-sans selection:bg-bloom-purple selection:text-white">
        {children}
      </body>
    </html>
  )
}
