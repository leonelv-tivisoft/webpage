import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu } from 'lucide-react';
import logoDark from '@/media/LOGO TIVISOFT FONDO OSCURO.png';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/" className="flex h-10 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-2 shadow-[0_0_18px_rgba(16,185,129,0.2)]">
            <Image
              src={logoDark}
              alt="Tivisoft logo"
              width={180}
              height={36}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center lg:hidden">
          <Link href="/" className="flex h-11 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 px-3 shadow-[0_0_18px_rgba(16,185,129,0.2)]">
            <Image
              src={logoDark}
              alt="Tivisoft logo"
              width={120}
              height={28}
              priority
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
          <Link href="/" className="transition hover:text-emerald-300">Inicio</Link>
          <Link href="/#servicios" className="transition hover:text-emerald-300">Servicios</Link>
          <Link href="/#productos" className="transition hover:text-emerald-300">Productos</Link>
          <Link href="/games" className="transition hover:text-emerald-300">Tivisoft Games</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573102134709"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20 md:flex"
          >
            Contacto
            <ArrowRight className="h-4 w-4" />
          </a>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-800/60 text-slate-100 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
