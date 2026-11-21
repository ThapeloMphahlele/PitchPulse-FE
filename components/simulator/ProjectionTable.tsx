import { ProjectedStanding } from "@/types/simulator";
import { Activity } from "lucide-react";

export function ProjectionTable({ standings }: { standings: ProjectedStanding[] }) {
    return (
        <div className="w-full bg-slate-surface border border-muted-slate/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-5 border-b border-muted-slate/20 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Activity size={18} className="text-metric-win" /> Projected Final Standings
                </h3>
                <span className="text-xs text-gray-500 font-data">380 Matches Simulated</span>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="text-xs text-gray-400 uppercase bg-obsidian">
                        <tr>
                            <th className="px-5 py-4 w-12 text-center">Pos</th>
                            <th className="px-5 py-4">Club</th>
                            <th className="px-5 py-4 text-right font-data text-white">Proj Points</th>
                            <th className="px-5 py-4 text-right font-data">Title Odds</th>
                            <th className="px-5 py-4 text-right font-data">Rel Odds</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-muted-slate/20">
                        {standings.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-900/50 transition-colors">
                                <td className="px-5 py-4 text-center font-data text-gray-400">{row.pos}</td>
                                <td className="px-5 py-4 font-bold text-white">{row.team}</td>
                                <td className="px-5 py-4 text-right font-data">
                                    <span className="text-white text-base mr-2">{row.projectedPoints.toFixed(1)}</span>
                                    <span className="text-gray-500 text-xs">± {row.standardDeviation.toFixed(1)}</span>
                                </td>
                                <td className="px-5 py-4 text-right font-data text-gray-300">
                                    {row.titleOdds > 0 ? `${row.titleOdds.toFixed(1)}%` : '-'}
                                </td>
                                <td className="px-5 py-4 text-right font-data text-gray-400">
                                    {row.relegationOdds > 0 ? `${row.relegationOdds.toFixed(1)}%` : '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}