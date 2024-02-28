"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import DateTourFilter from "@/components/DateTourFilter";
import Header from "@/components/Header";
import SelectInputField from "@/components/SelectInputField";
import StandardCheckBox from "@/components/StandardCheckBox";
import StandardLinkButton from "@/components/StandardLinkButton";
import TourInfoCard from "@/components/TourInfoCard";
import { useContext, useState } from "react";
import { IconCircle } from "@tabler/icons-react";
import { TourInfo, dummyTourData } from "@/dummyData/dummyData";
import StandardPagination from "@/components/StandardPagination";

export default function SelectTours() {

    const [isAllSelected, setIsAllSelected] = useState(false);

    const { setSelectedTourIds } = useContext(SelectedToursContext);

    const [intermediateSelectedTourIds, setIntermediateSelectedTourIds] = useState<number[]>([])

    const [tourDataList, setTourDataList] = useState<TourInfo[]>(dummyTourData);

    function addIntermediateSelectedTourId(tourId: number) {
        setIntermediateSelectedTourIds([...intermediateSelectedTourIds, tourId]);
    }

    function removeIntermediateSelectedTourId(i: number) {
        setIntermediateSelectedTourIds((oldSelectedTourIds) => {
            return [...oldSelectedTourIds.slice(0, i), ...oldSelectedTourIds.slice(i + 1)];
        });
    }

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    return (
        <div className="p-5 flex flex-col h-[100%] overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header 
                        headerContent="Select Tours"
                        onSearch={(q) => {

                            if (q === "") {
                                setTourDataList(dummyTourData);
                                return
                            }

                            setTourDataList(dummyTourData.filter((tourData) => q.toLowerCase() === tourData.tourName.toLowerCase() || tourData.tourName.toLowerCase().includes(q.toLowerCase())));
                        }}
                    />
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

                    <SelectInputField
                        name="sort-by"
                        label="Sort By"
                        placeholder="None Selected"
                        onChange={(e) => {

                        }}
                    >
                        <option value="0">By name ascending</option>
                        <option value="1">By name descending</option>
                        <option value="2">By date newest to oldest</option>
                        <option value="3">By date oldest to newest</option>
                    </SelectInputField>

                    <DateTourFilter
                        onChange={(e) => {

                        }}
                    />

                    <StandardCheckBox
                        name="select-all"
                        label={isAllSelected ? "Unselect All" : "Select All"}
                        checked={isAllSelected}
                        onCheckChange={(value) => {
                            value ? setIntermediateSelectedTourIds(tourDataList.map((tourInfo) => tourInfo.id)) : setIntermediateSelectedTourIds([]);
                            setIsAllSelected(value);
                        }}
                    />
                </div>
                <div className="grid grid-cols-9 overflow-y-auto overflow-x-hidden">
                    {tourDataList.slice(((tableDataPageNumber - 1) * 36), ((tableDataPageNumber - 1) * 36) + 36).map((tourInfo, i) => (
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
            <div className="flex flex-row w-[100%] justify-between flex-1 py-9">
                <IconCircle color="white" />
                <StandardPagination
                    value={tableDataPageNumber}
                    total={tourDataList.length % 36 === 0 ? tourDataList.length / 36 : (tourDataList.length / 36) + 1}
                    onChange={setTableDataPageNumber}
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