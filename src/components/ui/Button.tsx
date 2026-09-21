import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    isLoading?: boolean;
}

export function Button({
    children,
    variant = "primary",
    isLoading = false,
    disabled,
    className = "",
    type = "button",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 font-medium text-sm rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary: "bg-black hover:bg-neutral-800 active:bg-neutral-900 text-white",
        secondary: "bg-white hover:bg-neutral-100 border border-neutral-300 text-black",
        ghost: "text-neutral-600 hover:text-black hover:bg-neutral-100",
    };

    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Carregando...</span>
                </>
            ) : (
                children
            )}
        </button>
    );
}
