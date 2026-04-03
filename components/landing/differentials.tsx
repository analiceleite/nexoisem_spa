import { GraduationCap, Target, Lightbulb, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const differentials = [
  {
    icon: GraduationCap,
    title: "Sólida Base Técnica",
    description: "Formação técnica em Elétrica e Eletrônica, essencial para validar componentes de segurança eletroeletrônicos. Graduação em Engenharia Mecânica e pós-graduação em Gestão Estratégica da Manutenção.",
    highlight: "2008-2010",
  },
  {
    icon: Target,
    title: "Foco em Continuidade",
    description: "Abordagem voltada para a otimização de processos, evitando que a segurança prejudique a produtividade. Soluções que equilibram conformidade e eficiência operacional.",
    highlight: "Produtividade",
  },
  {
    icon: Lightbulb,
    title: "Especialização Contínua",
    description: "Pós-graduação em Engenharia de Segurança do Trabalho (Conclusão 2026) e pós-graduação em Planejamento Estratégico de Manutenção, garantindo atualização técnica constante e conhecimento das normas mais recentes.",
    highlight: "Em andamento",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "15 anos de atuação em manutenção industrial e retrofit. Conhecimento prático de campo que garante soluções tecnicamente viáveis.",
    highlight: "15 anos",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-accent/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left - Header */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Por que escolher a NEXO ISEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-balance">
              Nossos <span className="text-primary">Diferenciais</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Combinamos conhecimento técnico aprofundado com experiência prática para entregar soluções que realmente funcionam no chão de fábrica.
            </p>
            <Button asChild className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="#contato">
                Fale com um de nossos especialistas
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right - Cards Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div 
                key={item.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {item.highlight}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                
                {/* Index Number */}
                <div className="absolute bottom-4 right-4 text-4xl font-bold text-muted/20 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
