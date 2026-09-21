import { createContext } from "react";

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const STORAGE_KEY = "@RouteBoard:auth";
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
