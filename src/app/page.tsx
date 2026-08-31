import { ArrowRight, Bot, ChartBar, Code2, Sparkles, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const services = [
  {
    title: 'Integración de IA a soluciones tecnológicas existentes',
    description: 'Conectamos modelos y automatizaciones a tus sistemas actuales para ganar productividad y escalabilidad.',
    icon: Zap,
  },
  {
    title: 'Desarrollo de software a la medida con IA',
    description: 'Creamos productos omnicanal, dashboards inteligentes y UX orientadas a resultados diferenciadores.',
    icon: Code2,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-200">
                <Sparkles className="h-4 w-4" />
                IA para negocios de alto impacto
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                La Inteligencia Artificial que Evoluciona tu Empresa. Hoy.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Desde agentes de código eficientes hasta desarrollo a medida.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
                >
                  Descubrir Ejector Seat
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-blue-400/60 bg-blue-500/10 px-6 py-3 font-semibold text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20"
                >
                  Agendar Consultoría
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.8)] backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="h-3 w-3 rounded-full bg-blue-400" />
                      <span className="h-3 w-3 rounded-full bg-slate-500" />
                    </div>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                      Product analytics
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                        <Bot className="h-4 w-4 text-emerald-400" />
                        Agente de IA activo
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-3xl font-bold text-white">84%</p>
                          <p className="text-sm text-slate-400">código validado</p>
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 text-emerald-300">
                          <Zap className="h-7 w-7" />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <p className="text-sm text-slate-400">Tiempo ahorrado</p>
                        <p className="mt-2 text-2xl font-bold text-white">+42%</p>
                      </div>
                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <p className="text-sm text-slate-400">Aprobaciones</p>
                        <p className="mt-2 text-2xl font-bold text-white">12.3k</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                        <span>Productividad</span>
                        <span className="text-emerald-300">+26.4%</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">Servicios</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Soluciones inteligentes para equipos que quieren escalar.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/15 to-blue-500/15 text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/80 shadow-[0_30px_80px_rgba(15,23,42,0.8)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">Producto</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Ejector Seat</h2>

              <p className="mt-5 text-slate-300">
                Un agente de IA y asistente de código pensado para equipos que necesitan velocidad, precisión y ahorro sin sacrificar calidad.
              </p>

              <ul className="mt-8 space-y-4 text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <ChartBar className="h-3.5 w-3.5" />
                  </span>
                  Dashboards de uso para equipos y líderes de producto.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                    <Bot className="h-3.5 w-3.5" />
                  </span>
                  Respuestas de código con contexto comercial y técnico.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  Más económico que herramientas tradicionales del mercado.
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-700 bg-slate-950/80 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900 p-4 shadow-inner shadow-slate-950">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="h-3 w-3 rounded-full bg-slate-500" />
                  </div>
                  <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">Daily report</span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-400">Actividades IA</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-3xl font-bold text-white">1,284</p>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">+18.2%</span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Ahorro</p>
                      <p className="mt-2 text-2xl font-bold text-white">32h</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Cobertura</p>
                      <p className="mt-2 text-2xl font-bold text-white">94%</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                      <span>Equipo productivo</span>
                      <span className="text-emerald-300">71 / 100</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[71%] rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.7)]">
          <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">Hablemos</p>
          <h3 className="mt-4 text-3xl font-bold text-white">Diseñamos IA que encaja con tu operación.</h3>
          <a
            href="mailto:contacto@tivisoft.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
          >
            Agendar consultoría
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
