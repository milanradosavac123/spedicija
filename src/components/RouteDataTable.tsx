"use client";

import { Table, } from '@mantine/core';
import StandardPagination from './StandardPagination';

const data = Array.from({ length: 18 }, (_, index) => index + 1).map((number) => (
    {
        routeName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    }
));

export function RouteDataTable() {

    const rows = data.map((row, i) => (
        <Table.Tr key={i}>
            <Table.Td><center>{row.routeName}</center></Table.Td>
            <Table.Td><center>{row.driver}</center></Table.Td>
            <Table.Td><center>{row.startDate}</center></Table.Td>
            <Table.Td><center>{row.endDate}</center></Table.Td>
            <Table.Td><center>{row.luStatus}</center></Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <Table miw={700} mih={"100%"}>
                <Table.Thead /*className={cx(styles.header, { [styles.scrolled]: scrolled })}*/ >
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