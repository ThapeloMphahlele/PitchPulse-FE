import { InputHTMLAttributes, forwardRef } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
    ({ label, id, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1.5">
                <label htmlFor={id} className="text-sm font-medium text-gray-300">
                    {label}
                </label>
                <input
                    id={id}
                    ref={ref}
                    className="w-full px-4 py-2.5 bg-slate-surface border border-muted-slate/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-metric-win focus:border-metric-win transition-all font-sans"
                    {...props}
                />
            </div>
        );
    }
);
AuthInput.displayName = "AuthInput";