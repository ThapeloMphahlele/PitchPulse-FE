import { Fixture, mockTeamElo } from "@/types/fixtures";
import { FDRBadge } from "@/components/ui/FDRBadge";

export function FixtureRow({ fixture, teamName }: { fixture: Fixture; teamName: string }) {
    const homeTeam = fixture.isHome ? teamName : fixture.opponent;
    const awayTeam = fixture.isHome ? fixture.opponent : teamName;
    const homeElo = fixture.isHome ? mockTeamElo : fixture.opponentElo;
    const awayElo = fixture.isHome ? fixture.opponentElo : mockTeamElo;

    return (
        <div className="group flex flex-col md:grid md:grid-cols-3 items-start md:items-center p-4 md:p-5 hover:bg-slate-900/50 transition-colors border-b border-muted-slate/20 last:border-0 gap-4 md:gap-0">

            {/* Column 1: Date & Time */}
            <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0.5 w-full md:w-auto border-b md:border-0 border-muted-slate/10 pb-3 md:pb-0">
                <span className="text-sm font-bold text-white">{fixture.date}</span>
                <span className="text-sm text-gray-500 font-data">{fixture.time}</span>
            </div>

            {/* Column 2: The Matchup (Centered on Desktop) */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-3 md:gap-6 w-full">
                {/* Home Team */}
                <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-end w-full md:w-[140px]">
                    <span className={`text-base md:text-lg font-bold ${fixture.isHome ? 'text-white' : 'text-gray-300'}`}>
                        {homeTeam}
                    </span>
                    <span className="text-xs text-gray-500 font-data">Elo: {homeElo.toFixed(1)}</span>
                </div>

                {/* VS Badge */}
                <div className="hidden md:flex shrink-0 w-8 h-8 rounded bg-obsidian border border-muted-slate/30 items-center justify-center text-[10px] font-bold text-gray-500">
                    VS
                </div>

                {/* Away Team */}
                <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start w-full md:w-[140px]">
                    <span className={`text-base md:text-lg font-bold ${!fixture.isHome ? 'text-white' : 'text-gray-300'}`}>
                        {awayTeam}
                    </span>
                    <span className="text-xs text-gray-500 font-data">Elo: {awayElo.toFixed(1)}</span>
                </div>
            </div>

            {/* Column 3: FDR Indicator (Right Aligned on Desktop) */}
            <div className="flex justify-start md:justify-end w-full mt-2 md:mt-0 pt-3 md:pt-0 border-t md:border-0 border-muted-slate/10">
                <FDRBadge fdr={fixture.fdr} />
            </div>

        </div>
    );
}