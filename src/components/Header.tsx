"use client";

import { AccountDropdown } from "./AccountDropdown";
import { SearchField } from "./SearchField";
import chat from "#/public/chat.svg";
import Image from "next/image";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import EditControl from "./EditControl";

interface HeaderProps {
    header: string,
    editable?: boolean,
    shouldShowSearchField?: boolean,
    onHeaderTextChanged?: (value: string) => void,
}

export default function Header({ header, editable = false, shouldShowSearchField = true, onHeaderTextChanged }: HeaderProps) {
    
    const [isPencilClicked, setIsPencilClicked] = useState(false);
    
    const [headerText, setHeaderText] = useState(header);

    return (
        <div className="p-5 flex flex-row flex-auto justify-between">
            <EditControl
                isEditing={isPencilClicked}
                enabled={editable}
                iconSize={30}
                onDismiss={() => {
                    setHeaderText(header);
                }}
                onSave={() => {
                    onHeaderTextChanged && onHeaderTextChanged(headerText);
                }}
                onEditingChange={(newValue) => {
                    setIsPencilClicked(newValue);
                }}
            >
                {!isPencilClicked && <h1 className="text-gray-500" >{header}</h1>}
                {isPencilClicked && 
                    <FormControl 
                        disabled={!isPencilClicked} 
                        value={headerText} 
                        className={`text-gray-500 font-[650] text-[28px] border-solid border-2 border-b-gray-500`} 
                        size="sm" 
                        onChange={(e) => {
                            setHeaderText(e.currentTarget.value);
				        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onHeaderTextChanged && onHeaderTextChanged(headerText);
                                setIsPencilClicked(false);
                            } else if (e.key === "Escape") {
                                setHeaderText(header);
                                setIsPencilClicked(false);
                            }
                        }} 
                    />
                }
            </EditControl>
            {shouldShowSearchField && <SearchField />}
            <div className="flex flex-row">
                <AccountDropdown userName="Milos" />
                <Image
                    className="ml-[20px]"
                    src={chat}
                    alt="chat"
                />
            </div>
        </div>
    );
}