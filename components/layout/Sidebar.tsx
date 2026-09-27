"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { LayoutDashboard, Users, CalendarDays, Activity, X } from "lucide-react";

const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Team Analytics", href: "/team-analytics", icon: Users },
    { name: "Fixtures", href: "/fixtures", icon: CalendarDays },
    { name: "Match Simulator", href: "/simulator", icon: Activity },
];

export function Sidebar() {
    const pathname = usePathname();
    const { isOpen, close } = useSidebar();

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-20 md:hidden backdrop-blur-sm"
                    onClick={close}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed md:sticky top-0 left-0 z-30 h-dvh w-64 border-r border-muted-slate/20 bg-slate-surface transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="h-16 flex items-center justify-between px-6 border-b border-muted-slate/20 md:hidden">
                    <span className="font-bold text-white tracking-tight">Menu</span>
                    <button onClick={close} className="text-gray-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => close()}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive
                                        ? "bg-metric-win/10 text-metric-win"
                                        : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                                    }`}
                            >
                                <Icon size={18} />
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}