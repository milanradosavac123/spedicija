"use client";

import { RouteDataTable } from "@/components/RouteDataTable";
import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import StandardLinkButton from "@/components/StandardLinkButton";
import { routeTableData } from "@/dummyData/dummyData";
import { useState } from "react";
import StandardPagination from "@/components/StandardPagination";

export default function Routes() {

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    return (
        <div className="p-5 flex flex-col h-[100%] overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header headerContent="Routes" />
                    <hr />
                </div>
                <div className="flex flex-row justify-between py-5">
                    <StandardSegmentedControl data={["Active Routes", "Upcoming Routes", "Completed Routes"]} />

                    <StandardLinkButton text="New Route" href="/routes/select_tours" />
                </div>
                <div className="flex flex-row flex-auto overflow-hidden">
                    <RouteDataTable
                        routeTableData={routeTableData}
                        tableDataPageNumber={tableDataPageNumber}
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center flex-1 py-9">
                <StandardPagination
                    value={tableDataPageNumber}
                    total={routeTableData.length % 18 === 0 ? routeTableData.length / 18 : (routeTableData.length / 18) + 1}
                    onChange={setTableDataPageNumber}
                />
            </div>
        </div>
    );
}