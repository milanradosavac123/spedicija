"use client";

import { StandardNavBar } from "@/components/StandardNavBar";
import { usePathname } from "next/navigation";

export default function NavBar() {
    
    const pathname = usePathname();
    
    return (
        <>
            {!pathname.includes("chat") && (
                <StandardNavBar />
            )}
        </>
    );
}