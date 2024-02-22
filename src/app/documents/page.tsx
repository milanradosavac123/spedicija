"use client"

import FileCard from "@/components/FileCard";
import Header from "@/components/Header";
import SelectInputField from "@/components/SelectInputField";
import StandardPagination from "@/components/StandardPagination";
import { documents } from "@/dummyData/dummyData";
import { useState } from "react";

export default function Documents() {

    const [gridDataPageNumber, setGridDataPageNumber] = useState(1);

    return (
        <div className="p-5 flex flex-col h-[100%] overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header headerContent="Documents" />
                    <hr />
                </div>
                <div className="flex flex-row justify-between py-5">
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
                    <SelectInputField
                        name="filter-by-tour"
                        label="Filter By Tour"
                        placeholder="None Selected"
                        onChange={(e) => {

                        }}
                    >
                        <option value="0">By name ascending</option>
                        <option value="1">By name descending</option>
                        <option value="2">By date newest to oldest</option>
                        <option value="3">By date oldest to newest</option>
                    </SelectInputField>
                    <SelectInputField
                        name="filter-by-route"
                        label="Filter By Route"
                        placeholder="None Selected"
                        onChange={(e) => {

                        }}
                    >
                        <option value="0">By name ascending</option>
                        <option value="1">By name descending</option>
                        <option value="2">By date newest to oldest</option>
                        <option value="3">By date oldest to newest</option>
                    </SelectInputField>
                </div>
                <div className="flex flex-row flex-auto flex-wrap overflow-y-auto">
                    {documents.slice(((gridDataPageNumber - 1) * 18), ((gridDataPageNumber - 1) * 18) + 18).map((document, i) => (
                        <FileCard
                            key={i}
                            {...document}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-row justify-center flex-1 py-9">
                <StandardPagination
                    value={gridDataPageNumber}
                    total={documents.length % 18 === 0 ? documents.length / 18 : (documents.length / 18) + 1}
                    onChange={setGridDataPageNumber}
                />
            </div>
        </div>
    );
}