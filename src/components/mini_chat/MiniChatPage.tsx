"use client";

import Conversation from "@/model/Conversation";
import Body from "../chat/conversations/conversationId/Body";
import Form from "../chat/conversations/conversationId/Form";
import Header from "../chat/conversations/conversationId/Header";
import { MouseEvent, useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface MiniChatPageProps {
    conversation: Conversation
}

export default function MiniChatPage({ conversation }: MiniChatPageProps) {

    const chatPageRef = useRef<HTMLDivElement>(null);

    const [dragButtonClicked, setDragButtonClicked] = useState(false);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove() {
    
            chatPageRef.current?.style.setProperty("left", `${position.x}px`);
            chatPageRef.current?.style.setProperty("top", `${position.y}px`);
            chatPageRef.current?.style.setProperty("backgroundColor", "#ffffff");
        }

        handleMouseMove();
    }, [position]);

    return (
        <div
            ref={chatPageRef}
            className={clsx("bg-white w-96 h-full rounded-2xl border-2 border-solid border-[#282147] flex flex-col flex-auto overflow-clip")}
        >
            <Header
                conversation={conversation}
                showDrawerButton={false}
                showDragButton
                onMouseMove={(e) => dragButtonClicked && setPosition({ x: e.clientX, y: e.clientY })}
                onDragButtonClick={() => {
                    setDragButtonClicked(!dragButtonClicked);
                }}
            />
            <div className="overflow-y-auto">
                <Body initialMessages={conversation.messages} />
            </div>
            <Form />
        </div>
    );
}