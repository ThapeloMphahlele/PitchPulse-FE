"use client";

import { AuthInput } from "@/components/ui/AuthInput";

export function ResetPasswordForm() {
    const handleSubmit = (e: React.FormEvent) => e.preventDefault();

    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Set new password</h2>
                <p className="text-sm text-gray-400 mt-1">Your new password must be different from previous used passwords.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <AuthInput label="New Password" id="new-password" type="password" placeholder="••••••••" required />
                <AuthInput label="Confirm Password" id="confirm-password" type="password" placeholder="••••••••" required />

                <button type="submit" className="w-full py-2.5 px-4 bg-metric-win hover:bg-metric-win/90 text-obsidian font-bold rounded-lg transition-colors mt-2">
                    Reset Password
                </button>
            </form>
        </div>
    );
}