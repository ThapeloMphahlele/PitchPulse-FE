import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-obsidian text-gray-100">
            {/* Left Panel: Visual/Marketing (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-col w-1/2 bg-slate-900 relative overflow-hidden border-r border-muted-slate/20">
                {/* Neon Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] opacity-10 pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-center h-full p-16 max-w-2xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
                            Predict the <span className="text-metric-win">Unpredictable.</span>
                        </h1>
                        <p className="text-lg text-gray-400">
                            Join 10,000+ analysts simulating the Premier League with enterprise-grade Elo tracking and tactical data models.
                        </p>
                    </div>

                    {/* Mock UI Callout */}
                    <div className="p-6 bg-slate-surface/80 backdrop-blur-md rounded-xl border border-muted-slate/30 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-gray-400">Match Simulation</span>
                            <span className="text-xs font-data text-metric-win bg-metric-win/10 px-2 py-1 rounded">LIVE</span>
                        </div>
                        <div className="space-y-3 font-data text-sm">
                            <div className="flex justify-between">
                                <span>Home xG</span>
                                <span className="text-white">2.45</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Away xG</span>
                                <span className="text-white">0.82</span>
                            </div>
                            <div className="w-full bg-obsidian rounded-full h-1.5 mt-2 overflow-hidden flex">
                                <div className="bg-metric-win h-full w-[75%]"></div>
                                <div className="bg-metric-loss h-full w-[25%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel: The Form Area */}
            <div className="flex flex-col w-full lg:w-1/2 items-center justify-center p-8 sm:p-12">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>
        </div>
    );
}