import { ActionIcon, rem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface CheckIconButtonProps {
    iconSize?: number,
    colour?: string,
    onClick?: () => void
}

export default function CheckIconButton({ iconSize = 18, colour, onClick }: CheckIconButtonProps) {
    return (
        <ActionIcon className={`${colour && colour === "white" ? "cursor-default" : ""}`} onClick={onClick}>
            <IconCheck style={{ width: rem(iconSize), height: rem(iconSize), color: colour ? colour : "#00ff00" }} stroke={1.5} />
        </ActionIcon>
    );
}