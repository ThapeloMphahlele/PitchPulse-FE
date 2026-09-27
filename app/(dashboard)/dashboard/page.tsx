import { DashboardView } from "@/components/dashboard/DashboardView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | PitchPulse Analytics",
};

export default function DashboardPage() {
    return (
        <div className="w-full max-w-[1600px] mx-auto">
            <DashboardView />
        </div>
    );
}