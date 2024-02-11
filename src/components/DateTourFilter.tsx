import { ChangeEvent } from "react";
import SelectInputField from "./SelectInputField";

interface DateTourFilterProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function DateTourFilter({ onChange }: DateTourFilterProps) {
    return (
        <div>
            <SelectInputField
                name="filter-date"
                label="Filter by Date"
                placeholder="Select Date"
                onChange={onChange}
            >
                <option value="0">From Oldest to Newest tour</option>
                <option value="1">From Newest to Oldest tour</option>
                <option value="2">Tours created this year</option>
                <option value="3">Tours created this month</option>
                <option value="4">Tours created this week</option>
                <option value="5">Tours created today</option>
                <option value="6">Custom date range</option>
            </SelectInputField>
        </div>
    );
}