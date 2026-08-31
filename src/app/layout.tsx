import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Tivisoft | IA para empresas y educación',
  description: 'Soluciones de inteligencia artificial para empresas y aprendizaje con videojuegos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
