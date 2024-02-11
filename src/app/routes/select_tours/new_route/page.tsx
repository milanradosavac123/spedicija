"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import { Location, Task } from "@/app/new_tour/page";
import LocationDisplay from "@/components/LocationDisplay";
import { useListState } from "@mantine/hooks";
import { useContext } from "react";

export default function NewRoutePage() {

    const dummyTasks = Array.from({ length: 3 }, (_, index) => index + 1).map((number) => (
        {
            text: "efwohadsopfjhdsfdos;jfhdsioufjh;",
            isDone: false 
        } as Task
    ));    

    const dummyLocations = Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
        {
            name: "fodhspojhsafjkudshfoi",
            address: "Berlin, Germany",
            tasks: dummyTasks
        } as Location
    ));

    const dummyTourData = Array.from({ length: 17 }, (_, index) => index + 1).map((number) => (
        {
            id: number,
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date(),
            locations: dummyLocations
        }
    ));

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