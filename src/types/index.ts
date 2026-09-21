export interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
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

export interface Course {
    id: string;
    title: string;
    period: string;
    price: number | string;
    icon?: string;
    duration?: string;
    instructor?: string;
    workload?: string;
    format?: string;
    description?: string;
    category?: string;
    progress?: number;
    theme?: CourseTheme;
}

export interface CourseProgress {
    courseId: string;
    completedHours: number;
    totalHours: number;
    percentage: number;
}

export interface TimetableItem {
    id: string;
    time: string;
    subject: string;
    instructor: string;
    platform: string;
    lessonNumber: number;
    duration: string;
    date: string;
}
