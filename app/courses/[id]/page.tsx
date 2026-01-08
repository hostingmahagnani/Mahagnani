import { getCourseById, getAllCourses } from "@/lib/courses"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Clock, BarChart, User, PlayCircle, Award, BookOpen, Star, Calendar, Users, Video, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  const courses = getAllCourses()
  return courses.map((course) => ({
    id: course.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = getCourseById(id)
  if (!course) return { title: "Course Not Found" }

  return {
    title: `${course.title} | Mahagnani`,
    description: course.shortDescription,
  }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = getCourseById(id)

  if (!course) {
    notFound()
  }

  return (
    <div className="flex flex-col w-full bg-background">
      <section className="bg-gradient-to-br from-primary/10 via-background to-purple-500/10 text-foreground py-12 md:py-20 border-b border-border relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl rounded-full animate-pulse-slower"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in-up" aria-label="Breadcrumb">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Home"
            >
              <Home size={16} />
              <span>Home</span>
            </Link>
            <ChevronRight size={16} className="text-muted-foreground" />
            <Link 
              href="/courses" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <ChevronRight size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium" aria-current="page">{course.title}</span>
          </nav>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-none px-3 py-1 font-bold transition-all duration-300 hover:scale-105 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  LIVE CLASSES
                </Badge>
                <Badge className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white border-none px-3 py-1 font-bold transition-all duration-300 hover:scale-105">
                  {course.level}
                </Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-600/30 px-3 py-1 font-bold hover:bg-orange-600/10 transition-all duration-300 hover:scale-105">
                  Starts in 10 Days
                </Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
                  {course.title}
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {course.subtitle} Join live interactive classes with expert instructors and learn alongside a cohort of motivated peers.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>
                    Taught by <span className="text-primary underline cursor-pointer">{course.instructor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>Mon/Wed/Fri • 7-9 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>{course.duration} live sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  <span>Max 25 students</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in-up animation-delay-400">
              <div className="sticky top-24 bg-card/80 backdrop-blur-sm text-foreground rounded-xl shadow-2xl shadow-primary/20 overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-primary/30">
                <div className="p-6 space-y-6">
                  {/* Batch Info Alert */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-sm">
                      <Calendar size={16} />
                      <span>Next Batch Starting Soon!</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Batch starts in 10 days • Only 8 seats remaining</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">₹1,500</div>
                    <div className="text-sm text-muted-foreground">One-time payment • Lifetime recording access</div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 hover:scale-105">
                      Enroll Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-12 text-lg font-bold border-2 border-primary text-primary hover:bg-primary/10 bg-transparent transition-all duration-300 hover:scale-105"
                    >
                      Attend Free Demo
                    </Button>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <p className="text-sm font-bold">This batch includes:</p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-3">
                        <Video size={16} className="text-primary" />
                        <span>Live interactive classes (Mon/Wed/Fri)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <PlayCircle size={16} className="text-primary" />
                        <span>Lifetime access to recordings</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Users size={16} className="text-primary" />
                        <span>Small batch size (max 25 students)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <BookOpen size={16} className="text-primary" />
                        <span>Doubt clearing sessions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Award size={16} className="text-primary" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card/40 to-card/60 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden group">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <h2 className="text-2xl font-bold mb-6 relative z-10">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-4 relative z-10">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-foreground text-sm leading-relaxed group-hover/item:text-primary transition-colors duration-300">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="text-sm">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Live Class Schedule & Curriculum</h2>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                  <span>{course.modules.length} modules • {course.duration} of live instruction</span>
                  <span>Classes: Mon/Wed/Fri 7-9 PM IST • Recordings available within 24 hours</span>
                </div>

                <Accordion type="single" collapsible className="w-full border border-border rounded-xl overflow-hidden shadow-lg">
                  {course.modules.map((module, mIdx) => (
                    <AccordionItem
                      key={mIdx}
                      value={`module-${mIdx}`}
                      className="border-b border-border last:border-0 px-4 py-2 hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 transition-all duration-300"
                    >
                      <AccordionTrigger className="hover:no-underline font-bold text-left py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-primary">{module.title}</span>
                          <span className="text-xs font-normal text-muted-foreground ml-2">
                            {module.topics.length} live sessions
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2">
                        <ul className="space-y-3">
                          {module.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-center justify-between text-sm group cursor-pointer">
                              <div className="flex items-center gap-3">
                                <Video size={16} className="text-muted-foreground group-hover:text-primary" />
                                <span className="group-hover:text-primary transition-colors">{topic}</span>
                              </div>
                              <span className="text-muted-foreground text-xs">Live Session</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="space-y-6 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold">Instructor</h2>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary font-bold text-3xl shrink-0 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30">
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary underline cursor-pointer">{course.instructor}</h3>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Senior Tech Instructor & Industry Expert
                    </p>
                    <div className="flex gap-4 text-sm font-medium">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-primary text-primary" />
                        <span>4.8 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={14} className="text-primary" />
                        <span>1,245 Reviews</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.instructor} is a seasoned professional with over 15 years of experience in the technology
                      sector. They have led teams at Fortune 500 companies and are passionate about mentoring the next
                      generation of engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View Purchase Area */}
            <div className="lg:hidden space-y-6 pt-12 border-t border-border">
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-lg p-4 space-y-2 mb-4">
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-sm">
                  <Calendar size={16} />
                  <span>Batch starts in 10 days • Only 8 seats left</span>
                </div>
              </div>
              <div className="text-4xl font-extrabold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">₹1,500</div>
              <div className="space-y-3">
                <Button className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 hover:scale-105">Enroll Now</Button>
                <Button variant="outline" className="w-full h-14 text-lg font-bold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300">Attend Free Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
