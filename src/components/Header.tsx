"use client";

import { AccountDropdown } from "./AccountDropdown";
import { SearchField } from "./SearchField";
import chat from "#/public/chat.svg";
import Image from "next/image";
import { IconChevronDown } from "@tabler/icons-react";
import { rem } from "@mantine/core";

interface HeaderProps {
    headerText: string
}

export default function Header({ headerText }: HeaderProps) {
    return (
        <div className="p-5 grid grid-cols-4 content-around" >
            <h1 className="text-gray-500" >{headerText}</h1>
            <SearchField />
            <IconChevronDown style={{ width: rem(18), height: rem(18), color: "white" }} stroke={1.5} />
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