"use client";

import { mockFixtures } from "@/types/fixtures";
import { FixtureRow } from "./FixtureRow";

export function TeamFixturesView() {
    const teamName = "Liverpool";

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
            <header className="flex flex-col gap-1 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{teamName} Fixtures</h1>
                <p className="text-sm text-gray-400">Upcoming schedule & Fixture Difficulty Ratings (FDR)</p>
            </header>

            <div className="bg-slate-surface border border-muted-slate/20 rounded-2xl overflow-hidden shadow-xl">
                {mockFixtures.map((gameWeek) => (
                    <div key={gameWeek.week} className="flex flex-col">
                        {/* Sticky Section Header */}
                        <div className="sticky top-0 z-10 bg-obsidian/95 backdrop-blur-md px-5 py-3 border-b border-muted-slate/30 border-t first:border-t-0 border-t-muted-slate/20">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                {gameWeek.name}
                            </span>
                        </div>

                        {/* Fixture Rows */}
                        <div className="flex flex-col">
                            {gameWeek.fixtures.map((fixture) => (
                                <FixtureRow key={fixture.id} fixture={fixture} teamName={teamName} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}