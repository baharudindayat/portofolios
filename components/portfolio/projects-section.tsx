import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, MessageCircle, Sparkles, Code, Zap, Users } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Misata",
    badge: "University Thesis",
    description: "REST API with Java Spring Boot and Android app",
    content:
      "A comprehensive final project featuring REST API development with MVC architecture, Android Architecture Components, and modular Kotlin implementation. This project showcases full-stack development skills and modern mobile architecture patterns.",
    tags: ["Java Spring Boot", "Android", "Kotlin", "REST API", "MVC"],
    delay: "delay-200",
    icon: <Code className="w-5 h-5" />,
    highlights: ["Full-stack development", "Modular architecture", "RESTful design"],
    github: "https://github.com/baharudindayat",
    demo: null,
  },
  {
    title: "Skinifier",
    badge: "Bangkit Academy",
    description: "CNN model for skin disease classification",
    content:
      "Led a team of 6 experts to develop a CNN model for skin disease classification, deployed using Flask and Google Cloud Run. Served as Project Manager, coordinating between ML engineers, mobile developers, and cloud architects.",
    tags: ["Machine Learning", "CNN", "Flask", "Google Cloud", "TensorFlow"],
    delay: "delay-400",
    icon: <Zap className="w-5 h-5" />,
    highlights: ["Team leadership", "ML deployment", "Cloud architecture"],
    github: "https://github.com/baharudindayat",
    demo: "https://skinifier-demo.com",
  },
  {
    title: "BSI-Pinter",
    badge: "Internship Project",
    description: "Social media features and meeting system",
    content:
      "Developed social media-like feeds feature and e-request meeting functionality for the BSIPINTER Android application during internship. Implemented real-time feeds, user interactions, and meeting scheduling system.",
    tags: ["Android", "Kotlin", "Social Features", "Real-time", "Firebase"],
    delay: "delay-600",
    icon: <Users className="w-5 h-5" />,
    highlights: ["Real-time features", "Social interactions", "Meeting system"],
    github: null,
    demo: null,
  },
  {
    title: "Jual.In",
    badge: "Bangkit Academy",
    description: "E-commerce Android application",
    content:
      "Developed UI design from Figma and implemented Android component architecture for e-commerce application. Features include product catalog, shopping cart, user authentication, and payment integration with comprehensive testing.",
    tags: ["Android", "Kotlin", "UI/UX", "Figma", "E-commerce"],
    delay: "delay-800",
    icon: <Sparkles className="w-5 h-5" />,
    highlights: ["E-commerce features", "Payment integration", "Modern UI/UX"],
    github: "https://github.com/baharudindayat",
    demo: null,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Claude-inspired background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 claude-gradient opacity-10 rounded-full blur-2xl claude-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl claude-float" style={{ animationDelay: "1s" }}></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-20 left-20 text-primary/20 claude-float">
          <Code className="w-6 h-6" />
        </div>
        <div className="absolute top-32 right-32 text-primary/30 claude-float" style={{ animationDelay: "1.5s" }}>
          <Zap className="w-5 h-5" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-primary/25 claude-float" style={{ animationDelay: "2s" }}>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header with Conversation Style */}
        <div className="text-center space-y-8">
          <div className="message-bubble assistant claude-shadow animate-in slide-in-from-left-8 fade-in duration-1000 mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center claude-glow">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Here are some of my featured projects 🚀
                </h2>
                <p className="text-lg text-muted-foreground">
                  Each project represents a unique challenge I've tackled, from full-stack development to machine learning. 
                  Click on any project to learn more about the technical details and my role in its development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group interactive-card claude-shadow hover:claude-glow transition-all duration-500 backdrop-blur-sm bg-card/90 border-border/50 animate-in fade-in slide-in-from-bottom-8 duration-700 ${project.delay} cursor-pointer`}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl group-hover:text-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {project.icon}
                    </div>
                    {project.title}
                  </div>
                  <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {project.badge}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-base group-hover:text-foreground transition-colors">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.content}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Key Highlights:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 interactive-card"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="claude-gradient hover:scale-105 transition-all duration-300 group/btn"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>

                {/* Expanded Details */}
                {selectedProject === index && (
                  <div className="mt-6 pt-6 border-t border-border animate-in slide-in-from-top-2 fade-in duration-300">
                    <div className="message-bubble user claude-gradient">
                      <div className="text-sm">
                        <div className="font-medium mb-2">Great! Tell me more about the technical implementation.</div>
                        <div className="opacity-90">
                          This project demonstrates advanced {project.tags[0]} skills with modern architecture patterns and best practices.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-in fade-in duration-1000 delay-1000">
          <div className="message-bubble user claude-gradient mx-auto">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="font-medium">Interested in working together?</div>
                <div className="text-sm opacity-90">Let's discuss how I can help bring your ideas to life!</div>
              </div>
              <Sparkles className="w-5 h-5 opacity-70" />
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              size="lg" 
              className="claude-gradient claude-shadow hover:scale-105 transition-all duration-300 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}