import { TeamStats } from "@/types/analytics";
import { Shield, TrendingUp } from "lucide-react";

export function TeamHeroCard({ team }: { team: TeamStats }) {
    return (
        <div className="relative xl:col-span-2 bg-slate-surface border border-muted-slate/20 rounded-2xl p-6 md:p-8 overflow-hidden flex flex-col justify-between min-h-[220px]">
            {/* Corner Emerald Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-obsidian rounded-xl border border-muted-slate/30 flex items-center justify-center shadow-lg">
                        <Shield className="text-gray-400" size={32} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">{team.name}</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-400">Mgr: {team.manager}</span>
                            <span className="w-1 h-1 bg-muted-slate rounded-full" />
                            <span className="text-sm text-gray-400">Key Asset: {team.keyPlayer}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-8 flex items-end gap-3">
                <div className="flex flex-col">
                    <span className="text-xs text-metric-win uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                        <TrendingUp size={14} /> Current Elo Rating
                    </span>
                    <span className="text-5xl font-data font-bold text-white tracking-tighter">
                        {team.elo.toFixed(1)}
                    </span>
                </div>
            </div>
        </div>
    );
}