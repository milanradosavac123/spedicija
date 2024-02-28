"use client";

import Header from "@/components/Header";
import OutlinedTextField from "@/components/OutlinedTextField";
import OutlinedNumberField from "@/components/OutlinedNumberField";
import StandardLinkButton from "@/components/StandardLinkButton";
import { Button } from "@mantine/core";
import { useState } from "react";

export default function Vehicles() {

    const [vehicleName, setVehicleName] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [vehicleWeight, setVehicleWeight] = useState(0);
    const [vehicleHeight, setVehicleHeight] = useState(0);
    const [vehicleWidth, setVehicleWidth] = useState(0);

    return (
        <div className="p-5 flex flex-col h-[100%]">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <Header headerContent="Vehicles" />
                    <hr />
                </div>
                <div className="flex flex-row flex-auto justify-end py-5">
                    <StandardLinkButton href="/vehicles" text="Back" forwardLink={false} />
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                    <OutlinedTextField
                        label="Vehicle Name"
                        placeholder="Add your Vehicle Name here..."
                        value={vehicleName}
                        onChange={setVehicleName}
                    />
                    <OutlinedTextField
                        label="Vehicle Type"
                        placeholder="Add your Vehicle Type here..."
                        value={vehicleType}
                        onChange={setVehicleType}
                    />
                    <OutlinedNumberField
                        label="Vehicle Height (m)"
                        placeholder="Add your Vehicle Height here..."
                        value={vehicleHeight === 0 ? "" : vehicleHeight}
                        onChange={(n) => {
                            setVehicleHeight(Number(n));
                        }}
                    />
                    <OutlinedNumberField
                        label="Vehicle Width (m)"
                        placeholder="Add your Vehicle Width here..."
                        value={vehicleWidth === 0 ? "" : vehicleWidth}
                        onChange={(n) => {
                            setVehicleWidth(Number(n));
                        }}
                    />
                    <OutlinedNumberField
                        className="col-span-2"
                        label="Vehicle Weight (T)"
                        placeholder="Add your Vehicle Weight here..."
                        value={vehicleWeight === 0 ? "" : vehicleWeight}
                        onChange={(n) => {
                            setVehicleWeight(Number(n));
                        }}
                    />
                </div>
                <div className="flex flex-row flex-auto justify-center">
                    <Button
                        className="bg-[#282147] w-[20vw]"
                        onClick={() => {
                        }}
                    >
                        Create Vehicle
                    </Button>
                </div>
            </div>
        </div>
    );
}