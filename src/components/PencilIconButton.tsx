import { ActionIcon, rem } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import clsx from "clsx";

interface PencilIconButtonProps {
    iconSize?: number,
    colour?: string,
    onClick?: () => void
}

export default function PencilIconButton({ iconSize = 18, colour, onClick }: PencilIconButtonProps) {
    return (
        <ActionIcon
            className={clsx("hover:bg-transparent", colour && colour === "white" && "cursor-default")}
            onClick={onClick}
        >
            <IconPencil style={{ width: rem(iconSize), height: rem(iconSize), color: colour ? colour : "#282147" }} stroke={1.5} />
        </ActionIcon>
    );
}