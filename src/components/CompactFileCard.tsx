"use client"

import { Card, Text } from "@mantine/core";
import XIconButton from "./XIconButton";

interface CompactFileCardProps {
    fileName: string,
    onDelete: () => void,
}

export default function CompactFileCard({ fileName, onDelete }: CompactFileCardProps) {
    return (
        <Card className="bg-[#F7F5FA] rounded-xl">
            <Card.Section className="flex flex-row p-[10px] justify-between items-center">
                <Text className="pr-[20px]">{fileName[0].toUpperCase() + fileName.substring(1)}</Text>

                <XIconButton iconSize={32} colour="#374151" onClick={onDelete} />
            </Card.Section>
        </Card>
    );
}