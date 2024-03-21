"use client";

import { Card } from "react-bootstrap";
import StandardCheckBox from "./StandardCheckBox";
import { RefObject } from "react";

interface TourInfoCardProps {
    tourName: string,
    tourDrivers: string[],
    tourVehicle: string,
    tourDispacherName: string,
    dateCreated: Date,
    selected: boolean,
    reference?: RefObject<HTMLDivElement>
    onSelectedChanged: (newValue: boolean) => void;
}

export default function TourInfoCard({ tourName, tourDrivers, tourVehicle, tourDispacherName, dateCreated, selected, reference, onSelectedChanged }: TourInfoCardProps) {
    return (
        <Card
            ref={reference}
            className="bg-[#F7F5FA] text-gray-500 drop-shadow-md p-2 m-[1vh] w-fit border-2 border-solid border-transparent rounded-xl hover:border-standard-purple cursor-default"
            onClick={() => {
                onSelectedChanged(!selected);
            }}
        >
            <Card.Header className="flex flex-col gap-y-1">
                <div className="flex flex-row items-center justify-between">
                    <Card.Subtitle className="self-auto">{dateCreated.toLocaleDateString(["en-GB"])}</Card.Subtitle>
                    <StandardCheckBox
                        name="select-item"
                        checked={selected}
                        onCheckChange={onSelectedChanged}
                    />
                </div>
                <Card.Title className="text-gray-700">{tourName}</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="flex flex-row gap-2 min-w-fit">
                    <Card.Text>Dispacher:</Card.Text>
                    <Card.Text className="text-black">{tourDispacherName}</Card.Text>
                </div>
            </Card.Body>
            <Card.Footer className="flex flex-col justify-between">
                <div className="flex flex-row gap-2 min-w-fit">
                    <Card.Text>Vehicle:</Card.Text>
                    <Card.Text className="text-black">{tourVehicle}</Card.Text>
                </div>
                    <Card.Text className="text-black"><span className="text-gray-500">Drivers:</span> {tourDrivers.join(", ")}</Card.Text>
            </Card.Footer>
        </Card>
    );
}