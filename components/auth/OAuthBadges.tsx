export function OAuthBadges() {
    return (
        <div className="flex flex-col gap-3 mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted-slate/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-obsidian text-gray-500">Or continue with</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <button type="button" className="flex items-center justify-center px-4 py-2 bg-slate-surface border border-muted-slate/30 rounded-lg hover:bg-slate-surface/80 transition-colors text-sm font-medium text-white">
                    Google
                </button>
                <button type="button" className="flex items-center justify-center px-4 py-2 bg-slate-surface border border-muted-slate/30 rounded-lg hover:bg-slate-surface/80 transition-colors text-sm font-medium text-white">
                    GitHub
                </button>
            </div>
        </div>
    );
}