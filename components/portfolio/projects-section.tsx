import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Misata",
    badge: "University Thesis",
    description: "REST API with Java Spring Boot and Android app",
    content:
      "Comprehensive final project featuring REST API development with MVC architecture, Android Architecture Components, and modular Kotlin implementation.",
    tags: ["Java Spring Boot", "Android", "Kotlin", "REST API"],
    delay: "delay-200",
  },
  {
    title: "Skinifier",
    badge: "Bangkit Academy",
    description: "CNN model for skin disease classification",
    content:
      "Led a team of 6 experts to develop a CNN model for skin disease classification, deployed using Flask and Google Cloud Run. Served as Project Manager.",
    tags: ["Machine Learning", "CNN", "Flask", "Google Cloud"],
    delay: "delay-400",
  },
  {
    title: "BSI-Pinter",
    badge: "Internship Project",
    description: "Social media features and meeting system",
    content:
      "Developed social media-like feeds feature and e-request meeting functionality for the BSIPINTER Android application during internship.",
    tags: ["Android", "Kotlin", "Social Features"],
    delay: "delay-600",
  },
  {
    title: "Jual.In",
    badge: "Bangkit Academy",
    description: "E-commerce Android application",
    content:
      "Developed UI design from Figma and implemented Android component architecture for e-commerce application with comprehensive testing and debugging.",
    tags: ["Android", "Kotlin", "UI/UX", "Figma"],
    delay: "delay-800",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-10 w-4 h-4 bg-foreground/20 rotate-45 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 border-2 border-foreground/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-5 h-5 bg-foreground/10 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-3 h-3 bg-foreground/30 rotate-45 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-foreground text-center animate-in fade-in slide-in-from-top-4 duration-700">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-700 ${project.delay} backdrop-blur-sm bg-background/90`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  {project.title}
                  <Badge variant="outline">{project.badge}</Badge>
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.content}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
