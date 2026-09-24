import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled,
    className = "",
    type = "button",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const sizeStyles = {
        sm: "h-9 px-3.5 text-xs rounded-lg",
        md: "h-11 px-5 text-sm rounded-xl",
        lg: "h-12 px-6 text-base rounded-xl",
    };

    const variantStyles = {
        primary: "bg-black hover:bg-neutral-800 active:bg-neutral-900 text-white shadow-xs",
        secondary: "bg-white hover:bg-neutral-50 active:bg-neutral-100 border border-neutral-300 text-black shadow-xs",
        ghost: "text-neutral-600 hover:text-black hover:bg-neutral-100",
    };

    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
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
