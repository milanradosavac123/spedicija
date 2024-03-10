"use client";

import Conversation from "@/model/Conversation";
import Avatar from "./chat/Avatar";
import AvatarGroup from "./chat/AvatarGroup";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface ChatPopupAvatarGroupProps {
    conversations: Conversation[],
    onClick: (conversationId: string) => void,
    onRemoveConversation?: (conversationId: string) => void,
}

export default function ChatPopupAvatarGroup({ conversations, onClick, onRemoveConversation }: ChatPopupAvatarGroupProps) {

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className={clsx("flex flex-col-reverse", !isHovering && "relative right-10")}
            onMouseEnter={() => {
                setIsHovering(true);
            }}
            onMouseLeave={() => {
                setIsHovering(false);
            }}
        >
            {conversations.length >= 1 && conversations.map((conversation, i) => (
                <React.Fragment key={i}>
                    {conversation.isGroup ? (
                        <div
                            className={clsx("pb-2", !isHovering && "absolute")}
                        >
                            <AvatarGroup
                                users={conversation.users}
                                onClick={() => onClick(conversation.id)}
                                onRemoveFromList={() => onRemoveConversation && onRemoveConversation(conversation.id)}
                            />
                        </div>
                    ) : (
                        <div
                            className={clsx(!isHovering && "absolute")}
                        >
                            <Avatar
                                user={conversation.users[3]}
                                onClick={() => onClick(conversation.id)}
                                onRemoveFromList={() => onRemoveConversation && onRemoveConversation(conversation.id)}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}