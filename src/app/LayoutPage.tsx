"use client";

import { StandardNavBar } from "@/components/StandardNavBar";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface LayoutPageProps {
    children: React.ReactNode
}

export default function LayoutPage({ children }: LayoutPageProps) {

    const [isNavbarCollapsed, setIsNavBarCollapsed] = useState(false);

    const route = usePathname()

    return (
        <div className={`grid ${isNavbarCollapsed ? "grid-cols-14" : "grid-cols-8"}`}>
            <StandardNavBar
                isNavbarCollapsed={isNavbarCollapsed}
                onNavbarCollapseToggle={(newValue) => {
                    setIsNavBarCollapsed(newValue);
                }}
            />
            <div className={`${route === "/new_tour" ? "col-span-7" : "col-span-10"} col-start-2`}>{children}</div>
        </div>
    );
}