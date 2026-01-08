import { CheckCircle2 } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function About() {
  const points = [
    "Live interactive classes with expert instructors",
    "Real-time doubt clearing and personalized feedback",
    "Small batch sizes (max 25 students) for better attention",
    "Lifetime access to class recordings and materials",
    "Industry-recognized certification upon completion",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <img src={getAssetPath("/student-learning-coding.jpg")} alt="Student engaged in live coding session with instructor guidance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <img src={getAssetPath("/developer-working.png")} alt="Professional developer working on real-world programming projects" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <img src={getAssetPath("/team-collaboration.png")} alt="Team of students collaborating on coding projects in live online environment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <img src={getAssetPath("/classroom-setting.jpg")} alt="Interactive live classroom setting with instructor teaching technology courses" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">About Mahagnani</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Learn Directly from Industry Experts in Live Classes
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mahagnani offers live, instructor-led online classes where you learn by doing. Join small batches of motivated learners, ask questions in real-time, and get personalized feedback from experienced tech professionals.
              </p>
            </div>

            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-primary flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="italic text-muted-foreground border-l-4 border-primary pl-4 py-2">
                "We believe the best way to learn tech is through live interaction with expert instructors. No pre-recorded videos—just real people, real code, and real-time learning."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
