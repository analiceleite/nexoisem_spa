import Link from "next/link"
import { Phone, Mail, MapPin, Cpu, ArrowUpRight } from "lucide-react"

const navigation = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#servicos" },
  { name: "ManuTech", href: "#manutech" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

const services = [
  "Laudos NR-12",
  "Análise de Riscos",
  "Manutenção Industrial",
  "ManuTech",
  "Emissão de ART",
  "Consultoria Técnica",
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-primary-foreground font-bold text-xl">N</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-secondary-foreground leading-tight">NEXO ISEM</span>
                <span className="text-sm text-secondary-foreground/60 leading-tight">Engenharia Conectada ao Futuro</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 max-w-md mb-8 leading-relaxed">
              Especialistas em conformidade NR-12, laudos técnicos e gestão inteligente de manutenção industrial. 
              Transformamos segurança em produtividade com tecnologia de ponta.
            </p>
            <div className="space-y-3">
              <a href="tel:+5547984883707" className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(47) 98488-3707</span>
              </a>
              <a href="mailto:nexoisem@gmail.com" className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>nexoisem@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-secondary-foreground/5 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Rua Irani 431, Floresta - Joinville/SC</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Navegação
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-secondary-foreground/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
              {new Date().getFullYear()} NEXO ISEM Análise em Equipamentos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-secondary-foreground/50">
                CNPJ: 59.868.472/0001-03
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                <Cpu className="h-3 w-3" />
                ManuTech
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
