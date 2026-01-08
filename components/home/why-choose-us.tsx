import { Shield, Target, Award, Users, BookOpen, Video } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: <Video size={32} />,
      title: "Live Interactive Classes",
      description: "Learn in real-time with expert instructors. Ask questions, get instant feedback, and collaborate with peers during live sessions on Mon/Wed/Fri.",
    },
    {
      icon: <Target size={32} />,
      title: "Small Batch Learning",
      description:
        "We keep batches small (max 25 students) to ensure every learner gets personalized attention and all doubts are cleared during class.",
    },
    {
      icon: <Award size={32} />,
      title: "Industry Expert Instructors",
      description:
        "Learn from professionals with 10+ years of industry experience who bring real-world insights and practical knowledge to every session.",
    },
    {
      icon: <Users size={32} />,
      title: "Active Learning Community",
      description:
        "Join a supportive community of 10,000+ learners. Connect on Discord, share projects, and grow together with like-minded tech enthusiasts.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Lifetime Recording Access",
      description:
        "Can't attend a live class? No problem. Get lifetime access to all class recordings, code files, and resources even after batch completion.",
    },
    {
      icon: <Shield size={32} />,
      title: "Affordable & Transparent",
      description:
        "Quality education at just ₹1,500 per course. No hidden fees, no subscriptions. Pay once and get lifetime access to recordings and updates.",
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
              Live Learning. Real Results.
            </span>
          </h3>
          <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-400">
            Experience the power of live instruction with small batches, expert teachers, and personalized feedback that helps you succeed faster.
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
