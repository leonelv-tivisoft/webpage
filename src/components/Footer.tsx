import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-white">Tivisoft</p>
          <p className="mt-2 max-w-md">IA aplicada a negocios, productos y experiencias educativas.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-slate-300">
          <Link href="/" className="hover:text-emerald-300">Inicio</Link>
          <Link href="/#servicios" className="hover:text-emerald-300">Servicios</Link>
          <Link href="/#productos" className="hover:text-emerald-300">Productos</Link>
          <Link href="/games" className="hover:text-emerald-300">Games</Link>
        </div>
      </div>
    </footer>
  );
}
