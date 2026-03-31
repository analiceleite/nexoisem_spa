"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cpu, BarChart3, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-secondary">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse delay-1000" />
      
      {/* Circuit Lines Decoration */}
      <div className="absolute top-1/3 left-0 w-px h-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-px h-60 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium w-fit backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              15 anos de experiência em manutenção industrial
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight text-balance">
              Engenharia{" "}
              <span className="relative">
                <span className="relative z-10 text-primary">Conectada</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -skew-x-6"></span>
              </span>
              {" "}ao Futuro
            </h1>
            
            <p className="text-lg text-secondary-foreground/70 leading-relaxed max-w-xl">
              Especialistas em conformidade NR-12, laudos técnicos e gestão inteligente de manutenção industrial. 
              Transformamos segurança em produtividade com soluções tecnológicas inovadoras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                <Link href="#contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm">
                <Link href="#manutech">
                  <Cpu className="mr-2 h-4 w-4" />
                  Conhecer ManuTech
                </Link>
              </Button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-4">
              <div className="relative p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 backdrop-blur-sm">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                <span className="block text-3xl font-bold text-primary">500+</span>
                <span className="text-xs text-secondary-foreground/60">Máquinas Analisadas</span>
              </div>
              <div className="relative p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 backdrop-blur-sm">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                <span className="block text-3xl font-bold text-primary">100%</span>
                <span className="text-xs text-secondary-foreground/60">Conformidade NR-12</span>
              </div>
              <div className="relative p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 backdrop-blur-sm">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                <span className="block text-3xl font-bold text-primary">15+</span>
                <span className="text-xs text-secondary-foreground/60">Anos de Experiência</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Harley Profile Card */}
          <div className="relative lg:pl-8">
            {/* Main Profile Card */}
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-primary/50 to-accent rounded-2xl opacity-50 blur-sm" />
              
              <div className="relative bg-secondary rounded-2xl overflow-hidden border border-primary/20">
                {/* Profile Image */}
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/images/harley-profile.jpg"
                    alt="Harley Ivan - Engenheiro Mecânico fundador da NEXO ISEM"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                  
                  {/* Floating Tech Elements */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-primary/90 backdrop-blur-sm">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="relative p-6 -mt-16">
                  <div className="flex items-end gap-4 mb-4">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 shadow-lg shadow-primary/25">
                      <div className="w-full h-full rounded-xl bg-secondary flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">HI</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary-foreground">Harley Ivan Venicius Inácio</h3>
                      <p className="text-sm text-primary">Engenheiro Mecânico | Fundador</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-secondary-foreground/70 mb-4">
                    CREA-SC 2237883 - Especialista em Gestão Estratégica da Manutenção com 15 anos de experiência em campo.
                  </p>
                  
                  {/* Tech Skills */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">NR-12</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">Manutenção</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">ManuTech</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">Retrofit</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Feature Cards */}
            <div className="absolute -left-8 top-1/4 hidden lg:block">
              <div className="p-3 rounded-xl bg-secondary border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-1/3 hidden lg:block">
              <div className="p-3 rounded-xl bg-secondary border border-primary/30 shadow-xl shadow-primary/10 backdrop-blur-sm">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
