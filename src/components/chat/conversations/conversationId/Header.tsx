"use client";

import Avatar from "@/components/chat/Avatar";
import { conversations, users } from "@/dummyData/dummyData";
import Conversation from "@/model/Conversation";
import User from "@/model/User";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/components/chat/AvatarGroup";

interface HeaderProps {
    conversation: Conversation & {
        users: User[]
    }
}

export default function Header({ conversation }: HeaderProps) {

    const otherUser = users[3];
    const [drawerOpen, setDrawerOpen] = useState(false);

    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.users.length} members`
        }

        return "Active"
    }, [conversation]);

    return (
        <>
            <ProfileDrawer
                data={conversation}
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            <div
                className="bg-white w-full flex flex-row border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm"
            >
                <div
                    className="flex flex-row gap-3 items-center"
                >
                    <Link
                        className="lg:hidden block text-[#282147] hover:text-[#1F1A37] transition cursor-pointer"
                        href="/chat_conversations"
                    >
                        <HiChevronLeft size={32} />
                    </Link>
                    {conversation.isGroup ? (
                        <AvatarGroup users={conversation.users} />
                    ) : (
                        <Avatar user={otherUser} />
                    )}
                    <div
                        className="flex flex-col"
                    >
                        <div>
                            {conversation.name || otherUser.name}
                        </div>
                        <div
                            className="text-sm font-light text-neutral-500"
                        >
                            {statusText}
                        </div>
                    </div>
                </div>
                <HiEllipsisHorizontal
                    className="text-[#282147] cursor-pointer hover:text-[#1F1A37] transition"
                    size={32}
                    onClick={() => setDrawerOpen(true)}
                />
            </div>
        </>
    );
}