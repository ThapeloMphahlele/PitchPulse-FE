"use client";

import Link from "next/link";
import { AuthInput } from "@/components/ui/AuthInput";
import { OAuthBadges } from "./OAuthBadges";

export function SignUpForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Create your account</h2>
                <p className="text-sm text-gray-400 mt-1">Start simulating matches in seconds.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <AuthInput label="Full Name" id="name" type="text" placeholder="Pep Guardiola" required />
                <AuthInput label="Email address" id="email" type="email" placeholder="manager@club.com" required />
                <AuthInput label="Password" id="password" type="password" placeholder="••••••••" required />

                <button type="submit" className="w-full py-2.5 px-4 bg-metric-win hover:bg-metric-win/90 text-obsidian font-bold rounded-lg transition-colors mt-2">
                    Create Account
                </button>
            </form>

            <OAuthBadges />

            <p className="text-center text-sm text-gray-400 mt-8">
                Already have an account? <Link href="/login" className="text-metric-win hover:underline font-medium">Sign in</Link>
            </p>
        </div>
    );
}