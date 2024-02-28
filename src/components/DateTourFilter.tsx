import { ChangeEvent } from "react";
import SelectInputField from "./SelectInputField";

interface DateTourFilterProps {
    filterType?: string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function DateTourFilter({ filterType = "Tours", onChange }: DateTourFilterProps) {
    return (
        <div>
            <SelectInputField
                name="filter-date"
                label="Filter by Date"
                placeholder="Select Date"
                onChange={onChange}
            >
                <option value="2">{filterType} created this year</option>
                <option value="3">{filterType} created this month</option>
                <option value="4">{filterType} created this week</option>
                <option value="5">{filterType} created today</option>
                <option value="6">Custom date range</option>
            </SelectInputField>
        </div>
    );
}