"use client"

interface NavigationProps {
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <h1 className="text-lg font-semibold text-foreground">Baharudin Nur Hidayat</h1>
            <p className="text-sm text-muted-foreground">Software Developer</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-700">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "education", label: "Education" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`text-sm transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? "text-foreground font-medium border-b-2 border-foreground pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
