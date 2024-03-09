"use client";

import { useConversation } from "@/util/hooks/useConversation";
import { useRoutes } from "@/util/hooks/useRoutes";
import MobileItem from "./MobileItem";

export default function MobileFooter() {
    
    const routes = useRoutes();
    const { isOpen } = useConversation();
    
    if(isOpen) {
        return null;
    }

    return (
        <div
            className="fixed justify-between w-full bottom-0 z-40 flex flex-row items-center bg-white border-t-[1px] lg:hidden"
        >
            {routes.map((route, i) => (
                <MobileItem
                    key={i}
                    {...route}
                    onClick={() => {
                        route.href === "/tours";
                    }}
                />
            ))}
        </div>
    );
}