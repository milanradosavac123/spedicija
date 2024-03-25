"use client";

import { useConversation } from "@/util/hooks/useConversation";
import Message from "@/model/Message";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import { isLinkPresent } from "@/util/utils";
import LinkMessageBox from "./LinkMessageBox";
import ReplyMessageBox from "./ReplyMessageBox";

interface BodyProps {
    initialMessages: Message[]
}

export default function Body({ initialMessages }: BodyProps) {

    const [messages, setMessages] = useState(initialMessages);

    const bottomRef = useRef<HTMLDivElement>(null);

    const { conversationId } = useConversation();

    useEffect(() => {
        bottomRef.current?.scrollIntoView();
    }, [])

    return (
        <div
            className="flex-1 overflow-y-auto"
        >
            {messages.map((message, i) => !isLinkPresent(message.body!!) ? (
                message.replyToMessage ? (
                    <ReplyMessageBox
                        key={i}
                        isLast={i === messages.length - 1}
                        data={message}
                    />
                ) : (
                    <MessageBox
                        key={i}
                        isLast={i === messages.length - 1}
                        data={message}
                    />
                )
            ) : (
                <LinkMessageBox
                    key={i}
                    isLast={i === messages.length - 1}
                    data={message}
                />
            ))}
            <div ref={bottomRef} className="pt-24" />
        </div>
    );
}