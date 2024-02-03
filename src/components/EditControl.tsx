import { ActionIcon, rem } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";

interface EditControlProps {
    isEditing: boolean,
    colour?: string,
    enabled?: boolean,
    iconSize?: number,
    children?: React.ReactNode
    onEdit?: () => void,
    onSave: () => void,
    onDismiss: () => void,
    onEditingChange?: (newValue: boolean) => void
}

export default function EditControl({ isEditing, colour, enabled = true, iconSize = 18, children, onEdit, onSave, onDismiss, onEditingChange }: EditControlProps) {

    return (
        <div className="flex flex-row items-center">
            {!isEditing && <ActionIcon onClick={() => {
                enabled && onEditingChange && onEditingChange(true);
                enabled && onEdit && onEdit();
            }} pt={2} fw={500} fz="xs">
                <IconPencil style={{ width: rem(iconSize), height: rem(iconSize), color: colour ? colour : "#282147" }} stroke={1.5} />
            </ActionIcon>}
            {children !== undefined && children}
            {isEditing && <ActionIcon onClick={() => {
                onEditingChange && onEditingChange(false);
                onSave();
            }}>
                <IconCheck style={{ width: rem(iconSize), height: rem(iconSize), color: colour ? colour : "#00ff00" }} stroke={1.5} />
            </ActionIcon>}
            {isEditing && <ActionIcon onClick={() => {
                onEditingChange && onEditingChange(false);
                onDismiss();
            }}>
                <IconX style={{ width: rem(iconSize), height: rem(iconSize), color: colour ? colour : "#ff0000" }} stroke={1.5} />
            </ActionIcon>}
        </div>
    );
}