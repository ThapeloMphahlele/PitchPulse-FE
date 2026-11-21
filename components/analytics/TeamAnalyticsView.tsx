"use client";

import { mockTeamData } from "@/types/analytics";
import { TeamHeroCard } from "./TeamHeroCard";
import { HomeAwaySplit } from "./HomeAwaySplit";
import { PerformanceChart } from "./PerformanceChart";
import { MatchTimeline } from "./MatchTimeline";

export function TeamAnalyticsView() {
    return (
        <div className="w-full flex flex-col gap-6">
            <header className="flex flex-col gap-1 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Team Analytics</h1>
                <p className="text-sm text-gray-400">Deep performance metrics & expected points.</p>
            </header>

            {/* Bento Grid Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                <TeamHeroCard team={mockTeamData} />
                <HomeAwaySplit team={mockTeamData} />
                <PerformanceChart />
                {/* Placeholder for an extra 1-col widget (e.g., Top Scorer) to keep grid perfect, or Chart spans 2 and something else spans 1 */}
                <div className="xl:col-span-1 bg-slate-surface border border-muted-slate/20 rounded-2xl p-6 min-h-[300px] flex items-center justify-center">
                    <span className="text-sm text-gray-500">Squad Fitness Widget</span>
                </div>
                <MatchTimeline matches={mockTeamData.recentMatches} />
            </div>
        </div>
    );
}