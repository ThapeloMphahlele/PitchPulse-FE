import { Activity, Target, Trophy } from "lucide-react";

const features = [
    {
        title: "Live Elo Engine",
        description: "Ratings adjust dynamically the moment the final whistle blows, reflecting true team strength beyond simple league points.",
        icon: Trophy,
        colSpan: "md:col-span-2",
    },
    {
        title: "Advanced xG Trends",
        description: "Uncover structural overperformance. See exactly who is getting lucky and who is genuinely dominating.",
        icon: Target,
        colSpan: "md:col-span-1",
    },
    {
        title: "Season Projector",
        description: "Monte Carlo simulation runs the remaining 380 Premier League fixtures to predict relegation and title probabilities.",
        icon: Activity,
        colSpan: "md:col-span-3",
    }
];

export function BentoGrid() {
    return (
        <section id="features" className="py-24 px-4 max-w-6xl mx-auto w-full relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">Engineered for Edge</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-62.5">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`bg-slate-surface border border-muted-slate/20 rounded-2xl p-8 flex flex-col justify-between hover:border-metric-win/50 transition-colors group ${feature.colSpan}`}
                    >
                        <feature.icon className="text-gray-500 group-hover:text-metric-win transition-colors" size={32} />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-prose">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}