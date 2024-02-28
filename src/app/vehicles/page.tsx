"use client";

import Header from "@/components/Header";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardPagination from "@/components/StandardPagination";
import { VehicleDataTable } from "@/components/VehicleDataTable";
import { VehicleTableData, vehicleTableData } from "@/dummyData/dummyData";
import { useState } from "react";

export default function Vehicles() {

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    const [vehicleDataList, setVehicleDataList] = useState<VehicleTableData[]>(vehicleTableData);

    return (
        <div className="p-5 flex flex-col h-[100%] overflow-hidden">
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
                    <VehicleDataTable
                        vehicleTableData={vehicleDataList}
                        tableDataPageNumber={tableDataPageNumber}
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center flex-1 py-9">
                <StandardPagination
                    value={tableDataPageNumber}
                    total={vehicleDataList.length % 18 === 0 ? vehicleDataList.length / 18 : (vehicleDataList.length / 18) + 1}
                    onChange={setTableDataPageNumber}
                />
            </div>
        </div>
    );
}