"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface SelectedTourIdsContext {
    selectedTourIds: number[],
    setSelectedTourIds: Dispatch<SetStateAction<number[]>>
}

interface IsNavbarCollapsedContext {
    isNavbarCollapsed: boolean,
    setIsNavbarCollapsed: Dispatch<SetStateAction<boolean>>
}

interface SelectedConversationContext {
    selectedConversationId: string | undefined,
    setSelectedConversationId: Dispatch<SetStateAction<string | undefined>>
}

export const SelectedToursContext = createContext<SelectedTourIdsContext>({
    selectedTourIds: [],
    setSelectedTourIds: () => { }
});

export const IsNavbarCollapsedContext = createContext<IsNavbarCollapsedContext>({
    isNavbarCollapsed: false,
    setIsNavbarCollapsed: () => { }
});

export const SelectedConversationContext = createContext<SelectedConversationContext>({
    selectedConversationId: undefined,
    setSelectedConversationId: () => { }
})

export default function ContextWrapper({ children }: { children: React.ReactNode }) {

    function isMobile(): boolean {
        return navigator.maxTouchPoints > 0 && (navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad"));
    }

    const [selectedTourIds, setSelectedTourIds] = useState<number[]>([]);

    const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(isMobile());

    const [selectedConversationId, setSelectedConversationId] = useState<string>()

    return (
        <SelectedConversationContext.Provider
            value={
                {
                    selectedConversationId: selectedConversationId,
                    setSelectedConversationId: setSelectedConversationId
                }
            }
        >
            <IsNavbarCollapsedContext.Provider
                value={
                    {
                        isNavbarCollapsed: isNavBarCollapsed,
                        setIsNavbarCollapsed: setIsNavBarCollapsed
                    }
                }
            >
                <SelectedToursContext.Provider
                    value={
                        {
                            selectedTourIds: selectedTourIds,
                            setSelectedTourIds: setSelectedTourIds
                        } as SelectedTourIdsContext
                    }
                >
                    {children}
                </SelectedToursContext.Provider>
            </IsNavbarCollapsedContext.Provider>
        </SelectedConversationContext.Provider>
    );
}