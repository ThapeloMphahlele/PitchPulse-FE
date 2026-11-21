import { Activity } from "lucide-react";

export function PerformanceChart() {
    return (
        <div className="xl:col-span-2 bg-slate-surface border border-muted-slate/20 rounded-2xl p-6 min-h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white">Goals vs Expected (xG)</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Rolling 10-match trend</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-data">
                    <span className="flex items-center gap-1.5 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-white" /> Goals
                    </span>
                    <span className="flex items-center gap-1.5 text-metric-win">
                        <span className="w-2 h-2 rounded-full bg-metric-win" /> xG
                    </span>
                </div>
            </div>

            {/* Recharts Wrapper Placeholder */}
            <div className="flex-1 bg-obsidian/50 rounded-xl border border-muted-slate/10 flex items-center justify-center relative overflow-hidden">
                {/* Fake Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-8 px-4 opacity-10 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-px bg-white" />
                    ))}
                </div>

                <div className="flex flex-col items-center gap-2 text-gray-500 opacity-60">
                    <Activity size={32} />
                    <span className="text-sm font-data">&lt;RechartsResponsiveContainer /&gt;</span>
                </div>
            </div>
        </div>
    );
}