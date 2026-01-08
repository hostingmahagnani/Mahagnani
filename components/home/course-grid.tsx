import { getAllCourses } from "@/lib/courses"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CourseGrid({ limit = 4 }) {
  const courses = getAllCourses().slice(0, limit)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent blur-[50px] rounded-full animate-pulse-slow" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-purple-500/5 to-transparent blur-[50px] rounded-full animate-pulse-slower" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm animate-fade-in-up">Our Courses</h2>
            <h3 className="text-3xl md:text-4xl font-bold animate-fade-in-up animation-delay-200 text-foreground">
              Master In-Demand Tech Skills
            </h3>
            <p className="text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-400">
              Choose from our curated selection of high-impact courses designed to get you industry-ready.
            </p>
          </div>
          <Button asChild variant="outline" className="border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
