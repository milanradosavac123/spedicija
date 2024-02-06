import { FormCheck } from "react-bootstrap";

interface StandardCheckBoxProps {
    name: string,
    label: string
}

export default function StandardCheckBox({ name, label }: StandardCheckBoxProps) {
    return (
        <FormCheck
            className={`text-gray-500 flex flex-row-reverse items-center ${label ? "gap-2" : ""}`}
            name={name}
            label={label}
            type="checkbox"
            reverse={true}
        />
    );
}