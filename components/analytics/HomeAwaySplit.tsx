import { TeamStats } from "@/types/analytics";
import { MapPin, Home } from "lucide-react";

export function HomeAwaySplit({ team }: { team: TeamStats }) {
    return (
        <div className="xl:col-span-1 bg-slate-surface border border-muted-slate/20 rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
            <h3 className="text-lg font-bold text-white mb-6">Win Probability Split</h3>

            <div className="space-y-6">
                {/* Home Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between items-end">
                        <div className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                            <Home size={16} className="text-metric-win" /> Home
                        </div>
                        <span className="font-data text-white font-bold">{team.homeWinPct}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-obsidian rounded-full overflow-hidden border border-muted-slate/10">
                        <div
                            className="h-full bg-metric-win rounded-full transition-all duration-1000"
                            style={{ width: `${team.homeWinPct}%` }}
                        />
                    </div>
                </div>

                {/* Away Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between items-end">
                        <div className="flex items-center gap-1.5 text-gray-300 text-sm font-medium">
                            <MapPin size={16} className="text-gray-500" /> Away
                        </div>
                        <span className="font-data text-white font-bold">{team.awayWinPct}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-obsidian rounded-full overflow-hidden border border-muted-slate/10">
                        <div
                            className="h-full bg-gray-400 rounded-full transition-all duration-1000"
                            style={{ width: `${team.awayWinPct}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}