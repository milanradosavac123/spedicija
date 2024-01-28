"use client";

import { Button } from "@mantine/core";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";
import Image from "next/image";
import Link from "next/link";
import OutlinedTextField from "@/components/OutlinedTextField";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";

interface Location {
    name: string,
    address: string
}

export default function NewTourPage() {

    const [driverName, setDriverName] = useState("");
    const [vehicleName, setVehicleName] = useState("");

    const [locationsList, setLocationsList] = useState<Location[]>(
        [
            {
                name: "",
                address: "",
            }
        ]
    );

    function setLocationName(index: number, name: string) {
        locationsList[index].name = name;
        setLocationsList(locationsList);
    }

    function setLocationAddress(index: number, address: string) {
        locationsList[index].address = address;
        setLocationsList(locationsList);
    }

    function addLocation(location: Location) {
        setLocationsList([...locationsList, location]);
        const addButton = document.getElementById("add-button-div");
        addButton?.scrollIntoView();
    }

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
            <div className="flex flex-row flex-auto gap-5">
                <OutlinedTextField
                    label="Driver Name"
                    placeholder="Add your Driver here..."
                    value={driverName}
                    onChange={(s) => {
                        setDriverName(s);
                    }}
                />
                <OutlinedTextField
                    label="Vehicle Name"
                    placeholder="Add your Vehicle here..."
                    value={vehicleName}
                    onChange={(s) => {
                        setVehicleName(s);
                    }}
                />
            </div>
            {locationsList.map((location, i) => (
                <div className="flex flex-row flex-auto gap-5" key={i}>
                    <OutlinedTextField
                        label="Location Name"
                        placeholder="Add your Location Name here..."
                        value={location.name}
                        onChange={(s) => {
                            setLocationName(i, s);
                        }}
                    />
                    <OutlinedTextField
                        label="Location Address"
                        placeholder="Add your Location Address here..."
                        value={location.address}
                        onChange={(s) => {
                            setLocationAddress(i, s)
                        }}
                    />
                </div>
            ))}
            <div className="flex" id="add-button-div">
                <Button
                    className="bg-[#282147] flex-1"
                    onClick={() => {
                        addLocation(
                            {
                                name: "",
                                address: "",
                            }
                        )
                    }}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}