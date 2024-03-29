"use client";

import Header from "@/components/Header";
import OutlinedTextField from "@/components/OutlinedTextField";
import StandardCentredButton from "@/components/StandardCentredButton";
import StandardLinkButton from "@/components/StandardLinkButton";
import { useState } from "react";

export default function Vehicles() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="p-5 flex flex-col h-full">
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
                        value={firstName}
                        onChange={setFirstName}
                    />
                    <OutlinedTextField
                        label="Last Name"
                        placeholder="Add your Driver's Last Name here..."
                        value={lastName}
                        onChange={setLastName}
                    />
                </div>
                <StandardCentredButton
                    buttonText="Create Driver"
                    onClick={() => {
                        
                    }}
                />
            </div>
        </div>
    );
}