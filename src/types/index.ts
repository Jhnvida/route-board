export interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
    logout: () => Promise<void>;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface CourseTheme {
    bg: string;
    shadow: string;
    divider: string;
    iconColor: string;
}

export interface CourseProgress {
    completedHours: number;
    totalHours: number;
    percentage: number;
}

export type CourseIconName = "tv" | "image" | "code" | "message";

export interface Course {
    id: string;
    title: string;
    period: string;
    price: number;
    icon?: CourseIconName;
    duration?: string;
    instructor?: string;
    workload?: string;
    format?: string;
    description?: string;
    category?: string;
    progress?: CourseProgress;
    theme?: CourseTheme;
}

export interface TimetableItem {
    id: string;
    courseId: string;
    time: string;
    subject: string;
    instructor: string;
    platform: string;
    lessonNumber: number;
    duration: string;
    date: string;
}

export interface TimetableGroup {
    date: string;
    items: TimetableItem[];
}
