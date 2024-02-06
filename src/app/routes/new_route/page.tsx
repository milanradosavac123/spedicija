"use client";

import Header from "@/components/Header";
import SelectInputField from "@/components/SelectInputField";
import StandardCheckBox from "@/components/StandardCheckBox";
import TourInfoCard from "@/components/TourInfoCard";
import { FormCheck } from "react-bootstrap";

export default function NewRoutePage() {

    const dummyTourData = [
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        },
        {
            tourName: "Berlin - Bonn",
            tourDriver: "Milos",
            tourVehicle: "Mercedes",
            tourDispacherName: "Philipp",
            dateCreated: new Date()
        }
    ]

    return (
        <div className="p-5">
            <Header headerContent="Routes" shouldShowSearchField={false} />
            <hr />
            <div className="flex flex-row justify-between py-5">
                <SelectInputField name="driver" label="Driver" placeholder="Select Driver" onChange={(e) => {
                    
                }}>
                    
                    <option value={0}>Milos</option>
                    <option value={1}>Mileta</option>
                </SelectInputField>
                <SelectInputField name="vehicle" label="Vehicle" placeholder="Select Vehicle" onChange={(e) => {
                    
                }}>
                    
                    <option value={0}>Man</option>
                    <option value={1}>Mercedes</option>
                </SelectInputField>

                <StandardCheckBox
                    name="select-all"
                    label="Select All"
                />
            </div>
            {/* <div className="grid grid-cols-5 gap-[10pt]">
                {dummyTourData.map((tourInfo, i) => (
                    <TourInfoCard
                        key={i}
                        {...tourInfo}
                        onSelectionChanged={(newValue) => {

                        }}
                    />
                ))}
            </div> */}
        </div>
    );
}