import {
    ArrowLeft,
    BookOpen,
    Calendar,
    CheckCircle2,
    Clock,
    Globe,
    HelpCircle,
    MonitorPlay,
    UserCheck,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { Button, UserAvatar } from "../components/ui";
import { COURSE_ICONS, COURSES, DEFAULT_COURSE_THEME, TIMETABLE_GROUPS } from "../data/courses";
import { formatCurrency, formatHoursProgress, formatPercentage, getShadowColor } from "../utils";

export function ItemDetails() {
    const { id } = useParams<{ id: string }>();
    const course = COURSES.find((item) => item.id === id);

    if (!course) {
        return (
            <div className="w-full bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 text-center shadow-xs">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-500">
                    <HelpCircle className="w-7 h-7" aria-hidden="true" />
                </div>

                <h1 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-2">Item não encontrado</h1>

                <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">
                    Não encontramos nenhum curso cadastrado com o identificador{" "}
                    <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-xs font-mono font-medium">
                        {id || "vazio"}
                    </code>
                    . Verifique o link ou retorne à lista de cursos no painel.
                </p>

                <Link
                    to="/dashboard"
                    className="inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-semibold text-sm h-11 px-6 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black shadow-xs"
                >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Voltar ao Painel</span>
                </Link>
            </div>
        );
    }

    const theme = course.theme ?? DEFAULT_COURSE_THEME;
    const shadowColor = getShadowColor(theme.shadow, 0.7);
    const Icon = course.icon ? COURSE_ICONS[course.icon] : null;

    const courseLessons = TIMETABLE_GROUPS.flatMap((group) =>
        group.items.filter((item) => item.courseId === course.id),
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-xl h-10 px-4 bg-white border border-neutral-200 hover:bg-neutral-50 shadow-2xs"
                >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Voltar ao Painel</span>
                </Link>

                <div className="text-xs font-mono text-neutral-400">
                    ID: <span className="font-semibold text-neutral-600">{course.id}</span>
                </div>
            </div>

            <section
                className="rounded-2xl p-6 sm:p-8 lg:p-10 transition-all border border-neutral-200/60"
                style={{
                    backgroundColor: theme.bg,
                    boxShadow: `6px 6px 0px 0px ${shadowColor}`,
                }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                            {course.category && (
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 text-neutral-800 backdrop-blur-xs">
                                    {course.category}
                                </span>
                            )}
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/50 text-neutral-700">
                                {course.format ?? "Online"}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            {Icon && (
                                <div className="p-2.5 bg-white/70 rounded-xl backdrop-blur-xs shadow-xs">
                                    <Icon className={`w-7 h-7 ${theme.iconColor}`} aria-hidden="true" />
                                </div>
                            )}

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                                {course.title}
                            </h1>
                        </div>

                        <p className="text-sm sm:text-base text-neutral-700 max-w-2xl font-normal leading-relaxed">
                            {course.period}
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-xs rounded-xl p-5 border border-white/60 min-w-48 text-right self-start md:self-center">
                        <span className="text-xs text-neutral-500 font-medium block mb-1">Investimento</span>
                        <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                            {formatCurrency(course.price)}
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-6">
                    <section
                        aria-labelledby="about-course-heading"
                        className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs"
                    >
                        <h2
                            id="about-course-heading"
                            className="text-xl font-extrabold text-neutral-900 tracking-tight mb-4 flex items-center gap-2"
                        >
                            <BookOpen className="w-5 h-5 text-neutral-700" aria-hidden="true" />
                            <span>Sobre o Curso</span>
                        </h2>

                        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                            {course.description ||
                                "Este curso foi desenvolvido com foco em aplicação prática e metodologias modernas, capacitando você para os desafios do mercado."}
                        </p>
                    </section>

                    <section
                        aria-labelledby="instructor-heading"
                        className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs"
                    >
                        <h2
                            id="instructor-heading"
                            className="text-xl font-extrabold text-neutral-900 tracking-tight mb-5 flex items-center gap-2"
                        >
                            <UserCheck className="w-5 h-5 text-neutral-700" aria-hidden="true" />
                            <span>Instrutor Responsável</span>
                        </h2>

                        <div className="flex items-center gap-4">
                            <UserAvatar name={course.instructor} size="lg" />
                            <div>
                                <h3 className="font-bold text-neutral-900 text-base">{course.instructor}</h3>
                                <p className="text-xs text-neutral-500 mt-0.5">
                                    Especialista técnico e facilitador de aulas ao vivo via {course.format}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section
                        aria-labelledby="lessons-heading"
                        className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs"
                    >
                        <h2
                            id="lessons-heading"
                            className="text-xl font-extrabold text-neutral-900 tracking-tight mb-4 flex items-center gap-2"
                        >
                            <Calendar className="w-5 h-5 text-neutral-700" aria-hidden="true" />
                            <span>Aulas Agendadas</span>
                        </h2>

                        {courseLessons.length > 0 ? (
                            <div className="divide-y divide-neutral-100">
                                {courseLessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className="py-3.5 flex flex-wrap items-center justify-between gap-3 text-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="w-16 text-neutral-400 font-medium text-xs">
                                                {lesson.time}
                                            </span>
                                            <div>
                                                <p className="font-bold text-neutral-900">
                                                    Lição {lesson.lessonNumber}: {lesson.subject}
                                                </p>
                                                <p className="text-xs text-neutral-500">{lesson.platform}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-xs text-neutral-500">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                                                {lesson.duration}
                                            </span>
                                            <span className="font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded">
                                                {lesson.date}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-6 rounded-xl bg-neutral-50 text-neutral-500 text-sm text-center">
                                Nenhuma aula síncrona agendada no momento para este módulo.
                            </div>
                        )}
                    </section>
                </div>

                <aside className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 shadow-xs space-y-6">
                        <h2 className="text-lg font-bold text-neutral-900 tracking-tight border-b border-neutral-100 pb-3">
                            Informações Gerais
                        </h2>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-500 flex items-center gap-2">
                                    <Clock className="w-4 h-4" aria-hidden="true" />
                                    Carga Horária
                                </span>
                                <span className="font-semibold text-neutral-900">{course.workload ?? "230 horas"}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-neutral-500 flex items-center gap-2">
                                    <Globe className="w-4 h-4" aria-hidden="true" />
                                    Formato
                                </span>
                                <span className="font-semibold text-neutral-900">{course.format}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-neutral-500 flex items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" aria-hidden="true" />
                                    Acesso
                                </span>
                                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                                    Vitalício
                                </span>
                            </div>
                        </div>

                        {course.progress && (
                            <div className="pt-4 border-t border-neutral-100 space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="font-semibold text-neutral-700">Seu Progresso</span>
                                    <span className="text-neutral-500 font-mono">
                                        {formatHoursProgress(
                                            course.progress.completedHours,
                                            course.progress.totalHours,
                                        )}{" "}
                                        ({formatPercentage(course.progress.percentage)})
                                    </span>
                                </div>

                                <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-300"
                                        style={{
                                            width: formatPercentage(course.progress.percentage),
                                            backgroundColor: theme.shadow,
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="pt-2">
                            <Button type="button" className="w-full justify-center">
                                Continuar Aprendizado
                            </Button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
