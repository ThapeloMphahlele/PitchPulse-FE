import { ChevronDown } from "lucide-react";
import { TeamOption } from "@/types/simulator";

interface TeamSelectorProps {
    label: string;
    selectedTeam: TeamOption;
    align?: "left" | "right";
}

export function TeamSelector({ label, selectedTeam, align = "left" }: TeamSelectorProps) {
    return (
        <div className="flex flex-col w-full gap-2">
            <span className={`text-xs font-bold text-gray-500 uppercase tracking-widest ${align === "right" ? "text-right" : "text-left"}`}>
                {label}
            </span>
            <button
                type="button"
                className="w-full flex items-center justify-between bg-slate-surface border border-muted-slate/30 hover:border-metric-win/50 hover:bg-slate-surface/80 transition-all rounded-xl p-4 group"
            >
                <div className={`flex items-center gap-3 ${align === "right" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="w-10 h-10 bg-obsidian rounded-full border border-muted-slate/30 flex items-center justify-center text-xs text-gray-500 font-bold group-hover:border-metric-win/50 transition-colors">
                        {selectedTeam.shortName.charAt(0)}
                    </div>
                    <div className={`flex flex-col ${align === "right" ? "text-right" : "text-left"}`}>
                        <span className="text-lg font-bold text-white">{selectedTeam.name}</span>
                        <span className="text-xs text-gray-400 font-data">Elo: {selectedTeam.elo.toFixed(1)}</span>
                    </div>
                </div>
                <ChevronDown size={20} className="text-gray-500 group-hover:text-white transition-colors" />
            </button>
        </div>
    );
}