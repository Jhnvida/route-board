import { Link } from "react-router";
import { COURSE_ICONS, DEFAULT_COURSE_THEME } from "../data/courses";
import type { Course } from "../types";
import { formatCurrency } from "../utils";

interface CourseCardProps {
    course: Course;
}

function getShadowColor(color: string, alpha = 0.7): string {
    if (color.startsWith("#")) {
        const cleanHex = color.replace("#", "");
        if (cleanHex.length === 6) {
            const r = parseInt(cleanHex.substring(0, 2), 16);
            const g = parseInt(cleanHex.substring(2, 4), 16);
            const b = parseInt(cleanHex.substring(4, 6), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
    }
    return color;
}

export function CourseCard({ course }: CourseCardProps) {
    const Icon = course.icon ? COURSE_ICONS[course.icon] : null;
    const theme = course.theme ?? DEFAULT_COURSE_THEME;
    const shadowColor = getShadowColor(theme.shadow, 0.7);

    return (
        <Link
            to="/courses"
            className="group flex flex-col flex-1 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 no-underline text-inherit"
            aria-label={`Ver curso ${course.title}`}
        >
            <article
                className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between flex-1 transition-all duration-200 group-hover:-translate-y-0.5 cursor-pointer h-full"
                style={{
                    backgroundColor: theme.bg,
                    boxShadow: `6px 6px 0px 0px ${shadowColor}`,
                }}
            >
                <div>
                    {Icon && (
                        <div className="mb-5">
                            <Icon
                                className={`w-6 h-6 shrink-0 ${theme.iconColor}`}
                                strokeWidth={2.25}
                                aria-hidden="true"
                            />
                        </div>
                    )}

                    <h2 className="font-bold text-base sm:text-lg text-neutral-900 tracking-tight leading-snug mb-1">
                        {course.title}
                    </h2>

                    <p className="text-xs sm:text-[13px] text-neutral-600 font-normal">{course.period}</p>
                </div>

                <div className="mt-10">
                    <div
                        className="w-full h-px mb-4 opacity-70"
                        style={{ backgroundColor: theme.divider }}
                        aria-hidden="true"
                    />

                    <div className="flex items-baseline justify-between">
                        <span className="text-xs text-neutral-600 font-normal">Preço</span>
                        <span className="font-bold text-base sm:text-lg text-neutral-900 tracking-tight">
                            {formatCurrency(course.price)}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
