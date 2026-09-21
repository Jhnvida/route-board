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

export interface Course {
    id: string;
    title: string;
    duration: string;
    price: number | string;
    period: string;
    instructor: string;
    workload: string;
    format: string;
    description?: string;
    category?: string;
    progress?: number;
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
