"use client";

import { useRoutes } from "@/util/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";
import User from "@/model/User";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";
import { StandardNavBar } from "@/components/StandardNavBar";

interface DesktopSideBarProps {
    currentUser: User
}

export default function DesktopSideBar({ currentUser }: DesktopSideBarProps) {

    const routes = useRoutes();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <SettingsModal
                currentUser={currentUser}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <div
                className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between"
            >
                <nav
                    className="mt-4 flex flex-col justify-between"
                >
                    <ul
                        className="flex flex-col items-center space-y-1"
                        role="list"
                    >
                        {routes.map((route, i) => (
                            <DesktopItem
                                key={i}
                                {...route}
                                onClick={() => {
                                    route.href === "/tours" && window.location.reload();
                                }}
                            />
                        ))}
                    </ul>
                </nav>
                <nav
                    className="mt-4 flex flex-col justify-between items-center"
                >
                    <div
                        className="cursor-pointer hover:opacity-75 transition"
                        onClick={() => setIsOpen(true)}
                    >
                        <Avatar user={currentUser} />
                    </div>
                </nav>
            </div>
        </>
    );
}