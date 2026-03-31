"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Monitor,
  BarChart3,
  Clock,
  TrendingDown,
  Bell,
  ArrowRight,
  Zap,
  Activity,
  Eye,
  AlertTriangle,
  Lightbulb,
  Mail,
  MessageCircle,
  Play,
  Pause,
  CheckCircle2,
  Timer,
  Layers
} from "lucide-react"

const mainFeatures = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Projetado para smartphones, permitindo que técnicos registrem manutenções diretamente no chão de fábrica.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "Dashboard Web",
    description: "Painel completo para gestores acompanharem todas as métricas e históricos em tempo real.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingDown,
    title: "Redução de Downtime",
    description: "Minimize o tempo de máquina parada em manutenções e trocas de molde.",
    color: "from-orange-500 to-amber-500",
  },
]

const grafanaViews = [
  { icon: Eye, title: "Visão Geral", description: "Panorama completo de toda a operação" },
  { icon: Activity, title: "Por Máquina", description: "Análise individual de cada equipamento" },
  { icon: AlertTriangle, title: "Ofensores", description: "Identifique os maiores gargalos" },
  { icon: Lightbulb, title: "Insights", description: "Recomendações baseadas em dados" },
]

const timelineSteps = [
  { icon: Pause, label: "Parada Detectada", time: "08:15" },
  { icon: Bell, label: "Equipe Notificada", time: "08:16" },
  { icon: Timer, label: "Diagnóstico", time: "08:25" },
  { icon: CheckCircle2, label: "Manutenção Concluída", time: "09:10" },
  { icon: Play, label: "Máquina Liberada", time: "09:15" },
]

const metricsCards = [
  { icon: Timer, label: "MTTA", value: "15 min", desc: "Tempo médio de atendimento", color: "from-primary/20 to-primary/5", iconColor: "text-primary" },
  { icon: Activity, label: "MTBF", value: "720h", desc: "Tempo entre falhas", color: "from-emerald-400/20 to-emerald-400/5", iconColor: "text-emerald-400" },
  { icon: TrendingDown, label: "MTTR", value: "2.5h", desc: "Tempo de reparo", color: "from-cyan-400/20 to-cyan-400/5", iconColor: "text-cyan-400" },
]

