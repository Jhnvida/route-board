import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    rightElement?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, rightElement, id, className = "", ...props }, ref) => {
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
                        className={`w-full h-11 ${
                            rightElement ? "pl-3.5 pr-11" : "px-3.5"
                        } bg-white border border-neutral-300 rounded-lg text-sm text-black placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-black focus:ring-1 focus:ring-black disabled:opacity-50 ${className}`}
                        {...props}
                    />
                    {rightElement && (
                        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center">
                            {rightElement}
                        </div>
                    )}
                </div>

                {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
            </div>
        );
    },
);

Input.displayName = "Input";
