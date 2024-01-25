"use client";

import { Button } from "@mantine/core";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";
import Image from "next/image";
import Link from "next/link";
import OutlinedTextField from "@/components/OutlinedTextField";
import { useState } from "react";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import Header from "@/components/Header";

export default function NewTourPage() {

    const [test, setTest] = useState("");

    return (
        <div className="p-5">
            <Header headerText="Active Tours" />
            <hr />
            <div className="flex flex-row justify-between py-5">
                <StandardSegmentedControl />

                <Button
                    component={Link}
                    href="/"
                    className="bg-[#282147] max-w-fit flex-center"
                    pr={12}
                    rightSection={
                        <Image
                            src={IconBackToTab}
                            alt="back to tab"
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