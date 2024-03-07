"use client";

import { IsNavbarCollapsedContext } from "@/app/ContextWrapper";
import EmptyState from "@/components/chat/EmptyState";
import clsx from "clsx";
import { useContext } from "react";


export default function PageWrapper ({ children }: { children: React.ReactNode }) {

    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);

    return (
        <div
            className={clsx("h-full", isNavbarCollapsed ? "lg:pl-[415px]" : "lg:pl-[555px]")}
        >
            <div
                className="h-full flex flex-col"
            >
                {children}
            </div>
        </div>
    );
}