"use client"

import Image from "next/image"
import { Award, Building, MapPin, Users, Zap } from "lucide-react"

const cards = [
  {
    icon: Award,
    title: "Expertise",
    description:
      "Mais de 15 anos em manutenção industrial com Harley e mais de 20 anos na área comercial com Karin.",
  },
  {
    icon: Users,
    title: "Equipe",
    description:
      "Harley lidera a frente técnica e Karin conduz as áreas comercial e financeira com atendimento consultivo.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-black py-16 sm:py-24">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.16)_25%,rgba(68,68,68,.16)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.16)_75%,rgba(68,68,68,.16))] bg-[length:56px_56px]" />
      </div>

      <div className="pointer-events-none absolute -right-24 top-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/15 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-gradient-to-r from-emerald-500/25 to-green-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
            <Zap className="h-4 w-4" />
            <span>Sobre a NEXO ISEM</span>
          </div>

          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Conheça a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 bg-clip-text text-transparent">
                NEXO ISEM
              </span>
              <span className="absolute bottom-1 left-0 h-2 w-full -skew-x-6 bg-gradient-to-r from-emerald-500/30 to-green-500/10" />
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Engenharia conectada ao futuro, unindo expertise técnica e visão comercial para entregar soluções
            completas em engenharia industrial.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-white/5 sm:rounded-3xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/founders.jpeg"
                  alt="Harley Inacio e Karin Correa - Fundadores da NEXO ISEM"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t border-emerald-400/20 bg-black/65 p-5 backdrop-blur-sm sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">Harley Inacio e Karin Correa</h3>
                    <p className="mt-1 text-sm font-medium text-emerald-300">Fundadores da NEXO ISEM</p>
                  </div>
                  <div className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-2">
                    <Zap className="h-5 w-5 text-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p className="text-sm sm:text-base">
                A <strong className="text-white">NEXO ISEM</strong> nasceu da união entre a expertise técnica de{" "}
                <strong className="text-white">Harley Ivan Venicius Inacio</strong>, Engenheiro Mecânico com ampla
                formação técnica, e a visão comercial de{" "}
                <strong className="text-white">Karin Cristina Correa da Silva</strong>, formada em Administração e com
                forte atuação em relacionamento com clientes.
              </p>
              <p className="text-sm sm:text-base">
                Essa combinação fortalece um atendimento consultivo, com foco em produtividade, segurança técnica e
                soluções alinhadas aos desafios reais da indústria.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {cards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-4 sm:rounded-2xl sm:p-5"
                >
                  <item.icon className="mb-3 h-6 w-6 text-emerald-300" />
                  <h4 className="mb-1 text-sm font-semibold text-white sm:text-base">{item.title}</h4>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    {item.title === "Expertise" ? (
                      <>
                        Mais de <span className="font-semibold text-emerald-400">15 anos</span> em manutenção
                        industrial com Harley e mais de <span className="font-semibold text-emerald-400">20 anos</span>{" "}
                        na área comercial com Karin.
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:flex-wrap sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 sm:h-12 sm:w-12">
                  <Building className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">CNPJ</p>
                  <p className="text-sm font-semibold text-white">59.868.472/0001-03</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 sm:h-12 sm:w-12">
                  <MapPin className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Localizacao</p>
                  <p className="text-sm font-semibold text-white">Joinville - SC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
