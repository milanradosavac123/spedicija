"use client";

import EmptyState from "@/components/chat/EmptyState";
import clsx from "clsx";
import { useContext } from "react";
import { IsNavbarCollapsedContext } from "../ContextWrapper";

export default function Chat() {

    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);

    return (
        <div className={clsx("hidden lg:block h-full", isNavbarCollapsed ? "lg:pl-[415px]" : "lg:pl-[555px]")}>
            <EmptyState />
        </div>
    );
}