import { Bell, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

export interface HeaderProps {
    loggedIn?: boolean;
    className?: string;
    showBorder?: boolean;
}

export function Header({ loggedIn, className = "", showBorder = true }: HeaderProps) {
    const { user, isAuthenticated, logout } = useAuth();
    const isUserLoggedIn = loggedIn !== undefined ? loggedIn : isAuthenticated;

    const navItems = [
        { label: "Painel", to: "/dashboard" },
        { label: "Descobrir", to: "/courses" },
        { label: "Calendário", to: "/calendar" },
        { label: "Comunidade", to: "/community" },
    ];

    return (
        <header
            className={`w-full bg-white transition-all ${showBorder ? "border-b border-neutral-100" : ""} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link
                        to={isUserLoggedIn ? "/dashboard" : "/login"}
                        className="font-extrabold text-xl tracking-tight text-neutral-900 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
                        aria-label="Route Board - Início"
                    >
                        Route Board
                    </Link>

                    {isUserLoggedIn && (
                        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `px-3.5 py-1.5 rounded-full text-sm transition-colors ${
                                            isActive
                                                ? "font-semibold text-neutral-900 bg-neutral-100"
                                                : "font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    )}
                </div>

                {isUserLoggedIn && (
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                            aria-label="Notificações"
                            title="Notificações"
                        >
                            <Bell className="w-5 h-5" aria-hidden="true" />
                        </button>

                        <div className="h-6 w-px bg-neutral-200" aria-hidden="true" />

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200 ring-2 ring-neutral-100 shrink-0">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center font-semibold text-xs text-neutral-700 bg-neutral-300">
                                        {user?.name
                                            ? user.name
                                                  .split(" ")
                                                  .map((n) => n[0])
                                                  .join("")
                                                  .toUpperCase()
                                                  .slice(0, 2)
                                            : "U"}
                                    </div>
                                )}
                            </div>

                            <span className="hidden sm:inline font-semibold text-sm text-neutral-800">
                                {user?.name || "Usuário"}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => logout()}
                            className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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
