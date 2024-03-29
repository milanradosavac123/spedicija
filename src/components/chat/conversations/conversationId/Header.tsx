"use client";

import Avatar from "@/components/chat/Avatar";
import { users } from "@/dummyData/dummyData";
import Conversation from "@/model/Conversation";
import User from "@/model/User";
import Link from "next/link";
import { MouseEvent, useMemo, useState } from "react";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/components/chat/AvatarGroup";
import { IconChevronLeft, IconDots, IconGridDots } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

interface HeaderProps {
    conversation: Conversation & {
        users: User[]
    },
    showDrawerButton?: boolean,
    showDragButton?: boolean,
    onMouseMove?: (e: MouseEvent<SVGSVGElement>) => void,
    onDragButtonClick?: () => void, 
}

export default function Header({ conversation, showDrawerButton = true, showDragButton = false, onMouseMove, onDragButtonClick }: HeaderProps) {

    const otherUser = users[3];
    const [drawerOpen, setDrawerOpen] = useState(false);

    const pathname = usePathname();

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
                        className="lg:hidden block text-standard-purple hover:text-standard-purple-dark transition cursor-pointer"
                        href={`/${pathname.split("/").filter(Boolean)[0]}`}
                    >
                        <IconChevronLeft size={32} />
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
                {showDrawerButton && <IconDots
                    className="text-standard-purple cursor-pointer hover:text-standard-purple-dark transition"
                    size={32}
                    onClick={() => setDrawerOpen(true)}
                />}
                {showDragButton && <IconGridDots
                    className="text-standard-purple cursor-pointer hover:text-standard-purple-dark transition"
                    size={32}
                    onClick={onDragButtonClick}
                    onMouseMove={onMouseMove}
                />}
            </div>
        </>
    );
}