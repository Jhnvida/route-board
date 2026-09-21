import { CourseCard } from "../components/CourseCard";
import { UPCOMING_COURSES } from "../data/courses";

export function Dashboard() {
    return (
        <div className="w-full bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 lg:p-10 shadow-xs transition-all">
            <section aria-labelledby="upcoming-courses-heading">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
                    <h1
                        id="upcoming-courses-heading"
                        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900"
                    >
                        Próximos Cursos
                    </h1>

                    <span className="text-sm font-medium text-neutral-500">Dezembro de 2026</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {UPCOMING_COURSES.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </section>
        </div>
    );
}
