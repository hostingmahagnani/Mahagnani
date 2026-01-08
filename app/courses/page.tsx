import { getAllCourses } from "@/lib/courses"
import { CourseCard } from "@/components/course-card"

export default function CoursesPage() {
  const courses = getAllCourses()

  return (
    <div className="flex flex-col w-full">
      <section className="bg-gradient-to-br from-primary/10 via-background to-purple-500/10 py-16 md:py-24 text-foreground border-b border-border relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl rounded-full animate-pulse-slower"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
                Live Online Courses
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Join live interactive classes with expert instructors. Learn Python, AI, Cybersecurity, and Web Development in small batches of 25 students. Next batch starts in 10 days!
            </p>
          </div>
        </div>
      </section>

      {/* Course List Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {courses.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-muted-foreground">No courses found</h3>
              <p className="text-muted-foreground mt-2">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
