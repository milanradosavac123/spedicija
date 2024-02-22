import { FormCheck } from "react-bootstrap";

interface StandardCheckBoxProps {
    name: string,
    label?: string,
    checked: boolean,
    onCheckChange: (newValue: boolean) => void
}

export default function StandardCheckBox({ name, label, checked, onCheckChange }: StandardCheckBoxProps) {
    return (
        <FormCheck
            className={`text-gray-500 flex flex-row-reverse items-center ${label ? "gap-2" : ""}`}
            checked={checked}
            name={name}
            label={label}
            type="checkbox"
            onClick={() => {
                onCheckChange(!checked);
            }}
            onChange={(e) => {}}
        />
    );
}