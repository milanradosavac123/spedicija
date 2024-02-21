"use client";

import { ScrollArea, Table } from '@mantine/core';
import { DriverTableData, VehicleTableData } from '@/dummyData/dummyData';

interface VehicleDataTableProps {
    driverTableData: DriverTableData[],
    tableDataPageNumber: number
}

export function DriverDataTable({ driverTableData, tableDataPageNumber }: VehicleDataTableProps) {

    const rows = driverTableData.slice(((tableDataPageNumber - 1) * 18), ((tableDataPageNumber - 1) * 18) + 18).map((row, i) => (
        <Table.Tr key={i}>
            <Table.Td>{row.firstName}</Table.Td>
            <Table.Td>{row.lastName}</Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea style={{ width: '100%' }}>
            <Table>
                <Table.Thead classNames={{
                    "thead": "sticky bg-white"
                }}>
                    <Table.Tr>
                        <Table.Th>First Name</Table.Th>
                        <Table.Th>Last Name</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}