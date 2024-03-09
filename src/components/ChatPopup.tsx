"use client";

import { conversations, messages } from "@/dummyData/dummyData";
import ChatPopupAvatarGroup from "./ChatPopupAvatarGroup";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Body from "./chat/conversations/conversationId/Body";
import Form from "./chat/conversations/conversationId/Form";
import Header from "./chat/conversations/conversationId/Header";

export default function ChatPopup() {

    const [isConversationDrawerOpened, setIsConversationDrawerOpened] = useState(false);

    const pathname = usePathname();

    if (pathname.includes("chat")) {
        return null;
    }

    return (
        <div style={{ zIndex: 990 }} className="relative self-end">
            <div style={{ zIndex: 999 }} className="absolute bottom-10 right-10">
                <ChatPopupAvatarGroup conversations={conversations.slice(undefined, 5)} onClick={() => setIsConversationDrawerOpened(!isConversationDrawerOpened)} />
            </div>
            {isConversationDrawerOpened && <div className="absolute w-96 h-[60vh] bottom-10 right-24">
                <div className="bg-white w-full h-full rounded-2xl border-2 border-solid border-[#282147] flex flex-col flex-auto overflow-clip">
                    <Header conversation={conversations[0]} />
                    <div className="overflow-y-auto">
                        <Body initialMessages={messages} />
                    </div>
                    <Form />
                </div>
            </div>}
        </div>
    );
}