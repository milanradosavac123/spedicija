"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import LocationDisplay from "@/components/LocationDisplay";
import { useContext, useState } from "react";
import { dummyTourData } from "@/dummyData/dummyData";
import Header from "@/components/Header";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardCentredButton from "@/components/StandardCentredButton";

export default function NewRoute() {

    const { selectedTourIds } = useContext(SelectedToursContext);

    const tourArray = dummyTourData.filter((value) => selectedTourIds.includes(value.id))

    const [routeName, setRouteName] = useState("Route name")

    return (
        <div className="flex flex-col p-5">
            <Header editable shouldShowSearchField={false} headerContent={routeName} onHeaderContentChanged={setRouteName} />
            <div className="flex flex-row justify-end py-5">
                <StandardLinkButton
                    href="/routes"
                    text="Back"
                    forwardLink={false}
                />
            </div>
            <LocationDisplay
                className="pl-5"
                tours={tourArray}
            />
            <StandardCentredButton
                buttonText="Create Route"
                onClick={() => {

                }}
            />
        </div>
    );
}