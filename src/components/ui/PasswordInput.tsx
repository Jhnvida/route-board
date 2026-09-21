import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useId, useState, type InputHTMLAttributes } from "react";

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    error?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ label, error, id, disabled, className = "", ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const generatedId = useId();
        const inputId = id || (label ? generatedId : undefined);

        return (
            <div className="w-full">
                {label && (
                    <label htmlFor={inputId} className="block text-xs font-semibold text-neutral-800 mb-2">
                        {label}
                    </label>
                )}

                <div className="relative">
                    <input
                        ref={ref}
                        id={inputId}
                        type={showPassword ? "text" : "password"}
                        disabled={disabled}
                        className={`w-full h-11 pl-3.5 pr-11 bg-white border border-neutral-300 rounded-lg text-sm text-black placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-black focus:ring-1 focus:ring-black disabled:opacity-50 ${className}`}
                        {...props}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        disabled={disabled}
                        aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
                        aria-pressed={showPassword}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-neutral-400 hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-black rounded transition-colors cursor-pointer disabled:opacity-50"
                    >
                        {showPassword ? (
                            <EyeOff className="w-4 h-4" aria-hidden="true" />
                        ) : (
                            <Eye className="w-4 h-4" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
            </div>
        );
    },
);

PasswordInput.displayName = "PasswordInput";
