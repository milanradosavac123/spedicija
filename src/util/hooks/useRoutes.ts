import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useConversation } from "./useConversation";
import { IconLogout2, IconMessageDots } from "@tabler/icons-react";
import { IconUsers } from "@tabler/icons-react";

export function useRoutes() {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: "Conversations",
            link: "/chat_conversations",
            icon: IconMessageDots,
            active: pathname === "/chat_conversations" || !!conversationId
        },
        {
            label: "Contacts",
            link: "/chat",
            icon: IconUsers,
            active: pathname === "/chat" || !!conversationId
        },
        {
            label: "App",
            link: "/tours",
            icon: IconLogout2,
            active: false
        },
    ], [pathname, conversationId]);


    return routes;

}