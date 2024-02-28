"use client";

import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardPagination from "@/components/StandardPagination";
import { useState } from "react";
import { TourTableData, tourTableData } from "@/dummyData/dummyData";
import DateTourFilter from "@/components/DateTourFilter";
import SelectInputField from "@/components/SelectInputField";
import { DataTable } from "@/components/DataTable";

export default function Tours() {

	const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

	const [tourDataList, setTourDataList] = useState<TourTableData[]>(tourTableData);

	return (
		<div className="p-5 flex flex-col h-[100%] overflow-hidden">
			<div className="flex flex-col h-[90%]">
				<div className="flex flex-col">
					<Header 
						headerContent="Active Tours"
						onSearch={(q) => {

                            if (q === "") {
                                setTourDataList(tourTableData);
                                return
                            }

                            setTourDataList(tourTableData.filter((tourData) => q.toLowerCase() === tourData.tourName.toLowerCase() || tourData.tourName.toLowerCase().includes(q.toLowerCase())));
                        }}
					/>
					<hr />
				</div>
				<div className="flex flex-row justify-between py-5">
					<StandardSegmentedControl data={["Active Tours", "Upcoming Tours", "Completed Tours"]} />

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
                        onChange={(e) => {

                        }}
                    />

					<StandardLinkButton text="New Tour" href="/tours/new_tour" />
				</div>
				<div className="flex flex-row flex-auto overflow-hidden">
					<DataTable<TourTableData>
						tableData={tourDataList}
						tableHeaders={["Tour Name", "Tour Driver", "Start Date", "End Date", "Loading/Unloading Status"]}
						tableDataPageNumber={tableDataPageNumber}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center flex-1 py-9">
				<StandardPagination
					value={tableDataPageNumber}
					total={tourDataList.length % 18 === 0 ? tourDataList.length / 18 : (tourDataList.length / 18) + 1}
					onChange={setTableDataPageNumber}
				/>
			</div>
		</div>
	);
}
