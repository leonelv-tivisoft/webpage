import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pedaleando sin parar | Tivisoft Games',
  description: 'Conoce Pedaleando sin parar, la aventura de Debi por Colombia.',
  alternates: {
    canonical: '/games',
  },
};

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return children;
}