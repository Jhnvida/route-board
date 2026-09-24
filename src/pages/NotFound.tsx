import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router";

export function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl border border-neutral-200 p-8 text-center shadow-xs">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600">
                    <Compass className="w-6 h-6" aria-hidden="true" />
                </div>

                <h2 className="text-lg font-bold text-neutral-800 mb-2">Página não encontrada</h2>
                <p className="text-sm text-neutral-500 mb-6">
                    A página que você está procurando não existe ou foi movida.
                </p>

                <Link
                    to="/dashboard"
                    className="inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-semibold text-sm h-11 px-5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black shadow-xs"
                >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Voltar ao Início</span>
                </Link>
            </div>
        </div>
    );
}
