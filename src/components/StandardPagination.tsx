import { Pagination } from "@mantine/core";

interface StandardPaginationProps {
    value: number,
    total: number,
    onChange: (pageNumber: number) => void,
}

export default function StandardPagination({ value, total, onChange }: StandardPaginationProps) {
    return (
        <Pagination
            classNames={{
                "control": "[&[data-active]]:bg-[#282147]",
            }}
            color="#282147"
            value={value}
            total={Math.round(total)}
            withEdges={total > 2}
            onChange={onChange}
        />
    );
}