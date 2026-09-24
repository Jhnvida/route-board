import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router";
import { DEFAULT_COURSE_THEME } from "../data/courses";
import type { Course } from "../types";
import { formatHoursProgress, formatPercentage } from "../utils";

interface CourseProgressListProps {
    courses: Course[];
}

export function CourseProgressList({ courses }: CourseProgressListProps) {
    const activeProgressCourses = courses.filter((course) => course.progress);

    return (
        <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight">Progresso</h2>
                <button
                    type="button"
                    className="border border-neutral-200 rounded-lg p-2 text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
                    aria-label="Opções de visualização de progresso"
                    title="Visualização"
                >
                    <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                </button>
            </div>

            <div className="space-y-4">
                {activeProgressCourses.map((course) => {
                    const progress = course.progress!;
                    const barColor = course.theme?.shadow ?? DEFAULT_COURSE_THEME.shadow;

                    return (
                        <div
                            key={course.id}
                            className="border border-neutral-200 rounded-xl p-4 flex items-center justify-between hover:border-neutral-400 transition-colors gap-4"
                        >
                            <div className="flex-1 pr-2 min-w-0">
                                <div className="flex items-center justify-between mb-2 gap-2">
                                    <h3 className="text-xs font-bold text-neutral-900 truncate">{course.title}</h3>
                                    <span className="text-xs font-semibold text-neutral-400 shrink-0">
                                        {formatHoursProgress(progress.completedHours, progress.totalHours)}
                                    </span>
                                </div>

                                <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-300"
                                        style={{
                                            width: formatPercentage(progress.percentage),
                                            backgroundColor: barColor,
                                        }}
                                    />
                                </div>
                            </div>

                            <Link
                                to={`/courses/${course.id}`}
                                className="w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-colors shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
                                aria-label={`Ver curso ${course.title}`}
                            >
                                <ChevronRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
