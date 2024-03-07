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

export const SelectedToursContext = createContext<SelectedTourIdsContext>({
    selectedTourIds: [],
    setSelectedTourIds: () => { }
});

export const IsNavbarCollapsedContext = createContext<IsNavbarCollapsedContext>({
    isNavbarCollapsed: false,
    setIsNavbarCollapsed: () => { }
});

export default function ContextWrapper({ children }: { children: React.ReactNode }) {

    function isMobile(): boolean {
        return navigator.maxTouchPoints > 0 && (navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad"));
    }

    const [selectedTourIds, setSelectedTourIds] = useState<number[]>([]);

    const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(isMobile());

    return (
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
    );
}