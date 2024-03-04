"use server";

import ConversationList from "@/components/chat/conversations/ConversationList";
import SideBar from "@/components/chat/sidebar/SideBar";
import { conversations, users } from "@/dummyData/dummyData";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
    return (
        <SideBar>
            <div
                className="h-full"
            >
                <ConversationList
                    users={users}
                    initialItems={conversations}
                />
                {children}
            </div>
        </SideBar>
    );
}