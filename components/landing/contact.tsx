"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Zap } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(47) 98488-3707",
    link: "tel:+5547984883707",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "nexoisem@gmail.com",
    link: "mailto:nexoisem@gmail.com",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua Irani 431, Floresta - Joinville/SC",
    link: null,
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg - Sex: 8h às 18h",
    link: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}%0A%0AEmpresa: ${formData.company}%0AE-mail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`
    window.open(`https://wa.me/5547984883707?text=${whatsappMessage}`, "_blank")
  }

  return (
    <section id="contato" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-accent/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4" />
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-balance">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Solicite um orçamento, agende uma demonstração do ManuTech ou tire suas dúvidas. 
            Estamos prontos para ajudar sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Envie sua mensagem</h3>
                  <p className="text-sm text-muted-foreground">Resposta em até 24 horas</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva como podemos ajudar sua empresa..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA Card */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-primary to-accent overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                  <h3 className="font-semibold text-lg text-primary-foreground">Atendimento Rápido</h3>
                </div>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Precisa de uma resposta urgente? Envie uma mensagem direta pelo WhatsApp.
                </p>
                <Button
                  variant="secondary"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="https://wa.me/5547984883707" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
