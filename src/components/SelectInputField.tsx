"use client";

import { ChangeEvent, ReactNode, useState } from "react";
import { Form } from "react-bootstrap";
import XIconButton from "./XIconButton";

interface SelectInputFieldProps {
    name: string,
    label?: string,
    placeholder: string,
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void,
    children: ReactNode[],
    [x: string]: any,
}

export default function SelectInputField({ name, label, placeholder, children, onChange, ...props }: SelectInputFieldProps) {

    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const [selectedOption, setSelectedOption] = useState(placeholder);

    return (
        <Form.Group className="flex flex-row items-center text-gray-500 font-[16px]" controlId={name + "-input"}>
            {label && <Form.Label className="pr-2" >{label}</Form.Label>}
            <Form.Select
                value={selectedOption}
                className="p-2 min-w-[10vw] bg-white border border-solid border-1 border-gray-400 rounded-[10px]"
                {...props}
                onChange={(e) => {
                    onChange && setSelectedOption(e.currentTarget.value);
                    onChange && onChange(e);
                }}
                onClick={() => {
                    setIsOptionSelected(true);
                }}
            >
                <option disabled={isOptionSelected}>{placeholder}</option>
                {children}
            </Form.Select>
            <XIconButton iconSize={24} colour="#6b7280" onClick={() => {
                setIsOptionSelected(false);
                setSelectedOption("");
                onChange && isOptionSelected && onChange({ currentTarget: { value: "" } } as ChangeEvent<HTMLSelectElement>)
            }} />
        </Form.Group>
    );
}