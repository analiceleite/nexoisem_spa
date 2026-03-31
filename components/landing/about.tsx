"use client"

import Image from "next/image"
import { Building, MapPin, GraduationCap, Award, Briefcase, Users, Star, Zap } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="relative py-16 sm:py-24 bg-secondary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Subtle */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-[150px] animate-[blob_12s_infinite]" style={{ animation: 'blob 12s infinite' }} />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-accent/6 to-transparent rounded-full blur-[150px]" style={{ animation: 'blob 14s infinite reverse', animationDelay: '1s' }} />

        {/* Floating Lines */}
        <div className="absolute top-1/4 left-0 w-96 h-px bg-gradient-to-r from-primary/10 via-primary/20 to-transparent" style={{ animation: 'pulse 6s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-0 w-80 h-px bg-gradient-to-l from-accent/10 via-accent/15 to-transparent" style={{ animation: 'pulse 7s ease-in-out infinite', animationDelay: '1.5s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 opacity-0" style={{ animation: 'slideInDown 0.6s ease-out forwards' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/25 to-primary/10 border border-primary/40 text-primary text-sm font-medium mb-4 backdrop-blur-md hover:border-primary/60 transition-all duration-300 group cursor-pointer">
            <Star className="h-4 w-4 group-hover:animate-spin" />
            <span>Sobre Nós</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
            Conheça a <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">NEXO ISEM</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -skew-x-6 animate-pulse"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-secondary-foreground/70 leading-relaxed">
            União de expertise técnica e visão comercial para entregar soluções completas em engenharia industrial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Harley Profile */}
          <div className="relative opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '150ms' }}>
            {/* Background Decoration - Animated */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-primary/12 via-transparent to-accent/8 rounded-3xl blur-2xl" style={{ animation: 'blob 8s infinite' }} />

            <div className="relative group">
              {/* Main Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <div className="aspect-[4/5] w-full relative overflow-hidden">
                  <Image
                    src="/images/harley-profile-v2.jpg"
                    alt="Harley Ivan - Engenheiro Mecânico e fundador da NEXO ISEM"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent group-hover:via-secondary/30 transition-colors duration-300" />
                </div>

                {/* Overlay Info - Enhanced */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-secondary/98 via-secondary/90 to-secondary/70 backdrop-blur-sm border-t border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-secondary-foreground mb-1">Harley Ivan</h3>
                      <p className="text-primary font-semibold text-sm mb-2">Engenheiro Mecânico - CEO</p>
                    </div>
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/40">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-foreground/70">
                    CREA-SC 2237883 • 15+ anos de experiência
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/40 to-accent/20 border border-primary/40 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Floating Stats Card - Repositioned */}
              <div className="absolute -right-6 sm:-right-8 top-12 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-secondary border border-primary/30 shadow-xl shadow-primary/20 group-hover:shadow-primary/40 group-hover:border-primary/50 transition-all duration-300 hover:scale-105 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '300ms' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">15+</p>
                    <p className="text-xs text-secondary-foreground/70 whitespace-nowrap">Anos de Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div className="space-y-6 sm:space-y-8 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '300ms' }}>
            {/* Description Text */}
            <div className="space-y-4 text-secondary-foreground/80 leading-relaxed">
              <p className="text-sm sm:text-base">
                A <strong className="text-secondary-foreground">NEXO ISEM Análise em Equipamentos</strong> nasceu da união de expertise técnica e visão comercial.
                Fundada por <strong className="text-primary">Harley Ivan Venicius Inácio</strong>, Engenheiro Mecânico com vasta formação técnica,
                e <strong className="text-secondary-foreground">Karin</strong>, responsável pela área comercial.
              </p>
              <p className="text-sm sm:text-base">
                Com experiência sólida em manutenção industrial e retrofit, nossa equipe entende que
                a segurança não pode ser um obstáculo para a produtividade. Por isso, desenvolvemos
                soluções que garantem conformidade legal enquanto otimizam seus processos.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Formação Técnica",
                  desc: "Técnico em Elétrica (2008) e Eletrônica (2010)",
                  delay: 0
                },
                {
                  icon: Award,
                  title: "Especialização",
                  desc: "Gestão Estratégica da Manutenção",
                  delay: 100
                },
                {
                  icon: GraduationCap,
                  title: "Pós-Graduação",
                  desc: "Eng. de Segurança do Trabalho (em andamento)",
                  delay: 200
                },
                {
                  icon: Users,
                  title: "Equipe",
                  desc: "Harley (Técnico) + Karin (Comercial)",
                  delay: 300
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary-foreground/8 to-secondary-foreground/2 border border-secondary-foreground/15 backdrop-blur-sm hover:border-primary/40 hover:from-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer opacity-0"
                  style={{ animation: 'scaleIn 0.8s ease-out forwards', animationDelay: `${450 + item.delay}ms` }}
                >
                  <item.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                  <h4 className="font-semibold text-secondary-foreground mb-1 group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-secondary-foreground/60 group-hover:text-secondary-foreground/80 transition-colors duration-300">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Company Info */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 pt-4 sm:pt-6 border-t border-secondary-foreground/10 opacity-0" style={{ animation: 'slideInUp 0.8s ease-out forwards', animationDelay: '600ms' }}>
              <div className="group flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60 uppercase tracking-wide">CNPJ</p>
                  <p className="font-semibold text-secondary-foreground text-sm group-hover:text-primary transition-colors duration-300">59.868.472/0001-03</p>
                </div>
              </div>
              <div className="group flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-secondary-foreground/60 uppercase tracking-wide">Localização</p>
                  <p className="font-semibold text-secondary-foreground text-sm group-hover:text-primary transition-colors duration-300">Joinville - SC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 30px) scale(0.95);
          }
          75% {
            transform: translate(30px, 20px) scale(1.02);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}