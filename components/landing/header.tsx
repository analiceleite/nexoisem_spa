"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#servicos" },
  { name: "ManuTech", href: "#manutech" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${
                scrolled ? "text-secondary" : "text-secondary-foreground"
              }`}>
                NEXO ISEM
              </span>
              <span className={`text-xs leading-tight transition-colors ${
                scrolled ? "text-muted-foreground" : "text-secondary-foreground/60"
              }`}>
                Engenharia Conectada
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  scrolled 
                    ? "text-foreground/80 hover:text-primary hover:bg-primary/5" 
                    : "text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-2 text-sm transition-colors ${
              scrolled ? "text-muted-foreground" : "text-secondary-foreground/70"
            }`}>
              <Phone className="h-4 w-4" />
              <span>(47) 98488-3707</span>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Link href="#contato">
                <Cpu className="mr-2 h-4 w-4" />
                Orçamento
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-secondary-foreground hover:bg-secondary-foreground/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 px-4 border-t border-border mt-2">
                <Phone className="h-4 w-4" />
                <span>(47) 98488-3707</span>
              </div>
              <div className="px-4 mt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="#contato">
                    <Cpu className="mr-2 h-4 w-4" />
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
