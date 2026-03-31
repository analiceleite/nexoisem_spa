import Image from "next/image"
import { Building, MapPin, GraduationCap, Award, Briefcase, Users } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/30">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Conheça a <span className="text-primary">NEXO ISEM</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            União de expertise técnica e visão comercial para entregar soluções completas em engenharia industrial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Harley Profile */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-2xl" />
            
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/5] w-full relative">
                  <Image
                    src="/images/harley-profile.jpg"
                    alt="Harley Ivan - Engenheiro Mecânico e fundador da NEXO ISEM"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                </div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary/95 to-secondary/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-secondary-foreground mb-1">Harley Ivan Venicius Inácio</h3>
                  <p className="text-primary font-medium mb-3">Engenheiro Mecânico - Fundador e CEO</p>
                  <p className="text-sm text-secondary-foreground/70">
                    CREA-SC 2237883
                  </p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -right-4 top-8 p-4 rounded-xl bg-secondary border border-primary/30 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary-foreground">15+</p>
                    <p className="text-xs text-secondary-foreground/60">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div className="space-y-8">
            <div className="space-y-4 text-secondary-foreground/80 leading-relaxed">
              <p>
                A <strong className="text-secondary-foreground">NEXO ISEM Análise em Equipamentos</strong> nasceu da união de expertise técnica e visão comercial. 
                Fundada por <strong className="text-primary">Harley Ivan Venicius Inácio</strong>, Engenheiro Mecânico com vasta formação técnica, 
                e <strong className="text-secondary-foreground">Karin</strong>, responsável pela área comercial.
              </p>
              <p>
                Com experiência sólida em manutenção industrial e retrofit, nossa equipe entende que 
                a segurança não pode ser um obstáculo para a produtividade. Por isso, desenvolvemos 
                soluções que garantem conformidade legal enquanto otimizam seus processos.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <GraduationCap className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-secondary-foreground mb-1">Formação Técnica</h4>
                <p className="text-sm text-secondary-foreground/60">Técnico em Elétrica (2008) e Eletrônica (2010)</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-secondary-foreground mb-1">Especialização</h4>
                <p className="text-sm text-secondary-foreground/60">Gestão Estratégica da Manutenção</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <GraduationCap className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-secondary-foreground mb-1">Pós-Graduação</h4>
                <p className="text-sm text-secondary-foreground/60">Eng. de Segurança do Trabalho (em andamento)</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <Users className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-secondary-foreground mb-1">Equipe</h4>
                <p className="text-sm text-secondary-foreground/60">Harley (Técnico) + Karin (Comercial)</p>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-secondary-foreground/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60">CNPJ</p>
                  <p className="font-medium text-secondary-foreground text-sm">59.868.472/0001-03</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60">Localização</p>
                  <p className="font-medium text-secondary-foreground text-sm">Joinville - SC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
