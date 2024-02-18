"use client";

import { Table } from '@mantine/core';
import { VehicleTableData } from '@/dummyData/dummyData';

interface VehicleDataTableProps {
    vehicleTableData: VehicleTableData[],
    tableDataPageNumber: number
}

export function VehicleDataTable({ vehicleTableData, tableDataPageNumber }: VehicleDataTableProps) {

    const rows = vehicleTableData.slice(((tableDataPageNumber - 1) * 18), ((tableDataPageNumber - 1) * 18) + 18).map((row, i) => (
        <Table.Tr key={i}>
            <Table.Td>{row.vehicleName}</Table.Td>
            <Table.Td>{row.vehicleType}</Table.Td>
            <Table.Td>{row.vehicleWeight}</Table.Td>
            <Table.Td>{row.vehicleHeight}</Table.Td>
            <Table.Td>{row.vehicleWidth}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table miw={700} mah={1}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Vehicle Name</Table.Th>
                    <Table.Th>Vehicle Type</Table.Th>
                    <Table.Th>Vehicle Weight (T)</Table.Th>
                    <Table.Th>Vehicle Height(m)</Table.Th>
                    <Table.Th>Vehicle Width (m)</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}