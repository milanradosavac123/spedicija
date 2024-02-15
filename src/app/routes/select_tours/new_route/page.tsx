"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import LocationDisplay from "@/components/LocationDisplay";
import { useListState } from "@mantine/hooks";
import { useContext } from "react";
import { dummyTourData } from "@/dummyData/dummyData";

export default function NewRoutePage() {

    const { selectedTourIds, setSelectedTourIds } = useContext(SelectedToursContext);

    return (
        <div className="flex flex-row p-5">
            <div className="grid grid-cols-[1]" >
                {dummyTourData.filter((value) => selectedTourIds.includes(value.id)).map((value, i) => {
                    
                    const [locations, handlers] = useListState(value.locations);
                    
                    return <div
                        className="flex flex-col"
                        key={i}
                    >
                        <h1>{value.tourName}</h1>
                        <LocationDisplay
                            className="pl-5"
                            locations={locations}
                            handlers={handlers}
                        />
                    </div>
                })}
            </div>
        </div>
    );
}