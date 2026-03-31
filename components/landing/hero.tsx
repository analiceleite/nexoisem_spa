"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cpu, BarChart3, Zap, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Gradient Background - SUAVIZADO */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />

      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%,rgba(68,68,68,.2))] bg-[length:60px_60px] animate-[drift_20s_linear_infinite]" />
      </div>

      {/* Animated Gradient Orbs - Enhanced & SUAVIZADO */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-[150px] animate-[blob_8s_infinite] opacity-25" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-accent/10 to-accent/5 rounded-full blur-[150px] animate-[blob_7s_infinite_reverse] opacity-15" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[130px] animate-[blob_9s_infinite] opacity-20 delay-1000" />

      {/* Animated Circuit Lines */}
      <div className="absolute top-1/4 left-1/3 w-px h-72 bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-px h-96 bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-[pulse_5s_ease-in-out_2s_infinite]" />
      <div className="absolute top-2/3 left-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[pulse_6s_ease-in-out_3s_infinite]" />

      {/* Floating Elements - Top Right */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 backdrop-blur-sm animate-[float_6s_ease-in-out_infinite] opacity-0 sm:opacity-100" />
      <div className="absolute top-32 right-1/4 w-12 h-12 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-sm animate-[float_8s_ease-in-out_2s_infinite] opacity-0 sm:opacity-100" />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm animate-[float_7s_ease-in-out_1s_infinite] opacity-0 md:opacity-100" />

      {/* Floating Elements - Bottom Left */}
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-lg bg-primary/15 border border-primary/20 backdrop-blur-sm animate-[float_7s_ease-in-out_3s_infinite] opacity-0 sm:opacity-100" />
      <div className="absolute bottom-1/3 left-1/4 w-14 h-14 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm animate-[float_6s_ease-in-out_4s_infinite] opacity-0 md:opacity-100" />

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
        
        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(60px, 0);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-15px);
          }
        }
        
        @keyframes shimmer {
          0%, 100% {
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

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Tech Badge - Enhanced */}
            <div className="animate-slide-in-up opacity-0">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/25 to-primary/10 border border-primary/40 text-primary text-sm font-medium w-fit backdrop-blur-md hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="group-hover:translate-x-0.5 transition-transform">15 anos de experiência em manutenção industrial</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight text-balance animate-slide-in-up opacity-0 delay-100">
              Engenharia{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-[shimmer_3s_ease-in-out_infinite]">
                  Conectada
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 to-accent/10 -skew-x-6 animate-pulse"></span>
              </span>
              {" "}ao Futuro
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-secondary-foreground/70 leading-relaxed max-w-xl animate-slide-in-up opacity-0 delay-200">
              Especialistas em conformidade NR-12, laudos técnicos e gestão inteligente de manutenção industrial.
              Transformamos segurança em produtividade com soluções tecnológicas inovadoras.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-slide-in-up opacity-0 delay-300">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary text-primary-foreground shadow-lg shadow-primary/30 border-0 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="#contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/40 text-primary hover:bg-primary/5 hover:border-primary/70 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <Link href="#manutech">
                  <Cpu className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Conhecer ManuTech
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-8 mt-4 animate-slide-in-up opacity-0 delay-400">
              {[
                { value: "500+", label: "Máquinas Analisadas", delay: 400 },
                { value: "100%", label: "Conformidade NR-12", delay: 500 },
                { value: "15+", label: "Anos de Experiência", delay: 600 }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-secondary-foreground/8 to-secondary-foreground/2 border border-secondary-foreground/15 backdrop-blur-sm hover:border-primary/40 hover:from-primary/8 transition-all duration-300 group cursor-pointer animate-slide-in-up opacity-0 delay-${stat.delay}`}
                >
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full group-hover:scale-150 transition-transform" />
                  <span className="block text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:from-primary group-hover:to-accent">
                    {stat.value}
                  </span>
                  <span className="text-xs text-secondary-foreground/60 group-hover:text-secondary-foreground/80 transition-colors">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <div className="relative lg:pl-8 animate-slide-in-right opacity-0 delay-500">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-3xl blur-2xl animate-[blob_7s_infinite] opacity-30" />

            {/* Main Profile Card */}
            <div className="relative group">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-primary/50 to-accent rounded-2xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-300 animate-[pulse_4s_ease-in-out_infinite]" />

              <div className="relative bg-secondary rounded-2xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-2xl shadow-primary/10 group-hover:shadow-primary/20">
                {/* Profile Image */}
                <div className="relative h-80 sm:h-96 lg:h-[420px] w-full overflow-hidden">
                  <Image
                    src="/images/harley-profile-v2.jpg"
                    alt="Harley Ivan - Engenheiro Mecânico fundador da NEXO ISEM"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top lg:object-[40%_10%] group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent group-hover:via-secondary/40 transition-colors duration-300" />

                  {/* Floating Tech Elements */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-br from-primary/90 to-primary/70 backdrop-blur-sm shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:shadow-primary/50 transition-all duration-300 animate-[float_5s_ease-in-out_infinite]">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="relative p-4 sm:p-6 -mt-16 sm:-mt-20 lg:-mt-24">
                  <div className="flex items-end gap-3 sm:gap-4 mb-4">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow duration-300">
                      <div className="w-full h-full rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                        <span className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                          HI
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-secondary-foreground group-hover:text-primary transition-colors duration-300">
                        Harley Ivan Venicius Inácio
                      </h3>
                      <p className="text-xs sm:text-sm text-primary/80">Engenheiro Mecânico | Fundador</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary-foreground/70 mb-4 group-hover:text-secondary-foreground/80 transition-colors duration-300">
                    CREA-SC 2237883 - Especialista em Gestão Estratégica da Manutenção com 15 anos de experiência em campo.
                  </p>

                  {/* Tech Skills with Hover Effect */}
                  <div className="flex flex-wrap gap-2">
                    {["NR-12", "Manutenção", "ManuTech", "Retrofit"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-primary/20 to-accent/10 text-primary border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-accent/20 transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Feature Cards - Hidden on Mobile, Visible on Large */}
            <div className="absolute -left-8 top-1/4 hidden xl:block opacity-0 animate-[float_7s_ease-in-out_2s_infinite]">
              <div className="p-3 rounded-xl bg-secondary border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-sm hover:border-primary/60 hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/3 hidden xl:block opacity-0 animate-[float_6s_ease-in-out_3s_infinite]">
              <div className="p-3 rounded-xl bg-secondary border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-sm hover:border-primary/60 hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:translate-y-2">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}