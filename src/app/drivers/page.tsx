"use client";

import { DriverDataTable } from "@/components/DriverDataTable";
import Header from "@/components/Header";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardPagination from "@/components/StandardPagination";
import { driverTableData } from "@/dummyData/dummyData";
import { useState } from "react";

export default function Drivers() {

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    return (
        <div className="p-5 flex flex-col h-[100%] overflow-hidden">
            <div className="flex flex-col h-[100%]">
                <div className="flex flex-col">
                    <Header headerContent="Drivers" />
                    <hr />
                </div>
                <div className="flex flex-row justify-end py-5">
                    <StandardLinkButton href="/drivers/new_driver" text="New Driver" />
                </div>
                <div className="flex flex-row flex-auto overflow-hidden">
                    <DriverDataTable
                        driverTableData={driverTableData}
                        tableDataPageNumber={tableDataPageNumber}
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <StandardPagination
                    value={tableDataPageNumber}
                    total={driverTableData.length % 18 === 0 ? driverTableData.length / 18 : (driverTableData.length / 18) + 1}
                    onChange={setTableDataPageNumber}
                />
            </div>
        </div>
    );
}