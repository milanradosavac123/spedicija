"use client";

import { Card } from "react-bootstrap";
import StandardCheckBox from "./StandardCheckBox";

interface TourInfoCardProps {
    tourName: string,
    tourDriver: string,
    tourVehicle: string,
    tourDispacherName: string,
    dateCreated: Date,
    onSelectionChanged: (newValue: boolean) => void;
}

export default function TourInfoCard({ tourName, tourDriver, tourVehicle, tourDispacherName, dateCreated }: TourInfoCardProps) {
    return (
        <Card className="bg-[#F7F5FA] text-gray-500 drop-shadow-md p-2">
            <Card.Header className="flex flex-col">
                <div className="flex flex-row justify-between" >
                    <Card.Subtitle></Card.Subtitle>
                    <StandardCheckBox
                        name="select-item"
                        label=""
                    />
                </div>
                <Card.Title className="text-gray-700">{tourName}</Card.Title>
            </Card.Header>
            <Card.Body>

            </Card.Body>
            <Card.Footer>

            </Card.Footer>
        </Card>
    );
}