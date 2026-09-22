import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";
import { Input, type InputProps } from "./Input";

export interface PasswordInputProps extends Omit<InputProps, "type" | "rightElement"> {}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ disabled, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <Input
                ref={ref}
                type={showPassword ? "text" : "password"}
                disabled={disabled}
                rightElement={
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        disabled={disabled}
                        aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
                        aria-pressed={showPassword}
                        className="p-1.5 text-neutral-400 hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-black rounded transition-colors cursor-pointer disabled:opacity-50"
                    >
                        {showPassword ? (
                            <EyeOff className="w-4 h-4" aria-hidden="true" />
                        ) : (
                            <Eye className="w-4 h-4" aria-hidden="true" />
                        )}
                    </button>
                }
                {...props}
            />
        );
    },
);

PasswordInput.displayName = "PasswordInput";
