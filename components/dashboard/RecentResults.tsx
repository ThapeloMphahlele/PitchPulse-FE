import { MatchResult } from "@/types/dashboard";

export function RecentResults({ results }: { results: MatchResult[] }) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4 px-1 md:px-0">
                <h3 className="text-lg font-bold text-white tracking-tight">Recent Results</h3>
                <span className="text-xs text-metric-win font-medium bg-metric-win/10 px-2 py-0.5 rounded border border-metric-win/20">Live Sync</span>
            </div>

            {/* Swipe Carousel (Mobile) / Vertical Stack (Desktop) */}
            <div className="flex overflow-x-auto snap-x snap-mandatory md:flex-col gap-4 pb-4 md:pb-0 md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
                {results.map((match) => (
                    <div
                        key={match.id}
                        className="flex-none w-72 md:w-full snap-center bg-slate-surface border border-muted-slate/20 rounded-xl p-4 hover:border-muted-slate/50 transition-colors"
                    >
                        <div className="text-xs text-gray-500 mb-3 font-medium">{match.date}</div>

                        <div className="flex flex-col gap-2.5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-obsidian rounded-full border border-muted-slate/30" />
                                    <span className="text-sm font-bold text-white">{match.homeTeam}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-data font-bold text-white">{match.homeScore}</span>
                                    <span className={`text-xs font-data w-12 text-right ${match.homeEloDelta > 0 ? 'text-metric-win' : 'text-metric-loss'}`}>
                                        {match.homeEloDelta > 0 ? '+' : ''}{match.homeEloDelta}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-obsidian rounded-full border border-muted-slate/30" />
                                    <span className="text-sm font-bold text-white">{match.awayTeam}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-data font-bold text-white">{match.awayScore}</span>
                                    <span className={`text-xs font-data w-12 text-right ${match.awayEloDelta > 0 ? 'text-metric-win' : 'text-metric-loss'}`}>
                                        {match.awayEloDelta > 0 ? '+' : ''}{match.awayEloDelta}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}