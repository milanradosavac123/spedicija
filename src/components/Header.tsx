"use client";

import { AccountDropdown } from "./AccountDropdown";
import { SearchField } from "./SearchField";
import chat from "#/public/chat.svg";
import Image from "next/image";
import { IconChevronDown, IconPencil } from "@tabler/icons-react";
import { ActionIcon, rem } from "@mantine/core";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

interface HeaderProps {
    headerText: string,
    editable?: boolean,
    shouldShowSearchField?: boolean,
    onHeaderTextChanged: (value: string) => void,
}

export default function Header({ headerText, editable = false, shouldShowSearchField = true, onHeaderTextChanged }: HeaderProps) {
    
    const [isPencilClicked, setIsPencilClicked] = useState(false);
    
    return (
        <div className="p-5 flex flex-row flex-auto justify-between" >
            <div className="flex flex-row items-center">
                {editable && <ActionIcon onClick={() => {
                    setIsPencilClicked(true);
                }}>
                    <IconPencil style={{ width: rem(30), height: rem(30), color: "gray" }} stroke={1.5} />
                </ActionIcon>}
                {!isPencilClicked && <h1 className="text-gray-500" >{headerText}</h1>}
                {isPencilClicked && <FormControl disabled={!isPencilClicked} value={headerText} className={`text-gray-500 font-[650] text-[28px] border-solid border-2 border-b-gray-500`} size="sm" onChange={(e) => {
	
				}} />}
            </div>
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