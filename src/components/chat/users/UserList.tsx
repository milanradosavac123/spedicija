"use client";

import User from "@/model/User";
import UserBox from "./UserBox";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import clsx from "clsx";
import { IsNavbarCollapsedContext, SelectedConversationContext } from "@/app/ContextWrapper";
import { useContext } from "react";
import ChatBanner from "../ChatBanner";

interface UserListProps {
    items: User[]
};

export default function UserList({ items }: UserListProps) {
    
    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);
    
    const { setSelectedConversationId } = useContext(SelectedConversationContext);

    return (
        <aside
            className={clsx("fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0", isNavbarCollapsed ? "lg:left-44" : "lg:left-[315px]")}
        >
            <div
                className="px-5"
            >
                <div
                    className="flex-col mt-4"
                >
                    <ChatBanner text="Contacts" />
                </div>
                <div
                    className="py-5 flex flex-row justify-center"
                >
                    <StandardSegmentedControl data={["Drivers", "Vehicles", "Dispachers"]} />
                </div>
                {items.map((item, i) => (
                    <UserBox
                        key={i}
                        data={item}
                        onClick={(conversationId) => setSelectedConversationId(conversationId)}
                    />
                ))}
            </div>
        </aside>
    );
}