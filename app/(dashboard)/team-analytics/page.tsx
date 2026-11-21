import { TeamAnalyticsView } from "@/components/analytics/TeamAnalyticsView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Analytics | PitchPulse Team Analytics",
};

export default function TeamAnalyticsPage() {
    return (
        <div className="w-full max-w-[1600px] mx-auto">
            <TeamAnalyticsView />
        </div>
    );
}