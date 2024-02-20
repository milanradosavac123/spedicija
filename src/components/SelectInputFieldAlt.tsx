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
    shouldShowX?: boolean,
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void,
    onPlusClicked?: () => void,
    onXClicked?: () => void,
    [x: string]: any,
}

export default function SelectInputFieldAlt({ name, className, label, placeholder, children, shouldShowCancelSelectionButton = true, shouldShowX = false, onChange, onPlusClicked, onXClicked, ...props }: SelectInputFieldProps) {

    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const [selectedOption, setSelectedOption] = useState(placeholder);

    return (
        <Form.Group className={`flex flex-row flex-auto items-center text-gray-500 font-[16px] ${className}`} controlId={name + "-input"}>
            <div className="flex flex-col flex-grow">
                {label && <Form.Label className="pr-2 text-[#282147]" >{label}</Form.Label>}
                <div className={`p-1 flex flex-row items-center mb-4 border-solid border-2 border-[#282147] rounded-[10px] ${!onPlusClicked && `h-[2.5rem]`} `}>
                    <Form.Select
                        value={selectedOption}
                        className={`pl-2 flex-grow overflow-hidden bg-white ${selectedOption === placeholder ? "text-gray-400" : "text-black"}`}
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
                    {!shouldShowX && onPlusClicked && <PlusIconButton iconSize={32} colour={"#282147"} onClick={onPlusClicked} />}
                    {shouldShowX && onXClicked && <XIconButton iconSize={32} colour={"#282147"} onClick={onXClicked} />}
                </div>
            </div>
        </Form.Group>
    );
}