import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-6 bg-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-foreground/10 rotate-12 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-foreground/5 -rotate-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 border border-foreground/15 rotate-45 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-foreground text-center animate-in fade-in slide-in-from-top-4 duration-700">
          Education & Certifications
        </h2>
        <div className="space-y-8">
          <Card className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-left-8 duration-700 delay-200 backdrop-blur-sm bg-background/80">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Bachelor of Computer Science</CardTitle>
                  <CardDescription className="text-lg">Universitas Ahmad Dahlan • Yogyakarta, ID</CardDescription>
                </div>
                <Badge variant="secondary" className="text-sm">
                  September 2020 – December 2024
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-base">Majored in Informatics • GPA: 3.81/4.00</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-left-8 duration-700 delay-400 backdrop-blur-sm bg-background/80">
              <CardHeader>
                <CardTitle className="text-xl">Machine Learning Path</CardTitle>
                <CardDescription className="text-base">Bangkit Academy • 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Completed 20+ courses in ML, Data Analysis, and TensorFlow</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-right-8 duration-700 delay-600 backdrop-blur-sm bg-background/80">
              <CardHeader>
                <CardTitle className="text-xl">Android Learning Path</CardTitle>
                <CardDescription className="text-base">Bangkit Academy • 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kotlin programming, Android development, and UX Design</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
