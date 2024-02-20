"use client";

import Header from "@/components/Header";
import OutlinedTextField from "@/components/OutlinedTextField";
import StandardLinkButton from "@/components/StandardLinkButton";
import { Group, Button } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";

export default function Vehicles() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [uniqueDeviceID, setUniqueDeviceID] = useState("");

    return (
        <div className="p-5 flex flex-col h-[100%]">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <Header headerContent="Drivers" />
                    <hr />
                </div>
                <div className="flex flex-row flex-auto justify-end py-5">
                    <StandardLinkButton href="/drivers" text="Back" forwardLink={false} />
                </div>
                <div className="grid grid-cols-3 gap-x-5">
                    <OutlinedTextField
                        label="First Name"
                        placeholder="Add your Driver's First Name here..."
                        value={firstName}
                        onChange={setFirstName}
                    />
                    <OutlinedTextField
                        label="Last Name"
                        placeholder="Add your Driver's Last Name here..."
                        value={lastName}
                        onChange={setLastName}
                    />
                    <OutlinedTextField
                        label="Unique Device ID"
                        placeholder="Add your Driver's Unique Device ID here..."
                        value={uniqueDeviceID}
                        onChange={setUniqueDeviceID}
                    />
                </div>
                <div className="flex flex-row flex-auto justify-center">
                    <Button
                        className="bg-[#282147] w-[20vw]"
                        onClick={() => {
                        }}
                    >
                        Create Driver
                    </Button>
                </div>
            </div>
        </div>
    );
}