import { FormResult } from "@/types/dashboard";

export function FormGuide({ form }: { form: FormResult[] }) {
    return (
        <div className="flex items-center gap-1.5">
            {form.map((result, idx) => (
                <span
                    key={idx}
                    title={result}
                    className={`flex items-center justify-center w-4 h-4 rounded-full text-[9px] font-bold text-obsidian ${result === 'W' ? 'bg-metric-win' : result === 'L' ? 'bg-metric-loss' : 'bg-muted-slate'
                        }`}
                >
                    {result}
                </span>
            ))}
        </div>
    );
}