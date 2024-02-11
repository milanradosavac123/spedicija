"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import { Location } from "@/app/new_tour/page";
import Header from "@/components/Header";
import SelectInputField from "@/components/SelectInputField";
import StandardCheckBox from "@/components/StandardCheckBox";
import StandardLinkButton from "@/components/StandardLinkButton";
import TourInfoCard from "@/components/TourInfoCard";
import { useContext, useState } from "react";

export default function SelectToursPage() {

    const dummyLocations = Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
        {
            name: "fodhspojhsafjkudshfoi",
            address: "Berlin, Germany",
        } as Location
    ));

    const dummyTourData =  Array.from({ length: 17 }, (_, index) => index + 1).map((number) => (
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

    const [isAllSelected, setIsAllSelected] = useState(false);

    const {selectedTourIds, setSelectedTourIds} = useContext(SelectedToursContext);

    function addSelectedTourId(tourId: number) {
        setSelectedTourIds([...selectedTourIds, tourId]);
    }

    function removeSelectedTourId(i: number) {
        setSelectedTourIds((oldSelectedTourIds) => {
            return [...oldSelectedTourIds.slice(0, i), ...oldSelectedTourIds.slice(i + 1)];
        });
    }

    return (
        <div className="p-5 flex flex-col flex-grow">
            <Header headerContent="Routes" />
            <hr />
            <div className="flex flex-row justify-between py-5">
                <SelectInputField name="driver" label="Driver" placeholder="Select Driver" onChange={(e) => {

                }}>

                    <option value={0}>Milos</option>
                    <option value={1}>Mileta</option>
                </SelectInputField>
                <SelectInputField name="vehicle" label="Vehicle" placeholder="Select Vehicle" onChange={(e) => {

                }}>

                    <option value={0}>Man</option>
                    <option value={1}>Mercedes</option>
                </SelectInputField>

                <StandardCheckBox
                    name="select-all"
                    label="Select All"
                    checked={isAllSelected}
                    onCheckChange={(value) => {
                        value ? setSelectedTourIds(dummyTourData.map((tourInfo) => tourInfo.id)) : setSelectedTourIds([]);
                        setIsAllSelected(value);
                    }}
                />
            </div>
            <div className="grid grid-cols-5 gap-[10pt]">
                {dummyTourData.map((tourInfo, i) => (
                    <TourInfoCard
                        key={i}
                        {...tourInfo}
                        selected={isAllSelected || selectedTourIds.includes(tourInfo.id)}
                        onSelectedChanged={() => {
                            if(selectedTourIds.includes(tourInfo.id)) {
                                removeSelectedTourId(selectedTourIds.indexOf(tourInfo.id));
                            } else addSelectedTourId(tourInfo.id);
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-row flex-auto justify-end">
                <StandardLinkButton href="/routes/select_tours/new_route" text="Create new route" />
            </div>
        </div>
    );
}