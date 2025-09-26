"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, MessageCircle, ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const typewriterText = [
  "Hi! I'm Baharudin Nur Hidayat 👋",
  "I'm a Software Developer",
  "I specialize in Kotlin & Spring Boot",
  "I build Android applications",
  "I love creating meaningful solutions",
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const currentPhrase = typewriterText[currentIndex]
      
      if (isTyping) {
        if (displayText.length < currentPhrase.length) {
          const timeout = setTimeout(() => {
            setDisplayText(currentPhrase.substring(0, displayText.length + 1))
          }, 50)
          return () => clearTimeout(timeout)
        } else {
          const timeout = setTimeout(() => {
            setIsTyping(false)
          }, 2000)
          return () => clearTimeout(timeout)
        }
      } else {
        if (displayText.length > 0) {
          const timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, displayText.length - 1))
          }, 30)
          return () => clearTimeout(timeout)
        } else {
          setCurrentIndex((prev) => (prev + 1) % typewriterText.length)
          setIsTyping(true)
        }
      }
    }
  }, [displayText, currentIndex, isTyping])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Claude-inspired background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 claude-gradient opacity-10 rounded-full blur-3xl claude-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl claude-pulse"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/30 rounded-full claude-float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-primary/20 rounded-full claude-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-primary/40 rounded-full claude-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main conversation layout */}
        <div className="space-y-8">
          {/* Assistant message bubble */}
          <div className="message-bubble assistant claude-shadow animate-in slide-in-from-left-8 fade-in duration-1000">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center claude-glow">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    I'm a Graduated Informatics Engineering student with strong expertise in 
                    <span className="text-primary font-medium"> Kotlin</span>, 
                    <span className="text-primary font-medium"> Java Spring Boot</span>, and 
                    <span className="text-primary font-medium"> Android development</span>. 
                    I'm passionate about creating meaningful solutions and staying current with technology trends.
                  </p>
                </div>

                {/* Contact info chips */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer interactive-card">
                    <Mail className="h-4 w-4" />
                    <span>baharudindayat57@gmail.com</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer interactive-card">
                    <MapPin className="h-4 w-4" />
                    <span>Jakarta, ID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User response area */}
          <div className="message-bubble user claude-gradient animate-in slide-in-from-right-8 fade-in duration-1000 delay-500">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="font-medium">That sounds impressive! Can I see your work?</div>
                <div className="text-sm opacity-90">Let me check out your projects and experience →</div>
              </div>
              <Sparkles className="w-5 h-5 opacity-70" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-4 animate-in fade-in duration-1000 delay-1000">
            <Button 
              size="lg" 
              className="claude-gradient claude-shadow hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <a href="https://linkedin.com/in/baharudindayat" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                Connect on LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:bg-primary/5 hover:scale-105 transition-all duration-300 group claude-shadow"
              asChild
            >
              <a href="https://github.com/baharudindayat" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                View GitHub
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pt-8 animate-in fade-in duration-1000 delay-1500">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm">Explore my journey</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}