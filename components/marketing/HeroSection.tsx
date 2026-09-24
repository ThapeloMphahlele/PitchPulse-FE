import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";

const timelineHeights = [
    45, 82, 34, 65, 91, 23, 56, 78, 42, 88,
    15, 60, 39, 85, 72, 48, 95, 29, 67, 50
];

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col items-center text-center px-4">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[radial-gradient(ellipse_at_top,var(--color-metric-win)_0%,transparent_70%)] opacity-[0.15] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                    The Football Analytics Engine <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                        Built to Predict.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Track live team Elo ratings, analyze deep xG performance, and run thousands of match simulations instantly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Link
                        href="/signup"
                        className="flex items-center gap-2 px-8 py-3.5 bg-metric-win hover:bg-metric-win/90 text-obsidian font-bold rounded-lg transition-colors w-full sm:w-auto justify-center"
                    >
                        Launch Simulator - Free
                        <ArrowRight size={18} strokeWidth={2.5} />
                    </Link>
                    <Link
                        href="#features"
                        className="flex items-center gap-2 px-8 py-3.5 bg-transparent border border-muted-slate/50 hover:border-white hover:text-white text-gray-300 font-medium rounded-lg transition-colors w-full sm:w-auto justify-center"
                    >
                        Explore Live Table
                    </Link>
                </div>

                {/* Floating UI Preview */}
                <div className="relative mx-auto w-full max-w-5xl rounded-xl border border-metric-win/30 bg-slate-surface/60 backdrop-blur-md shadow-[0_0_50px_-12px_var(--color-metric-win)] p-2">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-muted-slate/20 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-4 text-xs text-gray-500 font-data">dash.pitchpulse.app/simulator</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-left">
                        <div className="col-span-2 h-48 rounded bg-obsidian border border-muted-slate/20 flex flex-col p-4 justify-between relative overflow-hidden">
                            <span className="text-sm text-gray-400">Live xG Timeline</span>
                            <div className="w-full h-1/2 flex items-end gap-1 opacity-80">
                                {timelineHeights.map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-metric-win/20 rounded-t"
                                        style={{ height: `${height}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="h-48 rounded bg-obsidian border border-muted-slate/20 flex flex-col justify-center items-center p-4">
                            <BarChart3 className="text-metric-win mb-2" size={32} opacity={0.8} />
                            <span className="text-2xl text-white font-data">1,842.4</span>
                            <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Current Elo Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}