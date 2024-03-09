"use client";

import Conversation from "@/model/Conversation";
import Avatar from "./chat/Avatar";
import AvatarGroup from "./chat/AvatarGroup";
import React, { useState } from "react";
import clsx from "clsx";

interface ChatPopupAvatarGroupProps {
    conversations: Conversation[],
    onClick: (index: number) => void,
}

export default function ChatPopupAvatarGroup({ conversations, onClick }: ChatPopupAvatarGroupProps) {

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
            {conversations.map((conversation, i) => (
                <React.Fragment key={i}>
                    {conversation.isGroup ? (
                        <div
                            className={clsx(!isHovering && "absolute")}
                            onClick={() => onClick(i)}
                        >
                            <AvatarGroup users={conversation.users} />
                        </div>
                    ) : (
                        <div
                            className={clsx(!isHovering && "absolute")}
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