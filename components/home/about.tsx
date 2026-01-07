import { CheckCircle2 } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function About() {
  const points = [
    "Expert-led instructions from industry veterans",
    "Hands-on practical projects for every module",
    "Lifetime access to course materials and updates",
    "Global recognition and industry-standard certification",
    "Dedicated career support and networking opportunities",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <img src={getAssetPath("/student-learning-coding.jpg")} alt="Learning" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <img src={getAssetPath("/developer-working.png")} alt="Working" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <img src={getAssetPath("/team-collaboration.png")} alt="Team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <img src={getAssetPath("/classroom-setting.jpg")} alt="Classroom" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">About Mahagnani</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Empowering the Next Generation of Tech Leaders
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mahagnani is more than just an online learning platform. We are a community of passionate educators and
                ambitious learners dedicated to mastering the technologies that define the modern world.
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
                "Our mission is to make high-quality tech education accessible, practical, and career-transforming for
                everyone, regardless of their starting point."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
