import { Clock, FileText, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router";
import { COURSE_ICONS, DEFAULT_COURSE_THEME, TIMETABLE_GROUPS } from "../data/courses";
import type { Course, TimetableGroup } from "../types";

interface TimetableListProps {
    groups?: TimetableGroup[];
    courses: Course[];
}

export function TimetableList({ groups = TIMETABLE_GROUPS, courses }: TimetableListProps) {
    const courseMap = new Map(courses.map((c) => [c.id, c]));

    return (
        <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight">Grade de Horários</h2>
                <button
                    type="button"
                    className="border border-neutral-200 rounded-lg p-2 text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
                    aria-label="Filtrar horários"
                    title="Filtrar horários"
                >
                    <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                </button>
            </div>

            <div className="space-y-6">
                {groups.map((group) => (
                    <div key={group.date}>
                        <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                            {group.date}
                        </h3>

                        <div className="space-y-3">
                            {group.items.map((item) => {
                                const course = courseMap.get(item.courseId);
                                const ItemIcon = course?.icon ? COURSE_ICONS[course.icon] : COURSE_ICONS.tv;
                                const badgeBg = course?.theme?.bg ?? DEFAULT_COURSE_THEME.bg;
                                const badgeIconColor = course?.theme?.iconColor ?? DEFAULT_COURSE_THEME.iconColor;

                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between py-2.5 border-b border-neutral-100 text-xs sm:text-sm gap-3"
                                    >
                                        <span className="text-neutral-400 font-medium text-xs w-14 shrink-0">
                                            {item.time}
                                        </span>

                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: badgeBg }}
                                            >
                                                <ItemIcon className={`w-4 h-4 ${badgeIconColor}`} aria-hidden="true" />
                                            </div>

                                            <div className="truncate">
                                                <Link
                                                    to={`/courses/${item.courseId}`}
                                                    className="font-bold text-neutral-900 truncate block hover:underline underline-offset-2"
                                                >
                                                    {item.subject}
                                                </Link>
                                                <p className="text-xs text-neutral-400 truncate">
                                                    Instrutor: {item.instructor} •{" "}
                                                    <span className="text-neutral-500">{item.platform}</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-neutral-400 text-xs shrink-0">
                                            <FileText className="w-4 h-4 hidden sm:block" aria-hidden="true" />
                                            <Clock className="w-4 h-4 hidden sm:block" aria-hidden="true" />
                                            <div className="text-right pl-1 sm:pl-2">
                                                <p className="font-bold text-neutral-900 text-xs">
                                                    Lição {item.lessonNumber}
                                                </p>
                                                <p className="text-neutral-400 text-[11px]">{item.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
