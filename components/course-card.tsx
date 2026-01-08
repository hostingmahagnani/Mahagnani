import Link from "next/link"
import type { Course } from "@/lib/courses"
import { Clock, BarChart, ArrowRight, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAssetPath } from "@/lib/utils"

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-[0_25px_60px_rgba(37,99,235,0.25)] transition-all duration-500 group border-border bg-card hover:border-primary/50 hover:-translate-y-2 overflow-hidden relative">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-purple-500/0 to-blue-500/0 group-hover:from-primary/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none z-10"></div>
      
      <CardHeader className="p-0 overflow-hidden rounded-t-lg relative">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={getAssetPath(course.image || "/placeholder.svg")}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Live badge */}
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold shadow-lg border-0 group-hover:scale-110 transition-transform duration-300 flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            LIVE
          </Badge>
          
          {/* Level badge */}
          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg border-0 group-hover:scale-110 transition-transform duration-300">
            {course.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-1 space-y-3 relative z-20">
        <h3 className="font-bold text-xl line-clamp-2 leading-tight group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
          {course.shortDescription}
        </p>
        
        {/* Pricing and batch info */}
        <div className="flex items-center justify-between pt-2 pb-2 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">₹1,500</span>
            <span className="text-xs text-muted-foreground">per course</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
              <Calendar size={12} />
              <span>Starts in 10 days</span>
            </div>
            <span className="text-xs text-muted-foreground">Mon/Wed/Fri</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
            <Clock size={14} className="text-primary animate-pulse-subtle" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
            <Users size={14} className="text-primary" />
            <span>Max 25 seats</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 mt-auto border-t border-border group-hover:border-primary/30 bg-primary/5 group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-300 relative z-20">
        <Link
          href={`/courses/${course.id}`}
          className="w-full inline-flex items-center justify-center text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-600 group-hover:bg-clip-text font-bold text-sm hover:underline group"
        >
          Enroll Now <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </CardFooter>
    </Card>
  )
}
