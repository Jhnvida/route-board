import { Bell, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { UserAvatar } from "./ui";

export interface HeaderProps {
    className?: string;
    showBorder?: boolean;
}

const NAV_ITEMS = [
    { label: "Painel", to: "/dashboard" },
    { label: "Descobrir", to: "/courses" },
    { label: "Calendário", to: "/calendar" },
    { label: "Comunidade", to: "/community" },
];

export function Header({ className = "", showBorder = true }: HeaderProps) {
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <header className={`w-full sticky top-4 z-50 px-4 sm:px-6 lg:px-8 pt-4 flex justify-center ${className}`}>
            <div
                className={`w-full max-w-300 h-16 bg-white rounded-xl px-4 sm:px-6 flex items-center justify-between transition-all ${
                    showBorder ? "border border-neutral-200" : ""
                }`}
            >
                <div className="flex items-center gap-10">
                    <Link
                        to={isAuthenticated ? "/dashboard" : "/login"}
                        className="font-bold text-lg tracking-tight text-black hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-black rounded p-1"
                        aria-label="Route Board - Início"
                    >
                        Route Board
                    </Link>

                    {isAuthenticated && (
                        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
                            {NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `px-3 py-1.5 rounded-md text-sm transition-colors ${
                                            isActive
                                                ? "font-semibold text-black bg-neutral-100"
                                                : "font-medium text-neutral-600 hover:text-black hover:bg-neutral-50"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    )}
                </div>

                {isAuthenticated && (
                    <div className="flex items-center gap-3 sm:gap-4">
                        <button
                            type="button"
                            className="p-2.5 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer"
                            aria-label="Notificações"
                            title="Notificações"
                        >
                            <Bell className="w-4 h-4" aria-hidden="true" />
                        </button>

                        <div className="h-5 w-px bg-neutral-200" aria-hidden="true" />

                        <div className="flex items-center gap-3">
                            <UserAvatar name={user?.name} size="sm" />

                            <span className="hidden sm:inline font-medium text-sm text-neutral-900">
                                {user?.name || "Usuário"}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => logout()}
                            className="p-2.5 text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer"
                            aria-label="Sair da conta"
                            title="Sair"
                        >
                            <LogOut className="w-4 h-4" aria-hidden="true" />
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
