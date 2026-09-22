import { useState, type ReactNode } from "react";
import { AuthContext, STORAGE_KEY, type User } from "./AuthContext";

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState<User | null>(() => {
        try {
            const storedSession = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);

            if (storedSession) {
                return JSON.parse(storedSession) as User;
            }
        } catch (error) {
            console.error("Falha ao recuperar sessão persistida:", error);
            localStorage.removeItem(STORAGE_KEY);
            sessionStorage.removeItem(STORAGE_KEY);
        }

        return null;
    });

    const login = async (email: string, _password: string, rememberMe = true) => {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockUser: User = {
            id: "user-1",
            name: "John Doe",
            email: email.trim(),
            avatar: "https://placehold.co/32?text=JD",
        };

        setUser(mockUser);
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
        setLoading(false);
    };

    const logout = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 200));

        setUser(null);
        localStorage.removeItem(STORAGE_KEY);
        sessionStorage.removeItem(STORAGE_KEY);
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
