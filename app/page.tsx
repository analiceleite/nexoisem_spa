import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { ManuTech } from "@/components/landing/manutech"
import { Differentials } from "@/components/landing/differentials"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ManuTech />
      <Differentials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
