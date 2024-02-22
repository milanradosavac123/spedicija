"use client";

import { Card } from "react-bootstrap";
import StandardCheckBox from "./StandardCheckBox";
import { RefObject } from "react";

interface TourInfoCardProps {
    tourName: string,
    tourDriver: string,
    tourVehicle: string,
    tourDispacherName: string,
    dateCreated: Date,
    selected: boolean,
    reference?: RefObject<HTMLDivElement>
    onSelectedChanged: (newValue: boolean) => void;
}

export default function TourInfoCard({ tourName, tourDriver, tourVehicle, tourDispacherName, dateCreated, selected, reference, onSelectedChanged }: TourInfoCardProps) {
    return (
        <Card ref={reference} className="bg-[#F7F5FA] text-gray-500 drop-shadow-md p-2 m-[1vh] w-fit">
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
                <div className="flex flex-row gap-2 min-w-fit">
                    <Card.Text>Driver:</Card.Text>
                    <Card.Text className="text-black">{tourDriver}</Card.Text>
                </div>
            </Card.Footer>
        </Card>
    );
}