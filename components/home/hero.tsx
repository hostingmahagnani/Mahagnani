import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, PlayCircle, Bot, Sparkles, Code, Zap, Brain } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-500/10">
      {/* Animated Mesh Gradient Background - Optimized */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Main gradient orbs - Reduced blur from 100px to 50px */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-primary/20 via-purple-500/15 to-blue-500/20 blur-[50px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-primary/20 blur-[50px] rounded-full animate-pulse-slower" />
        <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-gradient-to-br from-pink-500/10 via-orange-500/5 to-yellow-500/10 blur-[40px] rounded-full animate-float" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Reduced floating shapes - Keep only 3 most visible */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-primary/20 rounded-2xl rotate-12 animate-float opacity-60" />
        <div className="absolute top-[25%] right-[15%] w-16 h-16 border border-purple-500/20 rounded-full animate-float-up-down opacity-60" />
        <div className="absolute bottom-[20%] right-[10%] w-24 h-24 border border-blue-500/20 rounded-3xl -rotate-12 animate-float opacity-50" />
        
        {/* Reduced glowing dots to 3 */}
        <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
        <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-200 shadow-lg shadow-purple-500/50" />
        <div className="absolute bottom-[35%] left-[15%] w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-400 shadow-lg shadow-blue-500/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 animate-fade-in-up">
            <span className="text-foreground">
              Master Tech Skills with{" "}
            </span>
            <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Live Online Classes
            </span>
          </h1>

          <div className="flex flex-col gap-4 mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            <div className="flex items-center justify-center gap-2 text-white font-semibold bg-gradient-to-r from-red-500 to-red-600 px-5 py-2.5 rounded-full backdrop-blur-sm border border-red-400/30 shadow-lg shadow-red-500/30 animate-pulse-subtle">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Next Batch Starts in 10 Days - Limited Seats!</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn Python, AI, Cybersecurity & Web Development through interactive live classes with expert instructors. Small batches of 25 students max.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
              <Link href="/courses">
                View Live Courses <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold bg-transparent hover:bg-primary/10 border-2 hover:border-primary transition-all duration-300 hover:scale-105">
              <Link href="#contact">Attend Free Demo Class</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-12 pt-4 animate-fade-in-up animation-delay-600">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-lg group-hover:from-primary group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110">
                <Users className="text-primary group-hover:text-white transition-colors duration-300" size={20} />
              </div>
              <div>
                <div className="font-bold text-lg leading-none group-hover:text-primary transition-colors">10k+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Students Trained</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 p-2 rounded-lg group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 group-hover:scale-110">
                <PlayCircle className="text-purple-600 group-hover:text-white transition-colors duration-300" size={20} />
              </div>
              <div>
                <div className="font-bold text-lg leading-none group-hover:text-purple-600 transition-colors">200+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Live Batches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced Decorative Card with Animation - Left */}
      <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-green-50 dark:from-card dark:to-green-950/20 p-4 rounded-xl shadow-2xl border border-green-200 dark:border-green-800 hidden sm:block animate-float-up-down z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse-subtle">
            <Users size={20} />
          </div>
          <div>
            <div className="font-bold text-sm bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Small Batch Learning</div>
            <div className="text-xs text-muted-foreground">Max 25 students per batch</div>
          </div>
        </div>
      </div>
      
      {/* New Decorative Card - Right */}
      <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-white to-purple-50 dark:from-card dark:to-purple-950/20 p-4 rounded-xl shadow-2xl border border-purple-200 dark:border-purple-800 hidden md:block animate-float z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse-subtle">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="font-bold text-sm bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Live Interactive Classes</div>
            <div className="text-xs text-muted-foreground">Mon/Wed/Fri • 7-9 PM IST</div>
          </div>
        </div>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-[15%] left-[8%] hidden lg:flex w-14 h-14 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl items-center justify-center text-blue-500 shadow-lg border border-blue-500/20 animate-float z-10 backdrop-blur-sm">
        <Code size={28} />
      </div>
      <div className="absolute top-[20%] right-[8%] hidden lg:flex w-12 h-12 bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl items-center justify-center text-orange-500 shadow-lg border border-orange-500/20 animate-float-up-down z-10 backdrop-blur-sm">
        <Zap size={24} />
      </div>
      <div className="absolute bottom-[25%] right-[5%] hidden lg:flex w-14 h-14 bg-gradient-to-br from-pink-500/10 to-pink-600/20 rounded-2xl items-center justify-center text-pink-500 shadow-lg border border-pink-500/20 animate-float z-10 backdrop-blur-sm">
        <Brain size={28} />
      </div>
      <div className="absolute bottom-[30%] left-[3%] hidden lg:flex w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/20 rounded-xl items-center justify-center text-cyan-500 shadow-lg border border-cyan-500/20 animate-bounce-subtle z-10 backdrop-blur-sm">
        <Bot size={24} />
      </div>
    </section>
  )
}
