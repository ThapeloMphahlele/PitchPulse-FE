import { SimulatorView } from "@/components/simulator/SimulatorView";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Match Simulator | PitchPulse Match Simulator",
};

export default function SimulatorPage() {
    return (
        <div className="w-full max-w-[1600px] mx-auto">
            <SimulatorView />
        </div>
    );
}