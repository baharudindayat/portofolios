import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Engineer",
    company: "Bank Mega Syariah • Jakarta, ID",
    period: "June 2025 – January 2026",
    points: [
      "Developed RPA server monitoring application using Next.js and Kotlin Spring Boot",
      "Collaborated with vendors to ensure proper RPA system maintenance",
      "Performed comprehensive testing from development to production deployment",
    ],
    delay: "delay-200",
  },
  {
    title: "Back End Developer - Internship",
    company: "BSI Digilab • Yogyakarta, ID",
    period: "September 2024 – March 2025",
    points: [
      "Contributed to Collateral Valuation application appraisal module development",
      "Implemented Kotlin Spring Boot microservices architecture with service registry and API gateway",
      "Developed and optimized Oracle Database schemas, queries, and stored procedures",
    ],
    delay: "delay-400",
  },
  {
    title: "Fullstack Developer - Internship",
    company: "BSI Digilab • Yogyakarta, ID",
    period: "September 2023 – April 2024",
    points: [
      "Developed BSIPINTER backend application with social media-like feeds feature",
      "Created e-request meeting feature for Android application",
      "Ensured seamless integration and functionality within application environment",
    ],
    delay: "delay-600",
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 bg-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <h2 className="text-5xl font-bold text-foreground text-center animate-in fade-in slide-in-from-top-4 duration-700">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-left-8 duration-700 ${job.delay} backdrop-blur-sm bg-background/80`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription className="text-lg">{job.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  {job.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-base">
                      • {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
