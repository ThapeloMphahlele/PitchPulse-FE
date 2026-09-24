"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export function InteractiveTeaser() {
    const [isSimulating, setIsSimulating] = useState(false);
    const [hasResult, setHasResult] = useState(false);

    const handleSimulate = () => {
        setIsSimulating(true);
        // Mock network request
        setTimeout(() => {
            setIsSimulating(false);
            setHasResult(true);
        }, 1500);
    };

    return (
        <section className="py-24 px-4 relative z-10 flex flex-col items-center">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Test the Simulator</h2>
                <p className="text-gray-400">Run a 10,000-match Monte Carlo projection instantly.</p>
            </div>

            <div className="w-full max-w-2xl bg-slate-surface rounded-2xl border border-muted-slate/30 p-6 md:p-8 shadow-xl">
                {/* Team Selection Shell */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <div className="flex-1 w-full bg-obsidian border border-muted-slate/20 rounded-lg p-4 text-center">
                        <span className="block text-xl text-white font-bold mb-1">Manchester City</span>
                        <span className="text-xs text-gray-500 font-data">ELO: 2014.2</span>
                    </div>

                    <div className="text-gray-500 font-medium text-sm px-4 py-1 bg-obsidian rounded-full border border-muted-slate/20">
                        VS
                    </div>

                    <div className="flex-1 w-full bg-obsidian border border-muted-slate/20 rounded-lg p-4 text-center">
                        <span className="block text-xl text-white font-bold mb-1">Arsenal</span>
                        <span className="text-xs text-gray-500 font-data">ELO: 1988.7</span>
                    </div>
                </div>

                {/* Action / Results Area */}
                <div className="min-h-30 flex flex-col items-center justify-center">
                    {!hasResult && !isSimulating && (
                        <button
                            onClick={handleSimulate}
                            className="px-8 py-3 bg-white hover:bg-gray-200 text-obsidian font-bold rounded-lg transition-colors"
                        >
                            Simulate Match
                        </button>
                    )}

                    {isSimulating && (
                        <div className="flex flex-col items-center gap-3">
                            <Loader2 className="animate-spin text-metric-win" size={32} />
                            <span className="text-sm text-gray-400 font-data animate-pulse">Running 10,000 permutations...</span>
                        </div>
                    )}

                    {hasResult && !isSimulating && (
                        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-between text-sm font-data text-white mb-2 px-1">
                                <span>HOME 45%</span>
                                <span className="text-gray-400">DRAW 25%</span>
                                <span>AWAY 30%</span>
                            </div>
                            <div className="w-full h-3 rounded-full overflow-hidden flex bg-obsidian">
                                <div className="h-full bg-metric-win w-[45%]" />
                                <div className="h-full bg-muted-slate w-[25%]" />
                                <div className="h-full bg-metric-loss w-[30%]" />
                            </div>

                            <div className="mt-8 text-center">
                                <Link
                                    href="/signup"
                                    className="inline-block text-sm font-medium text-metric-win hover:text-white transition-colors border-b border-metric-win/30 hover:border-white pb-0.5"
                                >
                                    Unlock full tactical breakdown &rarr;
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}