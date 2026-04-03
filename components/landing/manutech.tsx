"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Monitor, Smartphone, TrendingDown, Zap } from "lucide-react"

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Registro rápido das manutenções direto no chão de fábrica.",
  },
  {
    icon: Monitor,
    title: "Dashboard Web",
    description: "Visão gerencial em tempo real para decisões com base em dados.",
  },
  {
    icon: TrendingDown,
    title: "Menos Downtime",
    description: "Reduza paradas e aumente a disponibilidade das máquinas.",
  },
]

const kpis = [
  { label: "MTTA", value: "15 min", description: "Atendimento" },
  { label: "MTTR", value: "2.5 h", description: "Reparo" },
  { label: "MTBF", value: "720 h", description: "Entre falhas" },
]

export function ManuTech() {
  return (
    <section id="manutech" className="relative overflow-hidden bg-black py-16 sm:py-24">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.16)_25%,rgba(68,68,68,.16)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.16)_75%,rgba(68,68,68,.16))] bg-[length:56px_56px]" />
      </div>

      <div className="pointer-events-none absolute -right-36 top-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/15 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/50 bg-gradient-to-r from-emerald-500/25 to-green-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
              <Zap className="h-4 w-4" />
              <span>Software exclusivo NEXO ISEM</span>
            </div>

            <h2 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Manu
              <span className="relative ml-1 inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Tech
                </span>
                <span className="absolute bottom-2 left-0 h-3 w-full -skew-x-6 bg-gradient-to-r from-emerald-500/30 to-green-500/10" />
              </span>
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Sistema de gestão de manutenção industrial para controlar paradas, acompanhar a execução das equipes e
              priorizar a produtividade com segurança.
            </p>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-emerald-300" />
                    <p className="font-semibold text-white">{item.title}</p>
                  </div>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                asChild
                className="group border border-emerald-700 bg-emerald-700 text-white shadow-md transition-colors duration-300 hover:border-emerald-800 hover:bg-emerald-800"
              >
                <Link href="#contato">
                  Solicitar Demonstracao
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group border-emerald-500/60 bg-white text-emerald-800 transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-900"
              >
                <Link href="#contato">Falar com Especialista</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-5 backdrop-blur-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-emerald-300/80">Painel ManuTech</p>
                <h3 className="text-lg font-semibold text-white sm:text-xl">Indicadores em Tempo Real</h3>
              </div>
              <div className="rounded-lg border border-emerald-400/40 bg-black/40 px-3 py-1 text-xs text-emerald-200">
                Online
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {kpis.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-black/35 p-3">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="text-xl font-bold text-white">{item.value}</p>
                  <p className="text-xs text-emerald-300">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/35 p-4">
              <p className="mb-3 text-sm font-semibold text-white">Fluxo de atendimento</p>
              <div className="space-y-2">
                {["Parada registrada", "Equipe acionada", "Maquina liberada"].map((step) => (
                  <div key={step} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
