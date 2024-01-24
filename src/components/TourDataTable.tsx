"use client";

import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import styles from "./TourDataTable.module.css";

const data = [
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    },
    {
        tourName: "Berlin - Bonn",
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    }
];

export function TourDataTable() {

    const [scrolled, setScrolled] = useState(false);

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
        <ScrollArea h={720} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table miw={700}>
                <Table.Thead className={cx(styles.header, { [styles.scrolled]: scrolled })} >
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
        </ScrollArea>
    );
}