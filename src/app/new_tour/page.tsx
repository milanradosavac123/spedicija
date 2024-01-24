"use client";

import { Button, SegmentedControl } from "@mantine/core";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";
import Image from "next/image";
import Link from "next/link";
import OutlinedTextField from "@/components/OutlinedTextField";
import { useState } from "react";

export default function NewTourPage() {

    const [test, setTest] = useState("");

    return (
        <div className="p-5">
            <div className="flex flex-row justify-between py-5">
                <SegmentedControl
                    className="bg-gray-400 max-w-fit"
                    radius="xl"
                    size="md"
                    data={["Current Tours", "Upcoming Tours", "Past tours"]}
                />

                <Button
                    component={Link}
                    href="/"
                    className="bg-[#282147] max-w-fit flex-center"
                    pr={12}
                    rightSection={
                        <Image
                            src={IconBackToTab}
                            alt="new tour"
                        />
                    }
                >
                    Back To Tab
                </Button>
            </div>
            <div>
                <OutlinedTextField
                    label="test"
                    value={test}
                    onChange={(s) => {
                        setTest(s);
                    }}  
                />
            </div>
        </div>
    );
}