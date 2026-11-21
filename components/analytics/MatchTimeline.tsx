import { MatchHistory } from "@/types/analytics";

export function MatchTimeline({ matches }: { matches: MatchHistory[] }) {
    return (
        <div className="xl:col-span-3 bg-slate-surface border border-muted-slate/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">Recent Form & xG Deltas</h3>

            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-2">
                {matches.map((match) => {
                    const isWin = match.result === 'W';
                    const isLoss = match.result === 'L';
                    const badgeColor = isWin ? 'bg-metric-win' : isLoss ? 'bg-metric-loss' : 'bg-muted-slate';

                    return (
                        <div
                            key={match.id}
                            className="flex-none w-[280px] snap-start bg-obsidian border border-muted-slate/20 rounded-xl p-4 flex flex-col gap-4 hover:border-muted-slate/50 transition-colors"
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400 font-medium">{match.date} • {match.isHome ? 'Home' : 'Away'}</span>
                                <span className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold text-obsidian ${badgeColor}`}>
                                    {match.result}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-white truncate max-w-[140px]">{match.opponent}</span>
                                <span className="font-data text-xl text-white font-bold tracking-tight">
                                    {match.goalsFor} - {match.goalsAgainst}
                                </span>
                            </div>

                            {/* xG Micro-bar */}
                            <div className="pt-3 border-t border-muted-slate/10 text-xs font-data flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-gray-500">xG For</span>
                                    <span className={match.xgFor > match.xgAgainst ? 'text-metric-win' : 'text-white'}>
                                        {match.xgFor.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-gray-500">xG Agt</span>
                                    <span className={match.xgAgainst > match.xgFor ? 'text-metric-loss' : 'text-gray-400'}>
                                        {match.xgAgainst.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}