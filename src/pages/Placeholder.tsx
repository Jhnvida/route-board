import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router";

interface PlaceholderProps {
    title: string;
    description: string;
}

export function Placeholder({ title, description }: PlaceholderProps) {
    return (
        <div className="w-full bg-white rounded-2xl border border-neutral-200 p-8 sm:p-12 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600">
                <Construction className="w-6 h-6" aria-hidden="true" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">{description}</p>

            <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Voltar ao Painel</span>
            </Link>
        </div>
    );
}
