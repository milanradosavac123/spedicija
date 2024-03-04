"use client";

import { DataTable } from "@/components/DataTable";
import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import StandardLinkButton from "@/components/StandardLinkButton";
import { RouteTableData, routeTableData } from "@/dummyData/dummyData";
import { useState } from "react";
import StandardPagination from "@/components/StandardPagination";
import DateTourFilter from "@/components/DateTourFilter";
import SelectInputField from "@/components/SelectInputField";

export default function Routes() {

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    const [routeDataList, setRouteDataList] = useState<RouteTableData[]>(routeTableData);

    return (
        <div className="p-5 flex flex-col h-full overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header
                        headerContent="Routes"
                        onSearch={(q) => {

                            if (q === "") {
                                setRouteDataList(routeTableData);
                                return
                            }

                            setRouteDataList(routeTableData.filter((routeData) => q.toLowerCase() === routeData.routeName.toLowerCase() || routeData.routeName.toLowerCase().includes(q.toLowerCase())));
                        }}
                    />
                    <hr />
                </div>
                <div className="flex flex-row justify-between py-5">
                    <StandardSegmentedControl data={["Active Routes", "Upcoming Routes", "Completed Routes"]} />

                    <SelectInputField
                        name="sort-by"
                        label="Sort By"
                        placeholder="None Selected"
                        onChange={(e) => {

                        }}
                    >
                        <option value="0">By name ascending</option>
                        <option value="1">By name descending</option>
                    </SelectInputField>

                    <DateTourFilter
                        filterType="Routes"
                        onChange={(e) => {

                        }}
                    />

                    <StandardLinkButton text="New Route" href="/routes/select_tours" />
                </div>
                <div className="flex flex-row flex-auto overflow-hidden">
                    <DataTable<RouteTableData>
                        tableData={routeDataList}
                        tableHeaders={["Route Name", "Driver", "Start Date", "End Date", "Loading/Unloading Status"]}
                        tableDataPageNumber={tableDataPageNumber}
                    />
                </div>
            </div>
            <StandardPagination
                value={tableDataPageNumber}
                total={routeDataList.length % 18 === 0 ? routeDataList.length / 18 : (routeDataList.length / 18) + 1}
                onChange={setTableDataPageNumber}
            />
        </div>
    );
}