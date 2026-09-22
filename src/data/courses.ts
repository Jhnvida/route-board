import { CodeXml, Image, MessageSquareText, Tv } from "lucide-react";
import type { Course, CourseIconName, CourseTheme, TimetableGroup } from "../types";

export const COURSE_ICONS: Record<CourseIconName, typeof Tv> = {
    tv: Tv,
    image: Image,
    code: CodeXml,
    message: MessageSquareText,
};

export const DEFAULT_COURSE_THEME: CourseTheme = {
    bg: "#ECE6FD",
    shadow: "#D8CEF7",
    divider: "#D8CEF7",
    iconColor: "#3B1E82",
};

export const COURSES: Course[] = [
    {
        id: "machine-learning",
        title: "Machine Learning",
        period: "4 de Dezembro - 8 de Fevereiro",
        price: 1200,
        icon: "tv",
        instructor: "Paul Gorbachev",
        format: "Google Meet",
        theme: {
            bg: "#ECE6FD",
            shadow: "#D8CEF7",
            divider: "#D8CEF7",
            iconColor: "#3B1E82",
        },
        progress: {
            completedHours: 100,
            totalHours: 230,
            percentage: 45,
        },
    },
    {
        id: "web-design",
        title: "Web Design",
        period: "4 de Dezembro - 8 de Fevereiro",
        price: 1600,
        icon: "image",
        instructor: "Alex Rivera",
        format: "Google Meet",
        theme: {
            bg: "#FDE7B2",
            shadow: "#F7CE7C",
            divider: "#F7CE7C",
            iconColor: "#824E05",
        },
        progress: {
            completedHours: 150,
            totalHours: 230,
            percentage: 65,
        },
    },
    {
        id: "html-markup",
        title: "Hypertext Markup Language",
        period: "4 de Dezembro - 8 de Fevereiro",
        price: 800,
        icon: "code",
        instructor: "Paul Gorbachev",
        format: "Google Meet",
        theme: {
            bg: "#C9E6F9",
            shadow: "#99D0F1",
            divider: "#99D0F1",
            iconColor: "#135682",
        },
        progress: {
            completedHours: 200,
            totalHours: 230,
            percentage: 86,
        },
    },
    {
        id: "project-manager",
        title: "Project Manager",
        period: "4 de Dezembro - 8 de Fevereiro",
        price: 1200,
        icon: "message",
        instructor: "Sarah Jenkins",
        format: "Google Meet",
        theme: {
            bg: "#D1EBCF",
            shadow: "#A6DAA0",
            divider: "#A6DAA0",
            iconColor: "#225F20",
        },
    },
];

export const TIMETABLE_GROUPS: TimetableGroup[] = [
    {
        date: "20/12",
        items: [
            {
                id: "tt-1",
                courseId: "machine-learning",
                time: "12:40",
                subject: "Machine Learning",
                instructor: "Paul Gorbachev",
                platform: "Google Meet",
                lessonNumber: 4,
                duration: "50 min",
                date: "2026-12-20",
            },
            {
                id: "tt-2",
                courseId: "project-manager",
                time: "14:30",
                subject: "Project Manager",
                instructor: "Sarah Jenkins",
                platform: "Google Meet",
                lessonNumber: 7,
                duration: "90 min",
                date: "2026-12-20",
            },
        ],
    },
    {
        date: "21/12",
        items: [
            {
                id: "tt-3",
                courseId: "web-design",
                time: "10:00",
                subject: "Web Design",
                instructor: "Alex Rivera",
                platform: "Google Meet",
                lessonNumber: 2,
                duration: "45 min",
                date: "2026-12-21",
            },
        ],
    },
];
