"use client";

import { useSidebar } from "@/context/SidebarContext";
import { Menu } from "lucide-react";

export function MobileMenuToggle() {
    const { toggle } = useSidebar();

    return (
        <button
            onClick={toggle}
            className="md:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
        >
            <Menu size={24} />
        </button>
    );
}