import { ActionIcon, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import clsx from "clsx";

interface PlusIconButtonProps {
    iconSize?: number,
    colour?: string,
    onClick?: () => void
}

export default function PlusIconButton({ iconSize = 18, colour, onClick }: PlusIconButtonProps) {
    return (
        <ActionIcon
            className={clsx("hover:bg-transparent", colour && colour === "white" && "cursor-default")}
            onClick={onClick}
        >
            <IconPlus style={{ width: rem(iconSize), height: rem(iconSize), color: colour ? colour : "#282147" }} stroke={1.5} />
        </ActionIcon>
    );
}