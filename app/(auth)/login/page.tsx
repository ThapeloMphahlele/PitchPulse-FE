import { LoginForm } from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In | PitchPulse",
};

export default function LoginPage() {
    return <LoginForm />;
}