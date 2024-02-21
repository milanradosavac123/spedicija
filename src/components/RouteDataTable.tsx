"use client";

import { ScrollArea, Table, } from '@mantine/core';
import { RouteTableData } from '@/dummyData/dummyData';

interface RouteDataTableProps {
    routeTableData: RouteTableData[],
    tableDataPageNumber: number
}

export function RouteDataTable({ routeTableData, tableDataPageNumber }: RouteDataTableProps) {

    const rows = routeTableData.slice(((tableDataPageNumber - 1) * 18), ((tableDataPageNumber - 1) * 18) + 18).map((row, i) => (
        <Table.Tr key={i}>
            <Table.Td><center>{row.routeName}</center></Table.Td>
            <Table.Td><center>{row.driver}</center></Table.Td>
            <Table.Td><center>{row.startDate}</center></Table.Td>
            <Table.Td><center>{row.endDate}</center></Table.Td>
            <Table.Td><center>{row.luStatus}</center></Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea style={{ width: "100%" }}>
            <Table>
                <Table.Thead classNames={{
                    "thead": "sticky bg-white"
                }}>
                    <Table.Tr>
                        <Table.Th><center>Route Name</center></Table.Th>
                        <Table.Th><center>Driver</center></Table.Th>
                        <Table.Th><center>Start Date</center></Table.Th>
                        <Table.Th><center>End Date</center></Table.Th>
                        <Table.Th><center>Loading/Unloading Status</center></Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}