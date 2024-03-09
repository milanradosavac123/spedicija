"use client";

import { AccountDropdown } from "./AccountDropdown";
import { HeaderSearchField } from "./HeaderSearchField";
import chat from "#/public/chat.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FormControl } from "react-bootstrap";
import EditControl from "./EditControl";
import UserList from "./chat/users/UserList";
import { conversations, users } from "@/dummyData/dummyData";
import ChatBanner from "./chat/ChatBanner";
import { StandardSegmentedControl } from "./StandardSegmentedControl";
import UserBox from "./chat/users/UserBox";

interface HeaderProps {
    headerContent: string,
    editable?: boolean,
    shouldShowSearchField?: boolean,
    onHeaderContentChanged?: (value: string) => void,
    onSearch?: (query: string) => void
}

export default function Header({ headerContent, editable = false, shouldShowSearchField = true, onHeaderContentChanged, onSearch }: HeaderProps) {

    const [isEditing, setIsEditing] = useState(false);

    const [headerText, setHeaderText] = useState(headerContent);

    const [isChatOpened, setIsChatOpened] = useState(false);

    const editHeaderContentInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && editHeaderContentInputRef.current) {
            editHeaderContentInputRef.current.focus();
        }
    }, [isEditing]);

    return (
        <div className="p-5 flex flex-row flex-auto justify-between max-h-min">
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
            {shouldShowSearchField && <HeaderSearchField
                onSearch={(q) => {
                    onSearch && onSearch(q);
                }}
            />}
            <div className="flex flex-row">
                <AccountDropdown
                    userName="Milos"
                />
                <div
                    className="relative cursor-pointer"
                >
                    <Image
                        className="ml-[20px]"
                        src={chat}
                        alt="chat"
                        onClick={() => setIsChatOpened(!isChatOpened)}
                    />
                    {isChatOpened && <div
                        className="absolute z-[999] bg-white right-0"
                    >
                        <div
                            className="px-5"
                        >
                            <div
                                className="flex-col"
                            >
                                <ChatBanner text="Contacts" />
                            </div>
                            <div
                                className="py-5 flex flex-row justify-center"
                            >
                                <StandardSegmentedControl data={["Drivers", "Vehicles", "Dispachers"]} />
                            </div>
                            <div
                                className="h-[35vh] overflow-y-auto"
                            >
                                {users.map((user, i) => (
                                    <UserBox
                                        key={i}
                                        data={user}
                                        onClick={(conversationId) => {
                                            
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}