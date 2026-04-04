import Link from "next/link"
import { ArrowUpRight, Cpu, Mail, MapPin, Phone } from "lucide-react"

const navigation = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#servicos" },
  { name: "ManuTech", href: "#manutech" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

const services = [
  "Laudos NRs",
  "Análise de Riscos",
  "Manutenção Industrial",
  "ManuTech",
  "Emissão de ART",
  "Consultoria técnica",
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.16)_25%,rgba(68,68,68,.16)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.16)_75%,rgba(68,68,68,.16))] bg-[length:56px_56px]" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="#home" className="group mb-6 flex items-center gap-3">
              <div className="relative rounded-xl border border-emerald-400/30 bg-white/5 p-2 transition-colors group-hover:border-emerald-400/60">
                <img src="/images/nexoisem_logo.jpeg" alt="NEXO ISEM Logo" className="h-8 w-8 rounded-lg object-cover" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-black bg-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight text-white">NEXO ISEM</span>
                <span className="text-sm leading-tight text-slate-400">Engenharia conectada ao futuro</span>
              </div>
            </Link>

            <p className="mb-8 max-w-md leading-relaxed text-slate-300">
              Especialistas em conformidade com normas regulamentadoras, laudos técnicos e gestão inteligente de
              manutenção industrial.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+5547984883707"
                className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-emerald-300"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-emerald-400/40 group-hover:bg-emerald-500/10">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(47) 98488-3707</span>
              </a>

              <a
                href="mailto:nexoisem@gmail.com"
                className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-emerald-300"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-emerald-400/40 group-hover:bg-emerald-500/10">
                  <Mail className="h-4 w-4" />
                </div>
                <span>nexoisem@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Rua Irani 431, Floresta - Joinville/SC</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Navegação
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-300 transition-colors hover:text-emerald-300"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">
              {new Date().getFullYear()} NEXO ISEM Análise em Equipamentos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
