"use client";

import { useConversation } from "@/util/hooks/useConversation";
import Conversation from "@/model/Conversation";
import clsx from "clsx";
import { useContext, useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";
import User from "@/model/User";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import { IsNavbarCollapsedContext } from "@/app/ContextWrapper";
import ChatBanner from "../ChatBanner";

interface ConversationListProps {
    users: User[]
    initialItems: Conversation[]
}

export default function ConversationList({ users, initialItems }: ConversationListProps) {

    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);

    const { conversationId, isOpen } = useConversation();

    return (
        <>
            <GroupChatModal
                users={users}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <aside
                className={clsx("fixed inset-y-0 pb-20 lg:pb-0 lg:w-80 lg:block overflow-y-auto border-r border-gray-200", isOpen ? "hidden" : "block w-full left-0", isNavbarCollapsed ? "lg:left-44" : "lg:left-[315px]")}
            >
                <div
                    className="px-5"
                >
                    <div
                        className="flex flex-row justify-between mb-4 pt-4 items-center"
                    >
                        <ChatBanner text="Messages" />
                        <div
                            className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <MdOutlineGroupAdd size={20} />
                        </div>
                    </div>
                    <div
                        className="py-5 flex flex-row justify-center"
                    >
                        <StandardSegmentedControl data={["Drivers", "Vehicles", "Dispachers"]} />
                    </div>
                    <div>
                    {items.map((item, i) => (
                        <ConversationBox
                            key={i}
                            data={item}
                            selected={conversationId === item.id}
                        />
                    ))}
                    </div>
                </div>
            </aside>
        </>
    );
}