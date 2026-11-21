import { TeamFixturesView } from "@/components/fixtures/TeamFixturesView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Fixtures | PitchPulse Team Fixtures",
};

export default function TeamFixturesPage() {
    return (
        <div className="w-full max-w-[1600px] mx-auto">
            <TeamFixturesView />
        </div>
    );
}