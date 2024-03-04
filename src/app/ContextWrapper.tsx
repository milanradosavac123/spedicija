"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface SelectedTourIdsContext {
    selectedTourIds: number[],
    setSelectedTourIds: Dispatch<SetStateAction<number[]>>
}

export const SelectedToursContext = createContext<SelectedTourIdsContext>({
    selectedTourIds: [],
    setSelectedTourIds: () => {}
});

export default function ContextWrapper({ children }: { children: React.ReactNode }) {

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