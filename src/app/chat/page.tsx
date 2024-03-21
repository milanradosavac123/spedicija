"use client";

import EmptyState from "@/components/chat/EmptyState";
import clsx from "clsx";
import { useContext } from "react";
import { IsNavbarCollapsedContext } from "../ContextWrapper";
import { useConversation } from "@/util/hooks/useConversation";

export default function Chat() {

    const { isOpen } = useConversation();
    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);

    return (
        <div
            className={clsx("h-full lg:block", isOpen ? "block" : "hidden", isNavbarCollapsed ? "lg:pl-[415px]" : "lg:pl-[555px]")}
        >
            <EmptyState />
        </div>
    );
}