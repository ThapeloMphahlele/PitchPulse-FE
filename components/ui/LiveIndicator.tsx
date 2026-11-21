"use client";

export function LiveIndicator() {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-surface border border-muted-slate/30 rounded-full">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-metric-win opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-metric-win"></span>
            </span>
            <span className="text-xs font-data text-gray-300">Live Data: Connected</span>
        </div>
    );
}