"use client";

import { IsNavbarCollapsedContext } from "@/app/ContextWrapper";
import clsx from "clsx";
import { ReactNode, useContext } from "react";

interface CardGridProps {
    children: ReactNode,
    shouldDistributeChildrenEvenly?: boolean
}

export default function CardGrid({ children, shouldDistributeChildrenEvenly = true }: CardGridProps) {
    
    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);
    
    return (
        <div className={clsx("flex flex-row flex-wrap overflow-y-auto overflow-x-hidden", shouldDistributeChildrenEvenly && "justify-around", isNavbarCollapsed && "gap-y-5")}>
            {children}
        </div>
    );
}