"use client";

import { ScrollArea, Table } from '@mantine/core';
import { TourTableData } from '@/dummyData/dummyData';

interface TourDataTableProps {
    tourTableData: TourTableData[],
    tableDataPageNumber: number
}

export function TourDataTable({ tourTableData, tableDataPageNumber }: TourDataTableProps) {

    const rows = tourTableData.slice(((tableDataPageNumber - 1) * 18), ((tableDataPageNumber - 1) * 18) + 18).map((row, i) => (
        <Table.Tr key={i}>
            <Table.Td>{row.tourName}</Table.Td>
            <Table.Td>{row.tourDriver}</Table.Td>
            <Table.Td>{row.startDate}</Table.Td>
            <Table.Td>{row.endDate}</Table.Td>
            <Table.Td>{row.luStatus}</Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea style={{ width: '100%' }}>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Tour Name</Table.Th>
                        <Table.Th>Tour Driver</Table.Th>
                        <Table.Th>Start Date</Table.Th>
                        <Table.Th>End Date</Table.Th>
                        <Table.Th>Loading/Unloading Status</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}