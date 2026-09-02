import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tivisoft.com'),
  title: 'Tivisoft | Soluciones de inteligencia artificial',
  description: 'Soluciones de inteligencia artificial para empresas y videojuegos.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
