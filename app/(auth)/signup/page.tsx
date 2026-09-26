import { SignUpForm } from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up | PitchPulse",
};

export default function SignUpPage() {
    return <SignUpForm />;
}