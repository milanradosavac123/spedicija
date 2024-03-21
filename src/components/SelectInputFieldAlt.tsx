import { ChangeEvent, ReactNode, useState } from "react";
import { Form } from "react-bootstrap";
import PlusIconButton from "./PlusIconButton";
import { rem } from "@mantine/core";
import XIconButton from "./XIconButton";

interface SelectInputFieldProps {
    name: string,
    label?: string,
    placeholder: string,
    children: ReactNode[],
    shouldShowPlus?: boolean,
    shouldShowX?: boolean,
    value?: string
    onChange?: (s: string) => void,
    onPlusClicked?: () => void,
    onXClicked?: () => void,
    [x: string]: any,
}

export default function SelectInputFieldAlt({ name, className, label, placeholder, children, shouldShowCancelSelectionButton = true, shouldShowPlus = false, shouldShowX = false, value, onChange, onPlusClicked, onXClicked, ...props }: SelectInputFieldProps) {

    return (
        <Form.Group className={`flex flex-row flex-auto items-center text-gray-500 font-[16px] ${className}`} controlId={name + "-input"}>
            <div className="flex flex-col flex-grow">
                {label && <Form.Label className="pr-2 text-standard-purple" >{label}</Form.Label>}
                <div className={`flex flex-row items-center mb-4 border-solid border-2 border-standard-purple rounded-xl ${!onPlusClicked && `h-[2.5rem]`}`}>
                    <div className={`p-1 flex flex-row flex-auto`}>
                        <Form.Select
                            value={value}
                            name={name}
                            className={`pl-2 flex-grow overflow-hidden bg-white ${value === "" || value === undefined ? "text-gray-400" : "text-black"}`}
                            {...props}
                            onChange={(e) => {
                                onChange && onChange(e.currentTarget.value);
                            }}
                        >
                            <option>{placeholder}</option>
                            {children}
                        </Form.Select>
                        {shouldShowX && onXClicked && <XIconButton iconSize={32} colour={"#282147"} onClick={() => {
                            onXClicked();
                        }} />}
                    </div>
                    {shouldShowPlus && <div className="p-1 flex flex-row justify-center border-l-2 border-solid border-standard-purple">
                        {shouldShowPlus && onPlusClicked && <PlusIconButton iconSize={32} colour={"#282147"} onClick={onPlusClicked} />}
                    </div>}
                </div>
            </div>
        </Form.Group>
    );
}