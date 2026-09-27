"use client";

import { LeagueStandings } from "./LeagueStandings";
import { RecentResults } from "./RecentResults";
import { mockStandings, mockResults } from "@/types/dashboard";

export function DashboardView() {

    return (
        <div className="w-full flex flex-col gap-8">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Premier League</h1>
                <p className="text-sm text-gray-400">Matchweek 28 • Tactics & Elo Projections</p>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8 items-start">
                {/* Main Table Area (Spans 3 columns on Desktop) */}
                <div className="xl:col-span-3 w-full min-w-0">
                    <LeagueStandings standings={mockStandings} />
                </div>

                {/* Sidebar Area (Spans 1 column on Desktop) */}
                <div className="xl:col-span-1 w-full xl:sticky xl:top-24">
                    <RecentResults results={mockResults} />
                </div>
            </div>
        </div>
    );
}