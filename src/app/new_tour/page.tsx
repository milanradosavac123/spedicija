"use client";

import { Button } from "@mantine/core";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import Link from "next/link";
import OutlinedTextField from "@/components/OutlinedTextField";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import Header from "@/components/Header";
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewTourPage() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [shouldShowButton, setShouldShowButton] = useState(true);
    const [additionalTextFieldTypes, setAdditionalTextFieldTypes] = useState<string[]>([])

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
            <div className="flex flex-row gap-5">
                <OutlinedTextField
                    label="Add your Driver here..."
                    value={searchParams.get("driverName") !== null ? searchParams.get("driverName") as string : ""}
                    onChange={(s) => {
                        const params = new URLSearchParams(searchParams);
                        params.set("driverName", s);
                        replace(`${pathname}?${params.toString()}`);
                    }}
                />
                <OutlinedTextField
                    label="Add your Vehicle here..."
                    value={searchParams.get("vehicleName") !== null ? searchParams.get("vehicleName") as string : ""}
                    onChange={(s) => {
                        const params = new URLSearchParams(searchParams);
                        params.set("vehicleName", s);
                        replace(`${pathname}?${params.toString()}`);
                    }}
                />
            </div>
            <div className="grid grid-cols-3 gap-x-5 ">
                <OutlinedTextField
                    label="Add your Load Location here..."
                    value={searchParams.get("loadLocation") !== null ? searchParams.get("loadLocation") as string : ""}
                    onChange={(s) => {
                        const params = new URLSearchParams(searchParams);
                        params.set("loadLocation", s);
                        replace(`${pathname}?${params.toString()}`);
                    }}
                />
                <OutlinedTextField
                    label="Add your Unload Location here..."
                    value={searchParams.get("unloadLocation") !== null ? searchParams.get("unloadLocation") as string : ""}
                    onChange={(s) => {
                        const params = new URLSearchParams(searchParams);
                        params.set("unloadLocation", s);
                        replace(`${pathname}?${params.toString()}`);
                    }}
                />
                {additionalTextFieldTypes.map((value) => (
                    <OutlinedTextField
                        label={`Add your ${value} Location here...`}
                        value={searchParams.get(`${value.toLowerCase()}Location`) !== null ? searchParams.get(`${value.toLowerCase()}Location`) as string : ""}
                        onChange={(s) => {
                            const params = new URLSearchParams(searchParams);
                            params.set(`${value.toLowerCase()}Location`, s);
                            replace(`${pathname}?${params.toString()}`);
                        }}
                    />
                ))}
                {shouldShowButton &&
                    <Button
                        className="bg-[#282147] min-w-[30vw] min-h-max"
                        rightSection={
                            <Image
                                src={IconTabNew}
                                alt="add new tab"
                            />
                        }
                        onClick={() => {
                            setShouldShowButton(false);
                        }}
                    >
                        Add New Tab
                    </Button>
                }
                {!shouldShowButton &&
                    <OutlinedTextField
                        label="Add your New Location Type here..."
                        value={searchParams.get("newLocationType") !== null ? searchParams.get("newLocationType") as string : ""}
                        rightSectionWidth={52}
                        rightSection={
                            <Button
                                className="bg-[#282147] min-w-fit rounded-s-none cursor-pointer"
                                onClick={() => {
                                    setAdditionalTextFieldTypes([...additionalTextFieldTypes, searchParams.get("newLocationType") !== null ? searchParams.get("newLocationType") as string : ""]);
                                    const params = new URLSearchParams(searchParams);
                                    params.set("newLocationType", "");
                                    replace(`${pathname}?${params.toString()}`);
                                    setShouldShowButton(true);
                                }}
                            >
                                Ok
                            </Button>
                        }
                        onChange={(s) => {
                            const params = new URLSearchParams(searchParams);
                            params.set("newLocationType", s);
                            replace(`${pathname}?${params.toString()}`);
                        }}
                    />
                }
            </div>
        </div>
    );
}