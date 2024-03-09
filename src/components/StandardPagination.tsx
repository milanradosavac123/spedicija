import { Pagination } from "@mantine/core";

interface StandardPaginationProps {
    value: number,
    total: number,
    shouldShowStandardWrapper?: boolean,
    onChange: (pageNumber: number) => void,
}

export default function StandardPagination({ value, total, shouldShowStandardWrapper = true, onChange }: StandardPaginationProps) {    
    return (
        <>
            {shouldShowStandardWrapper

                ?
                <div className="flex flex-row justify-center flex-1 py-9">
                    <Pagination
                        classNames={{
                            "control": "[&[data-active]]:bg-[#282147]",
                        }}
                        color="#282147"
                        value={value}
                        total={Math.floor(total)}
                        withEdges={Math.floor(total) > 2}
                        withControls={Math.floor(total) !== 1}
                        onChange={onChange}
                    />
                </div>
                : 
                <Pagination
                        classNames={{
                            "control": "[&[data-active]]:bg-[#282147]",
                        }}
                        color="#282147"
                        value={value}
                        total={Math.floor(total)}
                        withEdges={Math.floor(total) > 2}
                        withControls={Math.floor(total) !== 1}
                        onChange={onChange}
                    />
            }
        </>
    );
}