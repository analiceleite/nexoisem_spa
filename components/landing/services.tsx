import { Shield, FileCheck, Wrench, Cpu, Zap, ClipboardCheck } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Laudos NR-12",
    description: "Elaboração de Laudos de Apreciação de Riscos Preliminar conforme NR-12 e ABNT NBR ISO 12100.",
    features: ["Identificação de perigos", "Estimativa de riscos", "Medidas de controle"],
  },
  {
    icon: FileCheck,
    title: "Análise de Riscos",
    description: "Categorização de riscos baseada na severidade de possíveis lesões e frequência de exposição.",
    features: ["Perigos mecânicos", "Perigos elétricos", "Avaliação ergonômica"],
  },
  {
    icon: Wrench,
    title: "Manutenção Industrial",
    description: "15 anos de experiência em manutenção industrial e retrofit com soluções viáveis.",
    features: ["Manutenção preventiva", "Retrofit de máquinas", "Otimização de processos"],
  },
  {
    icon: Zap,
    title: "Sistemas de Segurança",
    description: "Avaliação de circuitos de emergência, sensores e proteções físicas.",
    features: ["Circuitos de emergência", "Sensores de segurança", "Proteções físicas"],
  },
  {
    icon: ClipboardCheck,
    title: "Emissão de ART",
    description: "Registro de Responsabilidade Técnica junto ao CREA por Engenheiro Mecânico.",
    features: ["Documentação completa", "Conformidade legal", "Registro CREA"],
  },
  {
    icon: Cpu,
    title: "Consultoria Técnica",
    description: "Relatórios com indicações de melhorias em Software, Hardware ou Mecânica.",
    features: ["Análise completa", "Recomendações práticas", "Mitigação de riscos"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-balance">
            Soluções Completas em <span className="text-primary">Engenharia Industrial</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços para garantir a conformidade, segurança e eficiência das suas operações.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Service Number */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-muted/30 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              
              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 rounded-xl bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon className="relative h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
