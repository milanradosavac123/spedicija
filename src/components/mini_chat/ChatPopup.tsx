"use client";

import { conversations, messages } from "@/dummyData/dummyData";
import ChatPopupAvatarGroup from "./ChatPopupAvatarGroup";
import { useContext, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { SelectedConversationsContext } from "@/app/ContextWrapper";
import MiniChatPage from "./MiniChatPage";

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

                        setOpenedConversationIds((oldOpenedConversationIds) => {
                                
                            oldOpenedConversationIds.length === 1 && setIsConversationDrawerOpened(false);
                            
                            return [
                                ...oldOpenedConversationIds.slice(
                                    undefined,
                                    oldOpenedConversationIds.indexOf(conversationId)
                                ),
                                ...oldOpenedConversationIds.slice(
                                    oldOpenedConversationIds.indexOf(conversationId) + 1
                                )
                            ]
                        });

                        setSelectedConversationIds((oldSelectedConversationIds) => {

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
                        <MiniChatPage
                            conversation={conversations.filter((conversation) => selectedConversationId === conversation.id)[0]}
                        />
                    ))}
                </div>
            </div>}
        </div>
    );
}