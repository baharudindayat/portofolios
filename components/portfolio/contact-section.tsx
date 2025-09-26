import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageCircle, Heart, Coffee } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Claude-inspired background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 claude-gradient opacity-5 rounded-full blur-3xl claude-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl claude-float"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 text-primary/20 claude-float">
          <Heart className="w-5 h-5" />
        </div>
        <div className="absolute top-40 right-32 text-primary/30 claude-float" style={{ animationDelay: "1s" }}>
          <Coffee className="w-4 h-4" />
        </div>
        <div className="absolute bottom-32 left-40 text-primary/25 claude-float" style={{ animationDelay: "2s" }}>
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Main conversation */}
        <div className="space-y-8">
          {/* Assistant message */}
          <div className="message-bubble assistant claude-shadow animate-in slide-in-from-left-8 fade-in duration-1000 mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center claude-glow">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Ready to start a conversation? 💬
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm always excited to discuss new opportunities, innovative projects, or just chat about the latest in technology. 
                    Whether you're looking for a collaborator, have a project in mind, or want to connect professionally, I'd love to hear from you!
                  </p>
                  <div className="flex items-center gap-2 text-base">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">Based in Jakarta, ID</span>
                    <span>• Always up for a good tech discussion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User response */}
          <div className="message-bubble user claude-gradient animate-in slide-in-from-right-8 fade-in duration-1000 delay-500 ml-auto">
            <div className="space-y-2">
              <div className="font-medium">Perfect! How can I get in touch?</div>
              <div className="text-sm opacity-90">I'm interested in connecting and learning more about your work.</div>
            </div>
          </div>
        </div>

        {/* Contact options */}
        <div className="space-y-8 animate-in fade-in duration-1000 delay-1000">
          {/* Email (Primary) */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-card rounded-2xl border border-border claude-shadow hover:claude-glow transition-all duration-300 interactive-card">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Email me directly</div>
                <div className="text-sm text-muted-foreground">baharudindayat57@gmail.com</div>
              </div>
              <Button 
                className="claude-gradient hover:scale-105 transition-all duration-300 group ml-4"
                asChild
              >
                <a href="mailto:baharudindayat57@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 hover:scale-105 transition-all duration-300 group claude-shadow"
              asChild
            >
              <a href="https://linkedin.com/in/baharudindayat" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                Connect on LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 hover:scale-105 transition-all duration-300 group claude-shadow"
              asChild
            >
              <a href="https://github.com/baharudindayat" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                View My GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Final message */}
        <div className="text-center animate-in fade-in duration-1000 delay-1500">
          <div className="message-bubble assistant claude-shadow mx-auto">
            <div className="flex items-center justify-center gap-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center claude-glow">
                <Heart className="w-3 h-3 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium text-foreground">Thanks for visiting my portfolio!</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Looking forward to connecting and creating something amazing together.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}