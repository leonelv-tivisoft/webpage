import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Sparkles, MessageCircle, Trophy, Rocket, BrainCircuit } from 'lucide-react';
import logoLight from '@/media/LOGO TIVISOFT.png';

const gameHighlights = [
  'Aprendizaje con narrativa y desafíos reales',
  'Desarrollo creativo con IA para familias y estudiantes',
  'Roadmap educativo con actividades guiadas por niveles',
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-slate-50/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex h-12 items-center justify-center overflow-hidden rounded-full border border-emerald-200 bg-white/80 p-2 shadow-lg shadow-blue-900/5">
              <Image
                src={logoLight}
                alt="Tivisoft logo"
                width={150}
                height={36}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            <Link href="/" className="transition hover:text-emerald-600">Inicio</Link>
            <Link href="/games" className="transition hover:text-emerald-600">Games</Link>
          </div>

          <a
            href="https://wa.me/?text=%C2%A1Hola%20Tivisoft!%20Me%20interesa%20el%20curso%20de%20creaci%C3%B3n%20de%20videojuegos%20con%20IA%20para%20padres%20e%20hijos.%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar Demo Escolar
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              <Sparkles className="h-4 w-4" />
              Educación + creatividad con IA
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Aprende Jugando. Crece Pedaleando.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Descubre 'Pedaleando sin parar', donde la IA transforma la educación en una aventura.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/?text=%C2%A1Hola%20Tivisoft!%20Me%20interesa%20el%20curso%20de%20creaci%C3%B3n%20de%20videojuegos%20con%20IA%20para%20padres%20e%20hijos.%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:scale-[1.02]"
              >
                Solicitar Demo Escolar
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_35px_80px_rgba(30,41,59,0.12)]">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-6">
                <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-emerald-200/60 blur-3xl" />
                <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-blue-200/60 blur-3xl" />

                <div className="relative flex min-h-[420px] flex-col justify-between rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      <Play className="h-3.5 w-3.5 text-emerald-500" />
                      Demo game
                    </div>
                    <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      In beta
                    </div>
                  </div>

                  <div className="mx-auto flex w-full max-w-sm items-center justify-center">
                    <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-300 to-blue-500 shadow-[0_25px_80px_rgba(16,185,129,0.25)]">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
                        <Trophy className="h-12 w-12 text-emerald-600" />
                      </div>
                      <div className="absolute -left-5 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
                        <Rocket className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="absolute -right-3 bottom-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg">
                        <BrainCircuit className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {gameHighlights.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-sm text-slate-600 shadow-sm">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="min-h-[260px] rounded-[2rem] border border-slate-200 bg-slate-200 shadow-xl shadow-blue-900/10" />

          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex max-w-max items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              Próximamente
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Crea la Próxima Gran Aventura. En Familia.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Muy pronto abriremos las puertas de nuestro laboratorio creativo. Un espacio donde padres e hijos aprenderán a usar la Inteligencia Artificial para diseñar, programar y lanzar sus propios videojuegos.
            </p>

            <a
              href="https://wa.me/?text=%C2%A1Hola%20Tivisoft!%20Me%20interesa%20el%20curso%20de%20creaci%C3%B3n%20de%20videojuegos%20con%20IA%20para%20padres%20e%20hijos.%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.05]"
            >
              <MessageCircle className="h-5 w-5" />
              Quiero más información
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
