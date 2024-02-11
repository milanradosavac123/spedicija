"use client";

import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea, Pagination } from '@mantine/core';
import styles from "./RouteDataTable.module.css";

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

    //const [scrolled, setScrolled] = useState(false);

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
                <Pagination color="#282147" total={3} withEdges />
            </div>
        </div>
    );
}