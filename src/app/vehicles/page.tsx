"use client";

import Header from "@/components/Header";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardPagination from "@/components/StandardPagination";
import { VehicleDataTable } from "@/components/VehicleDataTable";
import { vehicleTableData } from "@/dummyData/dummyData";
import { useState } from "react";

export default function Vehicles() {

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    return (
        <div className="p-5 flex flex-col h-[100%] overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header headerContent="Vehicles" />
                    <hr />
                </div>
                <div className="flex flex-row justify-end py-5">
                    <StandardLinkButton href="/vehicles/new_vehicle" text="New Vehicle" />
                </div>
                <div className="flex flex-row flex-auto overflow-hidden">
                    <VehicleDataTable
                        vehicleTableData={vehicleTableData}
                        tableDataPageNumber={tableDataPageNumber}
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center flex-1 py-9">
                <StandardPagination
                    value={tableDataPageNumber}
                    total={vehicleTableData.length % 18 === 0 ? vehicleTableData.length / 18 : (vehicleTableData.length / 18) + 1}
                    onChange={setTableDataPageNumber}
                />
            </div>
        </div>
    );
}