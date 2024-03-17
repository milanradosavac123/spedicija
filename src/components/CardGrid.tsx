"use client";

import clsx from "clsx";
import { ReactNode, useContext } from "react";

interface CardGridProps {
    children: ReactNode,
    isForStaticSizeSmallCards?: boolean
}

export default function CardGrid({ children, isForStaticSizeSmallCards = true }: CardGridProps) {
    
    return (
        <div className={clsx("grid grid-cols-respond overflow-y-auto overflow-x-hidden", !isForStaticSizeSmallCards && "grid-cols-respond-sm")}>
            {children}
        </div>
    );
}