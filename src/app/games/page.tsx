import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Film, ImageIcon, Play, Smartphone, Sparkles, MessageCircle } from 'lucide-react';
import logoLight from '@/media/LOGO TIVISOFT.png';
import pedaleandoLogo from '@/media/Pedaleando_logo.png';
import GameGallery, { type GalleryItem } from '@/components/GameGallery';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import debi from '@/media/galeria-pedaleando-sin-parar/0-debi.jpeg';
import debiPoloNorte from '@/media/galeria-pedaleando-sin-parar/1-Debi-polo-norte.jpeg';
import estatuaLibertad from '@/media/galeria-pedaleando-sin-parar/2-estatua-libertad.jpeg';
import isla from '@/media/galeria-pedaleando-sin-parar/3-isla.jpeg';
import islaNoche from '@/media/galeria-pedaleando-sin-parar/4-isla-noche.jpeg';
import welcomeBogota from '@/media/galeria-pedaleando-sin-parar/5-welcome-to-bogota.jpeg';
import barrio01 from '@/media/galeria-pedaleando-sin-parar/6-barrio-01.jpeg';
import barrio02 from '@/media/galeria-pedaleando-sin-parar/7-barrio-02.jpeg';
import fabrica from '@/media/galeria-pedaleando-sin-parar/8-fabrica.jpeg';
import trabajo from '@/media/galeria-pedaleando-sin-parar/trabajo.jpeg';

const gameHighlights = [
  'Aprendizaje con narrativa y desafíos reales',
  'Desarrollo creativo con IA para familias y estudiantes',
  'Roadmap educativo con actividades guiadas por niveles',
];

const galleryItems: GalleryItem[] = [
  { src: debi, alt: 'Debi, el oso polar protagonista del juego', caption: 'Conoce a Debi' },
  { src: debiPoloNorte, alt: 'Debi en el Polo Norte, punto de partida de la aventura', caption: 'El Polo Norte' },
  { src: estatuaLibertad, alt: 'Debi pedaleando frente a la Estatua de la Libertad', caption: 'Rumbo a América' },
  { src: isla, alt: 'Nivel ambientado en una isla tropical', caption: 'La isla' },
  { src: islaNoche, alt: 'La misma isla durante la noche', caption: 'La isla de noche' },
  { src: welcomeBogota, alt: 'Pantalla de bienvenida a Bogotá', caption: 'Bienvenido a Bogotá' },
  { src: barrio01, alt: 'Recorrido por un barrio colombiano', caption: 'El barrio' },
  { src: barrio02, alt: 'Otra vista del barrio colombiano', caption: 'Calles con historia' },
  { src: fabrica, alt: 'Nivel ambientado en una fábrica', caption: 'La fábrica' },
  { src: trabajo, alt: 'Escena sobre el mundo del trabajo en el juego', caption: 'Manos a la obra' },
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
            <a href="#videos" className="transition hover:text-emerald-600">Videos</a>
            <a href="#galeria" className="transition hover:text-emerald-600">Galería</a>
          </div>

          <a
            href="https://wa.me/?text=%C2%A1Hola%20Tivisoft!%20Me%20interesa%20el%20curso%20de%20creaci%C3%B3n%20de%20videojuegos%20con%20IA%20para%20padres%20e%20hijos.%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Jugar Demo
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

            <div className="mb-3 max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Videojuego
              </p>
            </div>

            <div className="mb-6 max-w-md overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-xl shadow-blue-900/5 sm:p-5">
              <Image
                src={pedaleandoLogo}
                alt="Logo de Pedaleando sin parar"
                width={520}
                height={220}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            <p className="mt-6 max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Sumérgete en la travesía del oso polar Debi por Colombia.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/?text=%C2%A1Hola%20Tivisoft!%20Me%20interesa%20el%20curso%20de%20creaci%C3%B3n%20de%20videojuegos%20con%20IA%20para%20padres%20e%20hijos.%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:scale-[1.02]"
              >
                Jugar Demo
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                <Play className="h-4 w-4" />
                Ver videos y galería
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_35px_80px_rgba(30,41,59,0.12)]">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-3 sm:p-4">
                <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-emerald-200/60 blur-3xl" />
                <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-blue-200/60 blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                      <Play className="h-3.5 w-3.5 text-emerald-500" />
                      Demo game
                    </div>
                    <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 sm:text-xs">
                      In beta
                    </div>
                  </div>

                  <div className="aspect-video w-full bg-slate-100">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/ZSzDsUYp_oY?si=-NnglKKtT35z6EAh&start=77"
                      title="Tivisoft Games demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  <div className="space-y-3 p-4 sm:p-5">
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

      <section id="videos" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              <Film className="h-4 w-4" />
              Videos
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mira el juego en acción
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Un vistazo a la historia de Debi y a cómo se juega en computador y en el celular.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_25px_60px_rgba(15,23,42,0.07)]">
              <YouTubeEmbed videoId="CKqeA4dnVcY" title="Video promocional de Pedaleando sin parar" />
              <div className="p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  <Play className="h-3.5 w-3.5" />
                  Tráiler oficial
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">La travesía de Debi</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  El video promocional que resume la aventura del oso polar desde el Polo Norte hasta Colombia.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_25px_60px_rgba(15,23,42,0.07)]">
              <YouTubeEmbed videoId="4UL5SIs6GSc" title="Gameplay de Pedaleando sin parar en versión móvil" />
              <div className="p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  <Smartphone className="h-3.5 w-3.5" />
                  Versión móvil
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">Gameplay en el celular</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Controles táctiles pensados para jugar en cualquier momento, con la misma experiencia educativa.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <ImageIcon className="h-4 w-4" />
            Galería
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Los mundos que recorre Debi
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Del hielo del Polo Norte a los barrios de Bogotá. Toca cualquier imagen para verla en grande.
          </p>
        </div>

        <div className="mt-10">
          <GameGallery items={galleryItems} />
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
