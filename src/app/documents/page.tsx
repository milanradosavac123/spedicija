"use client";

import FileCard from "@/components/FileCard";
import Header from "@/components/Header";
import SearchableSelectInputField from "@/components/SearchableSelectInputField";
import SelectInputField from "@/components/SelectInputField";
import StandardPagination from "@/components/StandardPagination";
import { Document, documents } from "@/dummyData/dummyData";
import { useState } from "react";

export default function Documents() {

    const [gridDataPageNumber, setGridDataPageNumber] = useState(1);

    const [documentList, setDocumentList] = useState<Document[]>(documents);

    return (
        <div className="p-5 flex flex-col h-[100%] overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header
                        headerContent="Documents"
                        onSearch={(q) => {

                            if (q === "") {
                                setDocumentList(documents);
                                return
                            }

                            setDocumentList(documents.filter((document) => q.toLowerCase() === document.fileName.toLowerCase()))
                        }}
                    />
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
                    <SearchableSelectInputField
                        name="filter-by-tour"
                        label="Filter By Tour"
                        placeholder="None Selected"
                        optionsList={
                            [
                                "Berlin - Bonn",
                                "London - Paris",
                                "Sheffield - Grimsby"
                            ]
                        }
                        onChange={(e) => {

                        }}
                    />
                    <SearchableSelectInputField
                        name="filter-by-route"
                        label="Filter By Route"
                        placeholder="None Selected"
                        optionsList={
                            [
                                "Berlin - Bonn",
                                "London - Paris",
                                "Sheffield - Grimsby"
                            ]
                        }
                        onChange={(e) => {

                        }}
                    />
                </div>
                <div className="grid grid-cols-6 overflow-y-auto overflow-x-hidden">
                    {documentList.slice(((gridDataPageNumber - 1) * 18), ((gridDataPageNumber - 1) * 18) + 18).map((document, i) => (
                        <FileCard
                            key={i}
                            {...document}
                        />
                    ))}
                </div>
            </div>
            <StandardPagination
                value={gridDataPageNumber}
                total={documentList.length % 18 === 0 ? documentList.length / 18 : (documentList.length / 18) + 1}
                onChange={setGridDataPageNumber}
            />
        </div>
    );
}