"use client"

import { Card } from "react-bootstrap";
import XIconButton from "./XIconButton";

interface CompactFileCardProps {
    fileName: string,
    onDelete: () => void,
}

export default function CompactFileCard({ fileName, onDelete }: CompactFileCardProps) {
    return (
        <Card className="bg-[#F7F5FA] rounded-xl">
            <Card.Body className="flex flex-row p-[10px] justify-between items-center">
                <Card.Text className="pr-[20px]">{fileName[0].toUpperCase() + fileName.substring(1)}</Card.Text>

                <XIconButton iconSize={32} colour="#374151" onClick={onDelete} />
            </Card.Body>
        </Card>
    );
}