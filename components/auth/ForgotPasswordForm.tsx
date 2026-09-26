"use client";

import Link from "next/link";
import { AuthInput } from "@/components/ui/AuthInput";

export function ForgotPasswordForm() {
    const handleSubmit = (e: React.FormEvent) => e.preventDefault();

    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Reset password</h2>
                <p className="text-sm text-gray-400 mt-1">Enter your email and we&apos;ll send you a reset link.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <AuthInput label="Email address" id="email" type="email" placeholder="manager@club.com" required />
                <button type="submit" className="w-full py-2.5 px-4 bg-metric-win hover:bg-metric-win/90 text-obsidian font-bold rounded-lg transition-colors">
                    Send Reset Link
                </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-8">
                Remember your password? <Link href="/login" className="text-metric-win hover:underline font-medium">Back to sign in</Link>
            </p>
        </div>
    );
}