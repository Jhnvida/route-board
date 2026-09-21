import { CodeXml, Image, MessageSquareText, Tv } from "lucide-react";
import type { Course } from "../types";

const icons = {
    tv: Tv,
    image: Image,
    code: CodeXml,
    message: MessageSquareText,
};

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    const Icon = course.icon ? icons[course.icon as keyof typeof icons] : null;

    const theme = course.theme ?? {
        bg: "#ECE6FD",
        shadow: "#D6C8F9",
        divider: "#D6C8F9",
        iconColor: "#3B1E82",
    };

    return (
        <div className="relative group flex flex-col">
            <div
                className="absolute inset-0 translate-x-0.5 translate-y-1.5 rounded-2xl transition-transform duration-200"
                style={{ backgroundColor: theme.shadow }}
                aria-hidden="true"
            />

            <article
                className="relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between flex-1 transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{ backgroundColor: theme.bg }}
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
                            {course.price}
                        </span>
                    </div>
                </div>
            </article>
        </div>
    );
}
