import { TeamStanding } from "@/types/dashboard";
import { FormGuide } from "@/components/ui/FormGuide";

export function TeamCard({ data }: { data: TeamStanding }) {
    return (
        <div className="bg-slate-surface border border-muted-slate/20 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500 font-data w-5 text-right">{data.pos}</span>
                    <div className="w-6 h-6 bg-obsidian rounded-full border border-muted-slate/30 flex items-center justify-center text-[10px] text-gray-500">
                        {data.team.charAt(0)}
                    </div>
                    <span className="font-bold text-white text-lg">{data.team}</span>
                </div>
                <span className="font-data text-xl text-white font-bold">{data.points} pts</span>
            </div>

            <div className="flex items-center justify-between border-t border-muted-slate/20 pt-3">
                <div className="flex gap-4 text-sm">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-xs">xG</span>
                        <span className="font-data text-white">{data.xg.toFixed(1)}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-xs">Elo</span>
                        <span className="font-data text-metric-win">{data.elo.toFixed(1)}</span>
                    </div>
                </div>
                <FormGuide form={data.form} />
            </div>
        </div>
    );
}