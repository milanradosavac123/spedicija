"use client";

import { Table } from '@mantine/core';
import StandardPagination from './StandardPagination';

const data = Array.from({ length: 18 }, (_, index) => index + 1).map((number) => (
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    }
));

export function TourDataTable() {

    const rows = data.map((row, i) => (
        <Table.Tr key={i}>
            <Table.Td>{row.tourName}</Table.Td>
            <Table.Td>{row.driver}</Table.Td>
            <Table.Td>{row.startDate}</Table.Td>
            <Table.Td>{row.endDate}</Table.Td>
            <Table.Td>{row.luStatus}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <Table miw={700} mih={"100%"}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Tour Name</Table.Th>
                        <Table.Th>Driver</Table.Th>
                        <Table.Th>Start Date</Table.Th>
                        <Table.Th>End Date</Table.Th>
                        <Table.Th>Loading/Unloading Status</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            <div className="flex flex-row justify-center">
                <StandardPagination
                    value={1}
                    total={3}
                    onChange={(pageNumber) => {

                    }}
                />
            </div>
        </div>
    );
}