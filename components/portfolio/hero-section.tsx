"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-foreground/3 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-foreground/10 rounded-full animate-spin"
          style={{ animationDuration: "60s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-foreground/5 rounded-full animate-spin"
          style={{ animationDuration: "40s", animationDirection: "reverse" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Software Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            Graduated Informatics Engineering student with strong expertise in Kotlin, Java Spring Boot, and Android
            development. Passionate about creating meaningful solutions and staying current with technology trends.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
          <div className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
            <Mail className="h-5 w-5" />
            <span>baharudindayat57@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
            <Phone className="h-5 w-5" />
            <span>+6282146585140</span>
          </div>
          <div className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
            <MapPin className="h-5 w-5" />
            <span>Jakarta, ID</span>
          </div>
        </div>
        <div className="flex justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform bg-transparent" asChild>
            <a href="https://linkedin.com/in/baharudindayat" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-3" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform bg-transparent" asChild>
            <a href="https://github.com/baharudindayat" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-3" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
