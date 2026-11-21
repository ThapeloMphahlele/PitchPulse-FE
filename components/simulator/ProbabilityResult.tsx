"use client";

import { motion } from "framer-motion";
import { SimulationResult, TeamOption } from "@/types/simulator";

interface ProbabilityResultProps {
    result: SimulationResult;
    homeTeam: TeamOption;
    awayTeam: TeamOption;
}

export function ProbabilityResult({ result, homeTeam, awayTeam }: ProbabilityResultProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="w-full bg-slate-surface border border-metric-win/30 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_-15px_rgba(16,185,129,0.15)] relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-metric-win via-muted-slate to-metric-loss opacity-50" />

            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Monte Carlo Simulation Result</h3>
                <p className="text-sm text-gray-400 font-data mt-1">10,000 iterations • Expected Goals: {result.homeGoalsExpected} - {result.awayGoalsExpected}</p>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between text-sm font-bold">
                    <span className="text-metric-win w-1/3">{homeTeam.shortName} Win</span>
                    <span className="text-gray-400 w-1/3 text-center">Draw</span>
                    <span className="text-metric-loss w-1/3 text-right">{awayTeam.shortName} Win</span>
                </div>

                <div className="w-full h-10 rounded-lg overflow-hidden flex bg-obsidian border border-muted-slate/20">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.homeWinPct}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-metric-win flex items-center px-3"
                    >
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-data font-bold text-obsidian">
                            {result.homeWinPct}%
                        </motion.span>
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.drawPct}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-muted-slate flex items-center justify-center border-x border-obsidian/20"
                    >
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-data font-bold text-white">
                            {result.drawPct}%
                        </motion.span>
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.awayWinPct}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-metric-loss flex items-center justify-end px-3"
                    >
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-data font-bold text-white">
                            {result.awayWinPct}%
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}