import XIconButton from "./XIconButton";
import CheckIconButton from "./CheckIconButton";
import PencilIconButton from "./PencilIconButton";
import SaveDismissIconButtonGroup from "./SaveDismissIconButtonGroup";

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
            {!isEditing && enabled &&
                <PencilIconButton
                    iconSize={iconSize}
                    colour={colour}
                    onClick={() => {
                        enabled && onEditingChange && onEditingChange(true);
                        enabled && onEdit && onEdit();
                    }}
                />
            }
            {children !== undefined && children}
            {isEditing &&
                <>
                    <SaveDismissIconButtonGroup
                        iconSize={iconSize}
                        colour={colour}
                        onSaveClick={() => {
                            onEditingChange && onEditingChange(false);
                            onSave();
                        }}
                        onDismissClick={() => {
                            onEditingChange && onEditingChange(false);
                            onDismiss();
                        }}
                    />
                </>
            }
        </div>
    );
}