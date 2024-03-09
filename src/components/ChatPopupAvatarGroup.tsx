"use client";

import Conversation from "@/model/Conversation";
import Avatar from "./chat/Avatar";
import AvatarGroup from "./chat/AvatarGroup";
import React from "react";

interface ChatPopupAvatarGroupProps {
    conversations: Conversation[],
    onClick: (index: number) => void,
}

export default function ChatPopupAvatarGroup({ conversations, onClick }: ChatPopupAvatarGroupProps) {
    return (
        <div
            className="flex flex-col-reverse"
        >
            {conversations.map((conversation, i) => (
                <React.Fragment key={i}>
                    {conversation.isGroup ? (
                        <div
                            onClick={() => onClick(i)}
                        >
                            <AvatarGroup users={conversation.users} />
                        </div>
                    ) : (
                        <div
                            onClick={() => onClick(i)}
                        >
                            <Avatar user={conversation.users[3]} />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}