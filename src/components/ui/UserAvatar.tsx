import { useState } from "react";

export interface UserAvatarProps {
    name?: string;
    src?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function UserAvatar({ name, src, size = "sm", className = "" }: UserAvatarProps) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);

    const sizeClasses = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
    };

    const initials = name
        ? name
              .trim()
              .split(/\s+/)
              .map((n) => n[0])
              .filter(Boolean)
              .join("")
              .toUpperCase()
              .slice(0, 2)
        : "U";

    const showImage = Boolean(src) && failedSrc !== src;

    return (
        <div
            className={`rounded-full overflow-hidden bg-neutral-100 ring-1 ring-neutral-200 shrink-0 ${sizeClasses[size]} ${className}`}
        >
            {showImage ? (
                <img
                    src={src}
                    alt={name || "Avatar do usuário"}
                    onError={() => setFailedSrc(src || null)}
                    className="w-full h-full object-cover grayscale"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center font-medium text-neutral-700 bg-neutral-100">
                    {initials}
                </div>
            )}
        </div>
    );
}
