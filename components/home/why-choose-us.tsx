import { Shield, Target, Award, Users, BookOpen, Laptop } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: <Laptop size={32} />,
      title: "Real-time Projects",
      description: "Learn by doing with our showcase of real-time projects that simulate industry work environments.",
    },
    {
      icon: <Target size={32} />,
      title: "Focused Curriculum",
      description:
        "Our courses are strictly focused on what industry demands, skipping the fluff and getting straight to the core skills.",
    },
    {
      icon: <Award size={32} />,
      title: "Certified Excellence",
      description:
        "Earn industry-recognized certificates that showcase your mastery and help you stand out to top employers.",
    },
    {
      icon: <Users size={32} />,
      title: "Community Support",
      description:
        "Join a thriving community of peers and mentors who are always available to help you overcome challenges.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Lifetime Access",
      description:
        "Once you enroll, you get lifetime access to the course materials, including all future updates and additions.",
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Reliability",
      description:
        "With years of experience in technical training, we provide a secure and reliable platform for your growth.",
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl rounded-full animate-pulse-slower"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm animate-fade-in-up">Why Mahagnani</h2>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
              Practical Learning for Real-World Success
            </span>
          </h3>
          <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-400">
            Build your own application or product by learning from our industry experts and hands-on projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-card/40 to-card/60 border border-border hover:border-primary/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center text-primary mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
