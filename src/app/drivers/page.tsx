"use client";

import { DataTable } from "@/components/DataTable";
import Header from "@/components/Header";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardPagination from "@/components/StandardPagination";
import { DriverTableData, driverTableData } from "@/dummyData/dummyData";
import { useFormattedName } from "@/util/hooks/useFormattedName";
import { useState } from "react";

export default function Drivers() {

    const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

    const [driverDataList, setDriverDataList] = useState<DriverTableData[]>(driverTableData);

    return (
        <div className="p-5 flex flex-col h-full overflow-hidden">
            <div className="flex flex-col h-[90%]">
                <div className="flex flex-col">
                    <Header
                        headerContent="Drivers"
                        onSearch={(q) => {

                            if (q === "") {
                                setDriverDataList(driverTableData);
                                return
                            }

                            setDriverDataList(
                                driverTableData.filter((driverData) => {

                                    const name = useFormattedName(driverData.firstName, driverData.lastName).toLowerCase()

                                    return q.toLowerCase() === name || name.includes(q.toLowerCase());
                                }
                                ));
                        }}
                    />
                    <hr />
                </div>
                <div className="flex flex-row justify-end py-5">
                    <StandardLinkButton href="/drivers/new_driver" text="New Driver" />
                </div>
                <div className="flex flex-row flex-auto overflow-hidden">
                    <DataTable<DriverTableData>
                        tableData={driverDataList}
                        tableHeaders={["First Name", "Last Name"]}
                        tableDataPageNumber={tableDataPageNumber}
                    />
                </div>
            </div>
            <StandardPagination
                value={tableDataPageNumber}
                total={driverDataList.length % 18 === 0 ? driverDataList.length / 18 : (driverDataList.length / 18) + 1}
                onChange={setTableDataPageNumber}
            />
        </div>
    );
}