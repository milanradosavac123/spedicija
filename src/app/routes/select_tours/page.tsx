"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import { Location } from "@/app/tours/new_tour/page";
import DateTourFilter from "@/components/DateTourFilter";
import Header from "@/components/Header";
import SelectInputField from "@/components/SelectInputField";
import StandardCheckBox from "@/components/StandardCheckBox";
import StandardLinkButton from "@/components/StandardLinkButton";
import TourInfoCard from "@/components/TourInfoCard";
import { useContext, useRef, useState } from "react";
import { Pagination } from "@mantine/core";
import { IconCircle } from "@tabler/icons-react";
import { dummyTourData } from "@/dummyData/dummyData";
import StandardPagination from "@/components/StandardPagination";

export default function SelectToursPage() {

    const [isAllSelected, setIsAllSelected] = useState(false);

    const { setSelectedTourIds } = useContext(SelectedToursContext);

    const [intermediateSelectedTourIds, setIntermediateSelectedTourIds] = useState<number[]>([])


    function addIntermediateSelectedTourId(tourId: number) {
        setIntermediateSelectedTourIds([...intermediateSelectedTourIds, tourId]);
    }

    function removeIntermediateSelectedTourId(i: number) {
        setIntermediateSelectedTourIds((oldSelectedTourIds) => {
            return [...oldSelectedTourIds.slice(0, i), ...oldSelectedTourIds.slice(i + 1)];
        });
    }

    const [taskInfoPageNumber, setTaskInfoPageNumber] = useState(1);

    return (
        <div className="p-5 flex flex-col h-[100%]">
            <div className="flex flex-col h-[100%]">
                <div className="flex flex-row">
                    <Header headerContent="Routes" />
                    <hr />
                </div>
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

                    <DateTourFilter onChange={(e) => {
                        console.log("test");
                    }} />

                    <StandardCheckBox
                        name="select-all"
                        label={isAllSelected ? "Unselect All" : "Select All"}
                        checked={isAllSelected}
                        onCheckChange={(value) => {
                            value ? setIntermediateSelectedTourIds(dummyTourData.map((tourInfo) => tourInfo.id)) : setIntermediateSelectedTourIds([]);
                            setIsAllSelected(value);
                        }}
                    />
                </div>
                <div className="flex flex-row flex-wrap">
                    {dummyTourData.slice(((taskInfoPageNumber - 1) * 36),((taskInfoPageNumber - 1) * 36) + 36).map((tourInfo, i) => (
                        <TourInfoCard
                            key={i}
                            {...tourInfo}
                            selected={isAllSelected || intermediateSelectedTourIds.includes(tourInfo.id)}
                            onSelectedChanged={() => {
                                if (intermediateSelectedTourIds.includes(tourInfo.id)) {
                                    removeIntermediateSelectedTourId(intermediateSelectedTourIds.indexOf(tourInfo.id));
                                } else addIntermediateSelectedTourId(tourInfo.id);
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-row w-[100%] justify-between">
                <IconCircle color="white" />
                <StandardPagination
                    value={taskInfoPageNumber}
                    total={dummyTourData.length % 36 === 0 ? dummyTourData.length / 36 : (dummyTourData.length / 36) + 1}
                    onChange={(pageNumber) => {
                        setTaskInfoPageNumber(pageNumber);
                    }}
                />
                <StandardLinkButton
                    href="/routes/select_tours/new_route"
                    text="Create new route"
                    onClick={() => {
                        setSelectedTourIds(intermediateSelectedTourIds);
                    }}
                />
            </div>
        </div>
    );
}