import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-muted-slate/20 bg-obsidian py-12 px-4 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-white">
                        Pitch<span className="text-metric-win">Pulse</span>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-data bg-slate-surface text-gray-400 border border-muted-slate/20">
                        v1.0.4 Live
                    </span>
                </div>

                <nav className="flex gap-6 text-sm text-gray-500">
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <span className="text-gray-700">|</span>
                    <Link href="/signup" className="text-metric-win hover:text-white font-medium transition-colors">
                        Create Account
                    </Link>
                </nav>
            </div>
        </footer>
    );
}