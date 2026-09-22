import { CourseCard } from "../components/CourseCard";
import { CourseProgressList } from "../components/CourseProgressList";
import { TimetableList } from "../components/TimetableList";
import { COURSES, TIMETABLE_GROUPS } from "../data/courses";
import { formatMonthYear } from "../utils";

const DASHBOARD_DATE = new Date(2026, 11, 1);

export function Dashboard() {
    return (
        <div className="w-full bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 lg:p-10 shadow-xs transition-all">
            <section aria-labelledby="upcoming-courses-heading">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <h1
                        id="upcoming-courses-heading"
                        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900"
                    >
                        Próximos Cursos
                    </h1>

                    <span className="text-sm font-semibold text-neutral-900">{formatMonthYear(DASHBOARD_DATE)}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {COURSES.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </section>

            <section
                aria-label="Horários e Progresso dos Cursos"
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 pt-10 border-t border-neutral-100"
            >
                <TimetableList groups={TIMETABLE_GROUPS} courses={COURSES} />
                <CourseProgressList courses={COURSES} />
            </section>
        </div>
    );
}
