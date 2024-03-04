import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { useConversation } from "./useConversation";

export function useRoutes() {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: "Chat",
            href: "/chat_conversations",
            icon: HiChat,
            active: pathname === "/chat_conversations" || !!conversationId
        },
        {
            label: "Users",
            href: "/chat",
            icon: HiUsers,
            active: pathname === "/chat"
        },
        {
            label: "App",
            href: "/tours",
            icon: HiArrowLeftOnRectangle,
            active: false
        },
    ], [pathname, conversationId]);


    return routes;

}