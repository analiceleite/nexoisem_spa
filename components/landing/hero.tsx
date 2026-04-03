"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black pt-16">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.16)_25%,rgba(68,68,68,.16)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.16)_75%,rgba(68,68,68,.16))] bg-[length:56px_56px]" />
      </div>

      <div className="pointer-events-none absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-emerald-500/15 blur-[170px]" />

      <style jsx>{`
        @keyframes shimmer {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>

      <div className="relative z-20 grid min-h-[calc(100vh-4rem)] w-full lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex items-center px-4 py-12 sm:px-8 sm:py-16 lg:justify-end lg:px-12 xl:px-20">
          <div className="flex w-full max-w-xl flex-col gap-6 lg:ml-auto lg:max-w-[42rem]">
            <div className="animate-slide-in-up opacity-0">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/50 bg-gradient-to-r from-emerald-500/25 to-green-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/80 hover:shadow-lg hover:shadow-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span>15 anos de experiência em manutenção industrial</span>
              </div>
            </div>

            <h1 className="animate-slide-in-up text-balance text-4xl font-bold leading-tight text-white opacity-0 delay-100 sm:text-5xl lg:text-6xl">
              Engenharia{" "}
              <span className="relative inline-block">
                <span className="relative z-10 animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Conectada
                </span>
                <span className="absolute bottom-2 left-0 h-3 w-full -skew-x-6 animate-pulse bg-gradient-to-r from-emerald-500/30 to-green-500/10"></span>
              </span>{" "}
              ao Futuro
            </h1>

            <p className="animate-slide-in-up max-w-xl text-base leading-relaxed text-slate-300 opacity-0 delay-200 sm:text-lg">
              Especialistas em conformidade com Normas Regulamentadoras, laudos técnicos e gestão inteligente de manutenção industrial.
              Transformamos segurança em produtividade com soluções tecnológicas inovadoras.
            </p>

            <div className="animate-slide-in-up flex flex-col gap-3 pt-2 opacity-0 delay-300 sm:flex-row sm:gap-4 sm:pt-4">
              <Button
                size="lg"
                asChild
                className="group border border-emerald-700 bg-emerald-700 text-white shadow-md transition-colors duration-300 hover:border-emerald-800 hover:bg-emerald-800"
              >
                <Link href="#contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group border-emerald-500/60 bg-white text-emerald-800 backdrop-blur-sm transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-900 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <Link href="#manutech">
                  <Cpu className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Conhecer ManuTech
                </Link>
              </Button>
            </div>

            <div className="animate-slide-in-up mt-4 grid grid-cols-3 gap-3 pt-4 opacity-0 delay-400 sm:gap-4 sm:pt-8">
              {[
                { value: "100+", label: "Máquinas Analisadas", delay: 400 },
                { value: "100%", label: "Conformidade com Normas Regulamentadoras", delay: 500 },
                { value: "15+", label: "Anos de Experiência", delay: 600 },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer rounded-lg border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/60 hover:from-emerald-500/20 sm:rounded-xl sm:p-4"
                  style={{
                    animation: "slideInUp 0.8s ease-out forwards",
                    animationDelay: `${stat.delay}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 transition-transform group-hover:scale-150" />
                  <span className="block bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-2xl font-bold text-transparent group-hover:from-emerald-200 group-hover:to-green-200 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 transition-colors group-hover:text-slate-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-slide-in-right relative flex min-h-[42vh] items-center opacity-0 delay-500 lg:min-h-[calc(100vh-4rem)] lg:justify-start lg:py-12">
          <div className="relative h-[42vh] w-full overflow-hidden rounded-2xl lg:h-[68vh] lg:max-h-[620px] lg:w-[84%] xl:w-[80%]">
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover object-center">
              <source src="/videos/nexo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/80" />
            <div className="pointer-events-none absolute bottom-8 right-8 hidden rounded-xl border border-emerald-400/50 bg-slate-900/75 p-3 shadow-lg shadow-emerald-500/20 backdrop-blur-sm lg:block">
              <Cpu className="h-6 w-6 text-emerald-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
