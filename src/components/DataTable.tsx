"use client";

import { ScrollArea, Table, } from '@mantine/core';

interface DataTableProps<T> {
    tableData: T[],
    tableHeaders: string[],
    tableDataPageNumber: number,
}

export function DataTable<T>({ tableData, tableHeaders, tableDataPageNumber }: DataTableProps<T>) {

    const rows = tableData.slice(((tableDataPageNumber - 1) * 18), ((tableDataPageNumber - 1) * 18) + 18).map((row, i) => {

        const rowPropValues = Object.values(row!!).map((value) => value as string);

        return <Table.Tr key={i}>
            {rowPropValues.map((value, j) => (
                <Table.Td
                    key={j}
                >
                    <center>{value}</center>
                </Table.Td>
            ))}
        </Table.Tr>
    });

    return (
        <ScrollArea style={{ width: "100%" }}>
            <Table>
                <Table.Thead classNames={{
                    "thead": "sticky bg-white"
                }}>
                    <Table.Tr>
                        {tableHeaders.map((header, i) => (
                            <Table.Th
                                key={i}
                            >
                                <center>{header}</center>
                            </Table.Th>
                        ))}
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}