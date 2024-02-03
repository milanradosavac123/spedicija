import CheckIconButton from "./CheckIconButton";
import XIconButton from "./XIconButton";

interface SaveDismissIconButtonGroupProps {
    iconSize?: number,
    colour?: string,
    onSaveClick: () => void,
    onDismissClick: () => void
}

export default function SaveDismissIconButtonGroup({ iconSize, colour, onSaveClick, onDismissClick }: SaveDismissIconButtonGroupProps) {
    return (
        <>
            <CheckIconButton
                iconSize={iconSize}
                colour={colour}
                onClick={onSaveClick}
            />
            <XIconButton
                iconSize={iconSize}
                colour={colour}
                onClick={onDismissClick}
            />
        </>
    );
}