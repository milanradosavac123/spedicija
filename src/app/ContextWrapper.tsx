"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface ContextWrapperProps {
    children: React.ReactNode
}

interface SelectedTourIdsContext {
    selectedTourIds: number[],
    setSelectedTourIds: Dispatch<SetStateAction<number[]>>
}

export const SelectedToursContext = createContext<SelectedTourIdsContext>({
    selectedTourIds: [],
    setSelectedTourIds: () => {}
});

export default function ContextWrapper({ children }: ContextWrapperProps) {

    const [selectedTourIds, setSelectedTourIds] = useState<number[]>([])

    return (
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
    );
}