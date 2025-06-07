import { useState } from "react";
import { Header } from "@widgets/layout/header/header";
import { Sidebar } from "@widgets/layout/sidebar/sidebar";


type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <div>
            <Header onMenuClick={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <main className="">{children}</main>
        </div>
    );
};