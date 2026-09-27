import { LiveIndicator } from "@/components/ui/LiveIndicator";
import { MobileMenuToggle } from "./MobileMenuToggle";

export function Header() {
    return (
        <header className="h-16 shrink-0 border-b border-muted-slate/20 bg-obsidian/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <MobileMenuToggle />
                <h1 className="text-xl font-bold tracking-tight text-white">
                    Pitch<span className="text-metric-win">Pulse</span>
                </h1>
            </div>
            <LiveIndicator />
        </header>
    );
}