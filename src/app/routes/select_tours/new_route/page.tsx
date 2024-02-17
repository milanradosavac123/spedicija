"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import LocationDisplay from "@/components/LocationDisplay";
import { useContext, useState } from "react";
import { dummyTourData } from "@/dummyData/dummyData";
import Header from "@/components/Header";

export default function NewRoute() {

    const { selectedTourIds } = useContext(SelectedToursContext);

    const tourArray = dummyTourData.filter((value) => selectedTourIds.includes(value.id))

    const [routeName, setRouteName] = useState("Route name")

    return (
        <div className="flex flex-col p-5">
            <Header editable shouldShowSearchField={false} headerContent={routeName} onHeaderContentChanged={setRouteName} />
            <LocationDisplay
                className="pl-5"
                tours={tourArray}
            />
        </div>
    );
}