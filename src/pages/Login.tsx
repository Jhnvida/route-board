import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { Header } from "../components/Header";
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
        <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
            <Header loggedIn={false} />

            <main className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-300 min-h-150 bg-white rounded-2xl border border-neutral-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-xs transition-all">
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                        <div className="w-full max-w-95 mx-auto">
                            <div className="mb-7">
                                <h1 className="text-3xl font-bold tracking-tight text-black">Entrar</h1>
                                <p className="text-sm text-neutral-500 mt-2">Olá, que bom ter você de volta.</p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-semibold text-neutral-800 mb-2"
                                    >
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
                                        className="w-full h-11 px-3.5 bg-white border border-neutral-300 rounded-lg text-sm text-black placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-black focus:ring-1 focus:ring-black disabled:opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-xs font-semibold text-neutral-800 mb-2"
                                    >
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
                                            className="w-full h-11 pl-3.5 pr-11 bg-white border border-neutral-300 rounded-lg text-sm text-black placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-black focus:ring-1 focus:ring-black disabled:opacity-50"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            disabled={isLoading}
                                            aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
                                            aria-pressed={showPassword}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-neutral-400 hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-black rounded transition-colors cursor-pointer"
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
                                            className="w-4 h-4 rounded border-neutral-300 text-black focus:ring-black focus:ring-offset-0 cursor-pointer accent-black"
                                        />
                                        <span className="text-xs text-neutral-600 font-medium">Lembrar de mim</span>
                                    </label>

                                    <button
                                        type="button"
                                        className="text-xs font-medium text-neutral-600 hover:text-black hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-black rounded cursor-pointer transition-colors"
                                    >
                                        Esqueci minha senha
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-11 mt-3 bg-black hover:bg-neutral-800 active:bg-neutral-900 text-white font-medium text-sm rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
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

                            <div className="mt-8 pt-6 border-t border-neutral-100 text-center text-xs text-neutral-500">
                                <span>Ainda não tem uma conta? </span>
                                <button
                                    type="button"
                                    className="font-semibold text-black hover:underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-black rounded cursor-pointer ml-1"
                                >
                                    Criar uma conta
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col justify-center p-12 lg:p-16 bg-black text-white relative">
                        <div className="space-y-4 max-w-md">
                            <p className="text-3xl font-bold tracking-tight text-white leading-snug">
                                Domine novas habilidades com foco, ritmo e clareza.
                            </p>
                            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                                Uma experiência desenhada para quem valoriza simplicidade, eficiência e aprendizado
                                contínuo.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
