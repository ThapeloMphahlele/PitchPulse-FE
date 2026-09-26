"use client";

import Link from "next/link";
import { AuthInput } from "@/components/ui/AuthInput";
import { OAuthBadges } from "./OAuthBadges";

export function LoginForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle auth logic
    };

    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Welcome back</h2>
                <p className="text-sm text-gray-400 mt-1">Sign in to your PitchPulse account.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <AuthInput label="Email address" id="email" type="email" placeholder="manager@club.com" required />

                <div className="space-y-1.5">
                    <AuthInput label="Password" id="password" type="password" placeholder="••••••••" required />
                    <div className="flex justify-end">
                        <Link href="/forgot-password" className="text-xs text-metric-win hover:text-metric-win/80 font-medium">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <button type="submit" className="w-full py-2.5 px-4 bg-metric-win hover:bg-metric-win/90 text-obsidian font-bold rounded-lg transition-colors mt-2">
                    Sign In
                </button>
            </form>

            <OAuthBadges />

            <p className="text-center text-sm text-gray-400 mt-8">
                Don&apos;t have an account? <Link href="/signup" className="text-metric-win hover:underline font-medium">Create one</Link>
            </p>
        </div>
    );
}