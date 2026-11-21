import { FDRRating } from "@/types/fixtures";

export function FDRBadge({ fdr }: { fdr: FDRRating }) {
    const fdrConfig = {
        5: { label: "Very Hard", styles: "bg-red-950/50 text-red-400 border-red-900/50" },
        4: { label: "Hard", styles: "bg-orange-950/50 text-orange-400 border-orange-900/50" },
        3: { label: "Balanced", styles: "bg-slate-800 text-gray-300 border-muted-slate/30" },
        2: { label: "Favorable", styles: "bg-emerald-950/30 text-emerald-400 border-emerald-900/50" },
        1: { label: "Easy", styles: "bg-green-950/30 text-green-400 border-green-900/50" },
    };

    const config = fdrConfig[fdr];

    return (
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${config.styles}`}>
            <span className="text-[10px] uppercase tracking-wider font-bold opacity-80">FDR</span>
            <span className="font-data font-bold text-sm">{fdr}</span>
            <span className="hidden sm:inline-block text-xs font-medium ml-1">({config.label})</span>
        </div>
    );
}