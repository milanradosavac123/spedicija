"use client";

import Header from "@/components/Header";
import OutlinedTextField from "@/components/OutlinedTextField";
import StandardLinkButton from "@/components/StandardLinkButton";
import { Group, Button } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import PencilIconButton from "@/components/PencilIconButton";

export default function Vehicles() {



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
                <div className="grid grid-cols-2 gap-x-5">
                    <OutlinedTextField
                        label="First Name"
                        placeholder="Add your Driver's First Name here..."
                        value=""
                        onChange={(s) => {
                            
                        }}
                    />
                    <OutlinedTextField
                        label="Last Name"
                        placeholder="Add your Driver's Last Name here..."
                        value=""
                        onChange={(s) => {
                            
                        }}
                    />
                    <OutlinedTextField
                        label="Unique Device ID"
                        placeholder="Add your Driver's Unique Device ID here..."
                        value=""
                        onChange={(s) => {
                            
                        }}
                    />
                    <div className="flex flex-col flex-auto">
                        <Group justify="space-between" mb={5}>
                            <FormControl disabled={true} value="fidj[aofdjsodisfdosiopsf" className="text-white no-select" size="sm" />
                        </Group>
                        <Button
                            className="bg-[#282147] min-w-[20vw]"
                            rightSection={
                                <Image
                                    src={IconTabNew}
                                    alt=""
                                />
                            }
                            onClick={() => {
                            }}
                        >
                            Add New Driver
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}