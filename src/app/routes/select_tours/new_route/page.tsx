"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import LocationDisplay from "@/components/LocationDisplay";
import { useListState } from "@mantine/hooks";
import { useContext } from "react";
import { dummyTourData } from "@/dummyData/dummyData";
import { Location } from "@/app/new_tour/page";

export default function NewRoutePage() {

    const { selectedTourIds, setSelectedTourIds } = useContext(SelectedToursContext);

    const tourArray = dummyTourData.filter((value) => selectedTourIds.includes(value.id))

    return (
        <div className="flex flex-row p-5">
            <div className="grid grid-cols-[1]">
                <LocationDisplay
                    className="pl-5"
                    tours={tourArray}
                />
            </div>
        </div>
    );
}