import { SidebarProvider } from "@/context/SidebarContext";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-obsidian">
                <Sidebar />

                <div className="flex-1 flex flex-col min-w-0">
                    <Header />

                    <main className="flex-1 relative p-4 md:p-6 lg:p-8 overflow-x-hidden">
                        {/* Glowing Grid Background Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#151D30_1px,transparent_1px),linear-gradient(to_bottom,#151D30_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

                        <div className="relative z-10">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}