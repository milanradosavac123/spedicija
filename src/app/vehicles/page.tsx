"use client";

import { DataTable } from "@/components/DataTable";
import Header from "@/components/Header";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardPagination from "@/components/StandardPagination";
import { VehicleTableData, vehicleTableData } from "@/dummyData/dummyData";
import { useState } from "react";

export default function Vehicles() {

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    const [vehicleDataList, setVehicleDataList] = useState<VehicleTableData[]>(vehicleTableData);

    return (
        <div className="p-5 flex flex-col h-full overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header
                        headerContent="Vehicles"
                        onSearch={(q) => {

                            if (q === "") {
                                setVehicleDataList(vehicleTableData);
                                return
                            }

                            setVehicleDataList(vehicleTableData.filter((vehicleData) => q.toLowerCase() === vehicleData.vehicleName.toLowerCase() || vehicleData.vehicleName.toLowerCase().includes(q.toLowerCase())));
                        }}
                    />
                    <hr />
                </div>
                <div className="flex flex-row justify-end py-5">
                    <StandardLinkButton href="/vehicles/new_vehicle" text="New Vehicle" />
                </div>
                <div className="flex flex-row flex-auto overflow-hidden">
                    <DataTable<VehicleTableData>
                        tableData={vehicleDataList}
                        tableHeaders={["Vehicle Name", "Vehicle Type", "Vehicle Weight (T)", "Vehicle Height (m)", "Vehicle Width (m)"]}
                        tableDataPageNumber={tableDataPageNumber}
                    />
                </div>
            </div>
            <StandardPagination
                value={tableDataPageNumber}
                total={vehicleDataList.length % 18 === 0 ? vehicleDataList.length / 18 : (vehicleDataList.length / 18) + 1}
                onChange={setTableDataPageNumber}
            />
        </div>
    );
}