import { ActionIcon, rem } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

interface PencilIconButtonProps {
    iconSize?: number,
    colour?: string,
    onClick?: () => void
}

export default function PencilIconButton({ iconSize = 18, colour, onClick }: PencilIconButtonProps) {
    return (
        <ActionIcon className={`${colour && colour === "white" && "cursor-default"}`} onClick={onClick}>
            <IconPencil style={{ width: rem(iconSize), height: rem(iconSize), color: colour ? colour : "#282147" }} stroke={1.5} />
        </ActionIcon>
    );
}