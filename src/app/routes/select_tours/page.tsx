"use client";

import { SelectedToursContext } from "@/app/ContextWrapper";
import DateTourFilter from "@/components/DateTourFilter";
import Header from "@/components/Header";
import SelectInputField from "@/components/SelectInputField";
import StandardCheckBox from "@/components/StandardCheckBox";
import StandardLinkButton from "@/components/StandardLinkButton";
import TourInfoCard from "@/components/TourInfoCard";
import { useContext, useMemo, useState } from "react";
import { IconCircle } from "@tabler/icons-react";
import { TourInfo, dummyTourData } from "@/dummyData/dummyData";
import StandardPagination from "@/components/StandardPagination";
import CardGrid from "@/components/CardGrid";

export default function SelectTours() {

    const [isAllSelected, setIsAllSelected] = useState(false);

    const { setSelectedTourIds } = useContext(SelectedToursContext);

    const [intermediateSelectedTourIds, setIntermediateSelectedTourIds] = useState<number[]>([])

    const [tourDataList, setTourDataList] = useState<TourInfo[]>(dummyTourData);

    const [gridDataPageNumber, setTableDataPageNumber] = useState(1);

    const pagedTourDataList = useMemo(() => {
        return tourDataList.slice(((gridDataPageNumber - 1) * 36), ((gridDataPageNumber - 1) * 36) + 36);
    }, [tourDataList, gridDataPageNumber]);

    function addIntermediateSelectedTourId(tourId: number) {
        setIntermediateSelectedTourIds([...intermediateSelectedTourIds, tourId]);
    }

    function removeIntermediateSelectedTourId(i: number) {
        setIntermediateSelectedTourIds((oldSelectedTourIds) => {
            return [...oldSelectedTourIds.slice(0, i), ...oldSelectedTourIds.slice(i + 1)];
        });
    }


    return (
        <div className="p-5 flex flex-col h-full overflow-hidden">
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
                <CardGrid
                    shouldDistributeChildrenEvenly={pagedTourDataList.length > 9}
                >
                    {pagedTourDataList.map((tourInfo, i) => (
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
                </CardGrid>
            </div>
            <div className="flex flex-row justify-between flex-1 py-9">
                <IconCircle color="white" />
                <StandardPagination
                    value={gridDataPageNumber}
                    total={tourDataList.length % 36 === 0 ? tourDataList.length / 36 : (tourDataList.length / 36) + 1}
                    shouldShowStandardWrapper={false}
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