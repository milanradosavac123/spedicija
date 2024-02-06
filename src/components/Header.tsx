"use client";

import { AccountDropdown } from "./AccountDropdown";
import { HeaderSearchField } from "./HeaderSearchField";
import chat from "#/public/chat.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FormControl } from "react-bootstrap";
import EditControl from "./EditControl";

interface HeaderProps {
    headerContent: string,
    editable?: boolean,
    shouldShowSearchField?: boolean,
    onHeaderContentChanged?: (value: string) => void,
}

export default function Header({ headerContent, editable = false, shouldShowSearchField = true, onHeaderContentChanged }: HeaderProps) {

    const [isEditing, setIsEditing] = useState(false);

    const [headerText, setHeaderText] = useState(headerContent);

    const editHeaderContentInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && editHeaderContentInputRef.current) {
            editHeaderContentInputRef.current.focus();
        }
    }, [isEditing]);

    return (
        <div className="p-5 flex flex-row flex-auto justify-between">
            <EditControl
                isEditing={isEditing}
                enabled={editable}
                iconSize={30}
                onDismiss={() => {
                    setHeaderText(headerContent);
                }}
                onSave={() => {
                    onHeaderContentChanged && onHeaderContentChanged(headerText);
                }}
                onEditingChange={(newValue) => {
                    setIsEditing(newValue);
                }}
            >
                {!isEditing && <h1 className="text-gray-500" >{headerContent}</h1>}
                {isEditing &&
                    <FormControl
                        ref={editHeaderContentInputRef}
                        disabled={!isEditing}
                        value={headerText}
                        className={`text-gray-500 font-[650] text-[28px] border-solid border-2 border-b-gray-500`}
                        size="sm"
                        onChange={(e) => {
                            setHeaderText(e.currentTarget.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onHeaderContentChanged && onHeaderContentChanged(headerText);
                                setIsEditing(false);
                            } else if (e.key === "Escape") {
                                setHeaderText(headerContent);
                                setIsEditing(false);
                            }
                        }}
                    />
                }
            </EditControl>
            {shouldShowSearchField && <HeaderSearchField />}
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