import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Kotlin", "Java", "Python", "TypeScript"],
    delay: "delay-200",
  },
  {
    title: "Developer Tools",
    skills: ["GitHub", "Android Studio", "IntelliJ IDEA", "VS Code", "Postman", "Figma"],
    delay: "delay-400",
  },
  {
    title: "Technologies",
    skills: ["Spring Boot", "Android Development", "Machine Learning", "Google Cloud", "Docker", "Oracle Database"],
    delay: "delay-600",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-10 left-10 font-mono text-xs text-foreground/30 animate-pulse">
          {'{ "developer": "passionate" }'}
        </div>
        <div
          className="absolute top-20 right-20 font-mono text-xs text-foreground/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          {"function createAwesome() { return true; }"}
        </div>
        <div
          className="absolute bottom-20 left-20 font-mono text-xs text-foreground/25 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          {'const skills = ["Kotlin", "Java", "Python"];'}
        </div>
        <div
          className="absolute bottom-10 right-10 font-mono text-xs text-foreground/30 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          {"// Building the future"}
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-foreground text-center animate-in fade-in slide-in-from-top-4 duration-700">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-700 ${category.delay} backdrop-blur-sm bg-background/90`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    >
                      {skill}
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
