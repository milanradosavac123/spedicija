"use client";

import Conversation from "@/model/Conversation";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import clsx from "clsx";
import { users } from "@/dummyData/dummyData";
import Avatar from "../Avatar";
import { format } from "date-fns/format";
import AvatarGroup from "../AvatarGroup";

interface ConversationBoxProps {
    data: Conversation,
    selected?: boolean
}

export default function ConversationBox({ data, selected }: ConversationBoxProps) {

    const otherUser = users[3];

    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/chat_conversations/${data.id}`)
    }, [data.id, router]);

    const lastMessage = useMemo(() => {
        const messages = data.messages || [];

        return messages[messages.length - 1];
    }, [data.messages]);

    const userEmail = useMemo(() => {
        return users[0].email;
    }, [users[0].email]);

    const hasSeen = useMemo(() => {
        if (!lastMessage) {
            return false;
        }

        const seenArray = lastMessage.seen || [];

        if (!userEmail) {
            return false;
        }

        return seenArray.filter((user) => user.email === userEmail).length !== 0;
    }, [userEmail, lastMessage]);

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return "Sent an Image";
        }

        if (lastMessage?.body) {
            return lastMessage.body;
        }

        return "Started a conversation"
    }, [lastMessage]);

    return (
        <div
            className={clsx("w-full relative flex flex-row items-center space-x-3 hover:bg-[#282147] hover:text-white rounded-lg transition cursor-pointer p-3", selected ? "bg-[#282147] text-white" : "bg-white text-gray-900")}
            onClick={handleClick}
        >
            {data.isGroup ? (
                <AvatarGroup users={data.users} />
            ) : (
                <Avatar user={otherUser} />
            )}
            <div
                className="min-w-0 flex-1"
            >
                <div
                    className="focus:outline-none"
                >
                    <div
                        className="flex flex-row justify-between items-center mb-1"
                    >
                        <p
                            className={clsx("text-md font-medium text-inherit")}
                        >
                            {data.name || otherUser.name}
                        </p>
                        {lastMessage?.createdAt && (
                            <p
                                className="text-xs text-inherit font-light"
                            >
                                {format(new Date(lastMessage.createdAt), "p")}
                            </p>
                        )}
                    </div>
                    <p
                        className={clsx("truncate text-sm", hasSeen ? "text-gray-500" : selected ? "text-white font-medium" : "black  font-medium")}
                    >
                        {lastMessageText}
                    </p>
                </div>
            </div>
        </div>
    );
}