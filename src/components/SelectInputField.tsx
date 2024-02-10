"use client";

import { ChangeEvent, ReactNode, useState } from "react";
import { Form } from "react-bootstrap";

interface SelectInputFieldProps {
    name: string,
    label?: string,
    placeholder: string,
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void,
    children: ReactNode[],
    [x: string]: any,
}

export default function SelectInputField({ name, label, placeholder, children, onChange, ...props }: SelectInputFieldProps) {

    const [isOptionSelected, setIsOptionSelected] = useState(false)

    return (
        <Form.Group className="flex flex-row items-center text-gray-500 font-[16px]" controlId={name + "-input"}>
            {label && <Form.Label className="pr-2" >{label}</Form.Label>}
            <Form.Select
                className="p-2 min-w-[10vw] bg-white border border-solid border-1 border-gray-400 rounded-[10px]"
                {...props}
                onChange={onChange}
                onClick={() => {
                    setIsOptionSelected(true);
                }}
            >
                <option disabled={isOptionSelected}>{placeholder}</option>
                {children}
            </Form.Select>
        </Form.Group>
    );
}