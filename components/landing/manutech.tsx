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

export function ManuTech() {
  return (
    <section id="manutech" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Software Exclusivo NEXO</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Manu<span className="text-primary">Tech</span>
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto text-balance">
            Sistema completo de gestão de manutenção industrial. Acompanhe cada ação realizada 
            durante o tempo de máquina parada e tome decisões baseadas em dados reais.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {mainFeatures.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline + Dashboard Section */}
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          {/* Timeline Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Timeline de Ações</h3>
                <p className="text-sm text-white/60">Rastreie cada etapa da manutenção</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Visualize uma linha do tempo completa de todas as ações realizadas durante 
              o período de máquina parada. Registre horários e atividades para análise posterior.
            </p>
            
            {/* Timeline Visual */}
            <div className="relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
              <div className="space-y-4">
                {timelineSteps.map((step, index) => (
                  <div key={step.label} className="flex items-center gap-4 relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      index === timelineSteps.length - 1 
                        ? 'bg-primary text-white' 
                        : 'bg-white/10 text-white/80'
                    }`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{step.label}</p>
                      <p className="text-white/50 text-xs">{step.time}</p>
                    </div>
                    {index === timelineSteps.length - 1 && (
                      <div className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        1h total
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grafana Views Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Dashboards Analíticos</h3>
                <p className="text-sm text-white/60">Visualizações com Grafana</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Painéis interativos para análise profunda de indicadores. 
              Identifique padrões, ofensores e oportunidades de melhoria.
            </p>
            
            {/* Grafana Views Grid */}
            <div className="grid grid-cols-2 gap-3">
              {grafanaViews.map((view) => (
                <div 
                  key={view.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group"
                >
                  <view.icon className="h-5 w-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold text-sm mb-1">{view.title}</h4>
                  <p className="text-white/50 text-xs">{view.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics + Notifications Row */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* MTTA Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Timer className="h-6 w-6 text-primary" />
              <span className="text-white font-bold">MTTA</span>
            </div>
            <p className="text-3xl font-bold text-white mb-2">15 min</p>
            <p className="text-white/60 text-sm">Tempo médio de atendimento após abertura de chamado</p>
          </div>

          {/* MTBF Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-6 w-6 text-emerald-400" />
              <span className="text-white font-bold">MTBF</span>
            </div>
            <p className="text-3xl font-bold text-white mb-2">720h</p>
            <p className="text-white/60 text-sm">Tempo médio entre falhas dos equipamentos</p>
          </div>

          {/* MTTR Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="h-6 w-6 text-cyan-400" />
              <span className="text-white font-bold">MTTR</span>
            </div>
            <p className="text-3xl font-bold text-white mb-2">2.5h</p>
            <p className="text-white/60 text-sm">Tempo médio de reparo e retorno à operação</p>
          </div>
        </div>

        {/* Notifications & Integration */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3">Notificações Inteligentes</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Mantenha sua equipe informada em tempo real. Alertas automáticos para paradas, 
                manutenções programadas e situações críticas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-white/80 text-sm">E-mail</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">Ativo</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-white/80 text-sm">WhatsApp</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Fase 2</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-80 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="h-4 w-4 text-primary" />
                <span className="text-white/60 text-xs">Notificação recebida</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-white/5 border-l-2 border-yellow-500">
                  <p className="text-white text-sm font-medium">Injetora #03 - Parada</p>
                  <p className="text-white/50 text-xs">Aguardando técnico - há 5 min</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border-l-2 border-primary">
                  <p className="text-white text-sm font-medium">Torno CNC #01 - Manutenção</p>
                  <p className="text-white/50 text-xs">Concluída com sucesso - há 15 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack & CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-emerald-500/10 border border-primary/20">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <span className="text-white/80 text-sm font-medium">Stack Moderna:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['Angular', 'Django', 'PostgreSQL', 'Docker', 'Grafana'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white font-semibold group shrink-0">
            <Link href="#contato">
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
