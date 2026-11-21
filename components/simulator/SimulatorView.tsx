"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Zap } from "lucide-react";
import { mockTeams, mockProjectedTable, SimulationResult } from "@/types/simulator";
import { TeamSelector } from "@/components/ui/TeamSelector";
import { ProbabilityResult } from "./ProbabilityResult";
import { ProjectionTable } from "./ProjectionTable";

export function SimulatorView() {
    const [isSimulating, setIsSimulating] = useState(false);
    const [result, setResult] = useState<SimulationResult | null>(null);

    const homeTeam = mockTeams[0]; // Liverpool
    const awayTeam = mockTeams[1]; // Arsenal

    const handleSimulate = () => {
        setIsSimulating(true);
        setResult(null);

        // Fake simulation delay
        setTimeout(() => {
            setResult({
                homeWinPct: 54,
                drawPct: 22,
                awayWinPct: 24,
                homeGoalsExpected: 1.84,
                awayGoalsExpected: 0.92,
            });
            setIsSimulating(false);
        }, 1200);
    };

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Match & Season Simulator</h1>
                <p className="text-sm text-gray-400">Run thousands of permutations instantly using live Elo models.</p>
            </header>

            {/* Simulator Controls & Result Wrap */}
            <motion.div layout className="flex flex-col gap-6">

                {/* Match Controls Layer */}
                <motion.div layout className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div className="w-full md:w-5/12">
                        <TeamSelector label="Home Team" selectedTeam={homeTeam} align="left" />
                    </div>

                    <div className="shrink-0 relative z-20 my-2 md:my-0">
                        <button
                            onClick={handleSimulate}
                            disabled={isSimulating}
                            className={`w-36 h-14 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${isSimulating
                                    ? "bg-metric-win/80 text-obsidian scale-95"
                                    : "bg-metric-win hover:bg-metric-win/90 text-obsidian shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)] hover:scale-105"
                                }`}
                        >
                            {isSimulating ? (
                                <Loader2 size={24} className="animate-spin text-obsidian" />
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Zap size={18} className="fill-current" /> Simulate
                                </span>
                            )}
                        </button>
                    </div>

                    <div className="w-full md:w-5/12">
                        <TeamSelector label="Away Team" selectedTeam={awayTeam} align="right" />
                    </div>
                </motion.div>

                {/* Probability Result Layer */}
                <AnimatePresence mode="wait">
                    {result && !isSimulating && (
                        <motion.div
                            layout
                            key="result"
                            className="w-full"
                        >
                            <ProbabilityResult result={result} homeTeam={homeTeam} awayTeam={awayTeam} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Season Projection Layer (Pushed down automatically by framer-motion layout) */}
            <motion.div layout className="w-full pt-4">
                <ProjectionTable standings={mockProjectedTable} />
            </motion.div>
        </div>
    );
}