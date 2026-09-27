import { TeamStanding } from "@/types/dashboard";
import { FormGuide } from "@/components/ui/FormGuide";
import { TeamCard } from "./TeamCard";

export function LeagueStandings({ standings }: { standings: TeamStanding[] }) {
    return (
        <div className="w-full">
            {/* Mobile View: Vertical Cards */}
            <div className="flex flex-col gap-3 md:hidden">
                {standings.map((team) => (
                    <TeamCard key={team.id} data={team} />
                ))}
            </div>

            {/* Desktop View: Data-Dense Table */}
            <div className="hidden md:block w-full overflow-x-auto bg-slate-surface border border-muted-slate/20 rounded-xl">
                <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="text-xs text-gray-400 uppercase bg-obsidian/90 backdrop-blur sticky top-0 z-10 border-b border-muted-slate/20">
                        <tr>
                            <th className="px-4 py-4 w-12 text-center">Pos</th>
                            <th className="px-4 py-4">Club</th>
                            <th className="px-4 py-4 text-right font-data">P</th>
                            <th className="px-4 py-4 text-right font-data">W</th>
                            <th className="px-4 py-4 text-right font-data">D</th>
                            <th className="px-4 py-4 text-right font-data">L</th>
                            <th className="px-4 py-4 text-right font-data hidden lg:table-cell">GF</th>
                            <th className="px-4 py-4 text-right font-data hidden lg:table-cell">GA</th>
                            <th className="px-4 py-4 text-right font-data hidden lg:table-cell">GD</th>
                            <th className="px-4 py-4 text-right font-data text-white">xG</th>
                            <th className="px-4 py-4 text-right font-data text-metric-win">Elo Rating</th>
                            <th className="px-4 py-4 text-center">Form</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-muted-slate/20">
                        {standings.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-900/50 transition-colors group">
                                <td className="px-4 py-3 text-center text-gray-400 font-data">{row.pos}</td>
                                <td className="px-4 py-3 font-bold text-white flex items-center gap-3">
                                    <div className="w-6 h-6 bg-obsidian rounded-full border border-muted-slate/30 flex items-center justify-center text-[10px] text-gray-500 shrink-0">
                                        {row.team.charAt(0)}
                                    </div>
                                    {row.team}
                                </td>
                                <td className="px-4 py-3 text-right font-data text-gray-300">{row.played}</td>
                                <td className="px-4 py-3 text-right font-data text-gray-400">{row.won}</td>
                                <td className="px-4 py-3 text-right font-data text-gray-400">{row.drawn}</td>
                                <td className="px-4 py-3 text-right font-data text-gray-400">{row.lost}</td>
                                <td className="px-4 py-3 text-right font-data text-gray-400 hidden lg:table-cell">{row.gf}</td>
                                <td className="px-4 py-3 text-right font-data text-gray-400 hidden lg:table-cell">{row.ga}</td>
                                <td className="px-4 py-3 text-right font-data text-gray-300 hidden lg:table-cell">{row.gd > 0 ? `+${row.gd}` : row.gd}</td>
                                <td className="px-4 py-3 text-right font-data text-white">{row.xg.toFixed(1)}</td>
                                <td className="px-4 py-3 text-right font-data">
                                    <span className="bg-metric-win/10 text-metric-win px-2 py-1 rounded border border-metric-win/20">
                                        {row.elo.toFixed(1)}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                        <FormGuide form={row.form} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}