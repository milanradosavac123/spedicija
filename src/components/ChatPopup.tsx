"use client";

import { conversations, messages } from "@/dummyData/dummyData";
import ChatPopupAvatarGroup from "./ChatPopupAvatarGroup";
import { useContext, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Body from "./chat/conversations/conversationId/Body";
import Form from "./chat/conversations/conversationId/Form";
import Header from "./chat/conversations/conversationId/Header";
import { SelectedConversationsContext } from "@/app/ContextWrapper";

export default function ChatPopup() {

    const [isConversationDrawerOpened, setIsConversationDrawerOpened] = useState(false);

    const pathname = usePathname();

    const { selectedConversationIds, setSelectedConversationIds } = useContext(SelectedConversationsContext);

    const [openedConversationIds, setOpenedConversationIds] = useState<string[]>([]);

    if (pathname.includes("chat")) {
        return null;
    }

    return (
        <div style={{ zIndex: 990 }} className="relative self-end">
            <div style={{ zIndex: 999 }} className="absolute bottom-10 right-10">
                <ChatPopupAvatarGroup
                    conversations={conversations.filter((conversation) => selectedConversationIds.includes(conversation.id))}
                    onClick={(conversationId) => {
                        !isConversationDrawerOpened && setIsConversationDrawerOpened(true);
                        !openedConversationIds.includes(conversationId)
                            ?
                            setOpenedConversationIds((oldOpenedConversationIds) => [...oldOpenedConversationIds, conversationId])
                            :
                            setOpenedConversationIds((oldOpenedConversationIds) => [...oldOpenedConversationIds.slice(undefined, oldOpenedConversationIds.indexOf(conversationId)), ...oldOpenedConversationIds.slice(oldOpenedConversationIds.indexOf(conversationId) + 1)])
                        openedConversationIds.length == 1 && openedConversationIds.includes(conversationId) && setIsConversationDrawerOpened(false);
                    }}
                    onRemoveConversation={(conversationId) => {
                        setSelectedConversationIds((oldSelectedConversationIds) => {

                            oldSelectedConversationIds.length === 1 && (
                                setOpenedConversationIds([]),
                                setIsConversationDrawerOpened(false)
                            )

                            return [
                                ...oldSelectedConversationIds.slice(
                                    undefined,
                                    oldSelectedConversationIds.indexOf(conversationId)
                                ),
                                ...oldSelectedConversationIds.slice(
                                    oldSelectedConversationIds.indexOf(conversationId) + 1
                                )
                            ]
                        });
                    }}
                />
            </div>
            {isConversationDrawerOpened && <div className="absolute h-[60vh] bottom-10 right-24">
                <div
                    className="flex flex-row-reverse h-full gap-x-5"
                >
                    {openedConversationIds.map((selectedConversationId, i) => (
                        <div key={i} className="bg-white w-96 h-full rounded-2xl border-2 border-solid border-[#282147] flex flex-col flex-auto overflow-clip">
                            <Header
                                conversation={conversations.filter((conversation) => selectedConversationId === conversation.id)[0]}
                                showDrawerButton={false}
                            />
                            <div className="overflow-y-auto">
                                <Body initialMessages={messages} />
                            </div>
                            <Form />
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    );
}