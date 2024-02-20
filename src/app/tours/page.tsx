"use client";

import { TourDataTable } from "@/components/TourDataTable";
import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import StandardLinkButton from "@/components/StandardLinkButton";
import StandardPagination from "@/components/StandardPagination";
import { useState } from "react";
import { tourTableData } from "@/dummyData/dummyData";

export default function Tours() {

	const [tableDataPageNumber, setTableDataPageNumber] = useState(1);

	return (
		<div className="p-5 flex flex-col h-[100%] overflow-hidden">
			<div className="flex flex-col h-[90%]">
				<div className="flex flex-col">
					<Header headerContent="Active Tours" />
					<hr />
				</div>
				<div className="flex flex-row justify-between py-5">
					<StandardSegmentedControl />

					<StandardLinkButton text="New Tour" href="/tours/new_tour" />
				</div>
				<div className="flex flex-row flex-auto overflow-hidden">
					<TourDataTable
						tourTableData={tourTableData}
						tableDataPageNumber={tableDataPageNumber}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center flex-1 py-9">
				<StandardPagination
					value={tableDataPageNumber}
					total={tourTableData.length % 18 === 0 ? tourTableData.length / 18 : (tourTableData.length / 18) + 1}
					onChange={setTableDataPageNumber}
				/>
			</div>
		</div>
	);
}
