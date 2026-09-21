import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export function Login() {
    const { isAuthenticated, login, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/dashboard";

    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, from]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setSubmitting(true);
            const userEmail = email.trim() || "john.doe@routeboard.dev";
            await login(userEmail, password);
            navigate(from, { replace: true });
        } catch {
            setSubmitting(false);
        }
    };

    const isLoading = submitting || authLoading;

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-[#F8F9FA] px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-[440px] bg-white rounded-2xl border border-neutral-200/80 shadow-xl shadow-neutral-200/40 p-8 sm:p-10 flex flex-col gap-8 transition-all">
                <div className="pb-5 border-b border-neutral-100">
                    <span className="font-extrabold text-xl tracking-tight text-neutral-900">Route Board</span>
                </div>

                <div className="flex flex-col">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Entrar</h1>
                        <p className="text-sm text-neutral-500 mt-2">Olá, que bom ter você de volta.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-2">
                                E-mail
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                inputMode="email"
                                autoComplete="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ex.: joao@email.com"
                                disabled={isLoading}
                                className="w-full h-11 px-4 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 disabled:opacity-60"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-xs font-semibold text-neutral-700 mb-2">
                                Senha
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Digite sua senha"
                                    disabled={isLoading}
                                    className="w-full h-11 pl-4 pr-11 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100 disabled:opacity-60"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    disabled={isLoading}
                                    aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
                                    aria-pressed={showPassword}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-neutral-400 hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg transition-colors cursor-pointer"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" aria-hidden="true" />
                                    ) : (
                                        <Eye className="w-4 h-4" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-1">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    disabled={isLoading}
                                    className="w-4 h-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer accent-indigo-600"
                                />
                                <span className="text-xs text-neutral-600 font-medium">Lembrar de mim</span>
                            </label>

                            <button
                                type="button"
                                onClick={() => alert("Recuperação de senha preparada para implementação futura.")}
                                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded cursor-pointer"
                            >
                                Esqueci minha senha
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-11 mt-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm rounded-xl shadow-xs transition-colors focus:outline-none focus-visible:ring-3 focus-visible:ring-indigo-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                                    <span>Entrando...</span>
                                </>
                            ) : (
                                <span>Entrar</span>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-5 border-t border-neutral-100 text-center text-xs">
                        <span className="text-neutral-500">Ainda não tem uma conta? </span>

                        <button
                            type="button"
                            onClick={() => alert("Fluxo de cadastro preparado para implementação futura.")}
                            className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded cursor-pointer ml-1"
                        >
                            Criar uma conta
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
