"use client"

import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface NavigationProps {
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [isDark, setIsDark] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else if (savedTheme === 'dark' || !savedTheme) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else if (prefersDark) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navItems = [
    { id: "about", label: "About", emoji: "👋" },
    { id: "experience", label: "Experience", emoji: "💼" },
    { id: "projects", label: "Projects", emoji: "🚀" },
    { id: "skills", label: "Skills", emoji: "⚡" },
    { id: "education", label: "Education", emoji: "🎓" },
    { id: "contact", label: "Contact", emoji: "📫" },
  ]

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 claude-shadow">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <button
              onClick={() => onSectionClick("about")}
              className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
            >
              <div className="w-10 h-10 claude-gradient rounded-full flex items-center justify-center claude-glow">
                <span className="text-lg font-bold text-primary-foreground">B</span>
              </div>
              <div className="text-left">
                <h1 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Baharudin Nur Hidayat
                </h1>
                <p className="text-sm text-muted-foreground">Software Developer</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 animate-in fade-in slide-in-from-right-4 duration-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 interactive-card ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground claude-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <span className="mr-2 group-hover:animate-bounce" style={{ animationDuration: "0.6s" }}>
                  {item.emoji}
                </span>
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full claude-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full hover:scale-110 transition-all duration-300 interactive-card group"
            >
              {isDark ? (
                <Sun className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="h-4 w-4 group-hover:-rotate-180 transition-transform duration-500" />
              )}
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full hover:scale-110 transition-all duration-300 interactive-card"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 animate-in slide-in-from-top-2 fade-in duration-300">
            <nav className="grid grid-cols-2 gap-2 p-4 bg-card rounded-2xl border border-border claude-shadow">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionClick(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-300 interactive-card ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <span className="text-lg">{item.emoji}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}