export function ManuTech() {
  return (
    <section id="manutech" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-secondary" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,.1)_25%,rgba(59,130,246,.1)_50%,transparent_50%,transparent_75%,rgba(59,130,246,.1)_75%,rgba(59,130,246,.1))] bg-[length:80px_80px]" style={{ animation: 'drift 30s linear infinite' }} />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl" style={{ animation: 'blob 8s infinite' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" style={{ animation: 'blob 10s infinite reverse' }} />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/8 to-transparent rounded-full blur-3xl opacity-50" style={{ animation: 'blob 9s infinite', animationDelay: '1s' }} />

      {/* Floating Accent Lines */}
      <div className="absolute top-1/4 right-1/3 w-96 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ animation: 'pulse 5s ease-in-out infinite' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" style={{ animation: 'pulse 6s ease-in-out infinite', animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 opacity-0" style={{ animation: 'slideInDown 0.6s ease-out forwards' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/25 to-primary/10 border border-primary/40 mb-6 hover:border-primary/60 transition-all duration-300 group cursor-pointer">
            <Zap className="h-4 w-4 text-primary group-hover:animate-spin" />
            <span className="text-primary text-sm font-medium">Software Exclusivo NEXO</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Manu
            <span className="relative inline-block ml-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Tech
              </span>
              <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/20 -skew-x-6 animate-pulse"></span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto text-balance">
            Sistema completo de gestão de manutenção industrial. Acompanhe cada ação realizada
            durante o tempo de máquina parada e tome decisões baseadas em dados reais.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {mainFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-lg hover:border-primary/50 hover:from-white/12 hover:to-white/6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer opacity-0"
              style={{ animation: 'scaleIn 0.8s ease-out forwards', animationDelay: `${100 + idx * 100}ms` }}
            >
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl group-hover:from-primary/20 transition-colors duration-300" />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 relative z-10`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base group-hover:text-white/70 transition-colors duration-300 relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline + Dashboard Section */}
        <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 mb-8">
          {/* Timeline Card */}
          <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-lg hover:border-primary/40 hover:from-white/12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '200ms' }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/50 transition-all duration-300">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">Timeline de Ações</h3>
                <p className="text-xs sm:text-sm text-white/60">Rastreie cada etapa da manutenção</p>
              </div>
            </div>

            <p className="text-white/70 mb-6 text-xs sm:text-sm leading-relaxed">
              Visualize uma linha do tempo completa de todas as ações realizadas durante
              o período de máquina parada. Registre horários e atividades para análise posterior.
            </p>

            {/* Timeline Visual */}
            <div className="relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 group-hover:via-primary transition-colors duration-300" />
              <div className="space-y-3 sm:space-y-4">
                {timelineSteps.map((step, index) => (
                  <div key={step.label} className="flex items-center gap-3 sm:gap-4 relative group/item opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: `${300 + index * 80}ms` }}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${index === timelineSteps.length - 1
                        ? 'bg-gradient-to-br from-primary to-accent text-white scale-110 shadow-lg shadow-primary/50'
                        : 'bg-white/10 text-white/80 group-hover/item:bg-white/20 group-hover/item:text-white'
                      }`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-xs sm:text-sm group-hover/item:text-primary transition-colors duration-300">{step.label}</p>
                      <p className="text-white/50 text-xs">{step.time}</p>
                    </div>
                    {index === timelineSteps.length - 1 && (
                      <div className="px-2 py-1 rounded-full bg-gradient-to-r from-primary/30 to-accent/20 text-primary text-xs font-medium border border-primary/30 group-hover/item:border-primary/60 transition-colors duration-300">
                        1h total
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grafana Views Card */}
          <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-lg hover:border-primary/40 hover:from-white/12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '300ms' }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">Dashboards Analíticos</h3>
                <p className="text-xs sm:text-sm text-white/60">Visualizações com Grafana</p>
              </div>
            </div>

            <p className="text-white/70 mb-6 text-xs sm:text-sm leading-relaxed">
              Painéis interativos para análise profunda de indicadores.
              Identifique padrões, ofensores e oportunidades de melhoria.
            </p>

            {/* Grafana Views Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {grafanaViews.map((view, idx) => (
                <div
                  key={view.title}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 group/view cursor-pointer opacity-0"
                  style={{ animation: 'scaleIn 0.8s ease-out forwards', animationDelay: `${400 + idx * 80}ms` }}
                >
                  <view.icon className="h-5 w-5 text-primary mb-2 sm:mb-3 group-hover/view:scale-125 group-hover/view:text-accent transition-all duration-300" />
                  <h4 className="text-white font-semibold text-xs sm:text-sm mb-1 group-hover/view:text-primary transition-colors duration-300">{view.title}</h4>
                  <p className="text-white/50 text-xs group-hover/view:text-white/70 transition-colors duration-300">{view.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Cards Row */}
        <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {metricsCards.map((metric, idx) => (
            <div
              key={metric.label}
              className={`group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${metric.color} border border-white/15 backdrop-blur-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer opacity-0`}
              style={{ animation: 'scaleIn 0.8s ease-out forwards', animationDelay: `${500 + idx * 100}ms` }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <metric.icon className={`h-5 sm:h-6 w-5 sm:w-6 ${metric.iconColor} group-hover:scale-125 transition-transform duration-300`} />
                  <span className="text-white/80 font-semibold text-sm sm:text-base group-hover:text-white transition-colors duration-300">{metric.label}</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{metric.value}</p>
                <p className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">{metric.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notifications & Integration Card */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 backdrop-blur-lg mb-8 group hover:border-primary/40 hover:from-white/12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '600ms' }}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">Notificações Inteligentes</h3>
              <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Mantenha sua equipe informada em tempo real. Alertas automáticos para paradas,
                manutenções programadas e situações críticas.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 group/notif cursor-pointer">
                  <Mail className="h-4 w-4 text-primary group-hover/notif:scale-125 transition-transform duration-300" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium">E-mail</span>
                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 text-primary text-xs border border-primary/30 group-hover/notif:border-primary/60 transition-colors duration-300">Ativo</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-all duration-300 group/notif cursor-pointer">
                  <MessageCircle className="h-4 w-4 text-emerald-400 group-hover/notif:scale-125 transition-transform duration-300" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium">WhatsApp</span>
                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-emerald-500/10 text-emerald-400 text-xs border border-emerald-400/30 group-hover/notif:border-emerald-400/60 transition-colors duration-300">Fase 2</span>
                </div>
              </div>
            </div>

            <div className="lg:w-80 p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-white/10 group-hover:border-white/20 transition-all duration-300 space-y-2 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '700ms' }}>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Bell className="h-4 w-4 text-primary animate-bounce" />
                <span className="text-white/60 text-xs sm:text-sm font-medium">Notificações recentes</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border-l-2 border-yellow-500 hover:border-yellow-400 hover:bg-yellow-500/15 transition-all duration-300 cursor-pointer group/card">
                  <p className="text-white text-xs sm:text-sm font-medium group-hover/card:text-yellow-200 transition-colors">Injetora #03 - Parada</p>
                  <p className="text-white/50 text-xs group-hover/card:text-white/70 transition-colors">Aguardando técnico - há 5 min</p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary hover:border-primary/80 hover:bg-primary/15 transition-all duration-300 cursor-pointer group/card">
                  <p className="text-white text-xs sm:text-sm font-medium group-hover/card:text-primary transition-colors">Torno CNC #01 - Manutenção</p>
                  <p className="text-white/50 text-xs group-hover/card:text-white/70 transition-colors">Concluída com sucesso - há 15 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack & CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/20 to-emerald-500/10 border border-primary/20 group hover:border-primary/40 hover:from-primary/25 hover:to-emerald-500/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '700ms' }}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-center sm:justify-start">
              <Layers className="h-5 w-5 text-primary group-hover:animate-spin transition-all duration-300" />
              <span className="text-white/80 text-xs sm:text-sm font-semibold">Stack Moderna:</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {['Angular', 'Django', 'PostgreSQL', 'Docker', 'Grafana'].map((tech, idx) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs border border-white/10 hover:border-primary/60 hover:bg-white/15 hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 opacity-0"
                  style={{ animation: 'scaleIn 0.8s ease-out forwards', animationDelay: `${800 + idx * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary text-white font-semibold shadow-lg shadow-primary/30 border-0 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 group/btn shrink-0 opacity-0"
            style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '700ms' }}
          >
            <Link href="#contato" className="inline-flex items-center justify-center">
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}