import { HeroSection } from "./HeroSection";
import { InteractiveTeaser } from "./InteractiveTeaser";
import { BentoGrid } from "./BentoGrid";
import { Footer } from "./Footer";

export function LandingPage() {
    return (
        <main className="min-h-screen bg-obsidian text-gray-100 selection:bg-metric-win/30">
            <HeroSection />
            <InteractiveTeaser />
            <BentoGrid />
            <Footer />
        </main>
    );
}