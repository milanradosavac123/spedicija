import { ActionIcon, rem } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

interface XIconButtonProps {
    iconSize?: number,
    colour?: string,
    onClick?: () => void,
}

export default function XIconButton({ iconSize = 18, colour, onClick }: XIconButtonProps) {

    return (
        <ActionIcon
            className={
                `${colour && colour === "white" && "cursor-default"}`
            }
            onClick={onClick}
        >
            <IconX
                style={
                    {
                        width: rem(iconSize),
                        height: rem(iconSize),
                        color: colour
                            ? colour
                            : "#ff0000"
                    }
                }
                stroke={1.5}
            />
        </ActionIcon>
    );
}