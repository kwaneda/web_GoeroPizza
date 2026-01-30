import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-point-red text-white hover:bg-red-700 focus:ring-red-500": variant === "primary",
                        "bg-main-green text-white hover:bg-green-800 focus:ring-green-500": variant === "secondary",
                        "border-2 border-main-green text-main-green hover:bg-green-50 focus:ring-green-500": variant === "outline",
                        "text-main-green hover:bg-green-50/50": variant === "ghost",
                        "h-10 px-4 text-sm": size === "sm",
                        "h-12 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
