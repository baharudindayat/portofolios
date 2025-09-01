import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-foreground/30 rounded-full animate-ping"></div>
        <div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-foreground/20 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-foreground/25 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-20 bg-foreground/10 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-16 bg-foreground/10 -rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-5xl font-bold text-foreground">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm always interested in discussing new opportunities and innovative projects. Feel free to reach out if
            you'd like to collaborate or just have a chat about technology.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <Button size="lg" className="hover:scale-110 transition-transform" asChild>
            <a href="mailto:baharudindayat57@gmail.com">
              <Mail className="h-5 w-5 mr-3" />
              Send Email
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-110 transition-transform bg-transparent" asChild>
            <a href="https://linkedin.com/in/baharudindayat" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-3" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-110 transition-transform bg-transparent" asChild>
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
