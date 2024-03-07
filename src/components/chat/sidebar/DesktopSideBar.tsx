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
                className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:w-30 lg:overflow-y-auto lg:bg-white h-screen lg:border-r-[1px] lg:flex lg:flex-row justify-between"
            >
                <StandardNavBar />
                <div
                    className="lg:px-6 flex flex-col justify-between"
                >
                    <nav
                        className="mt-4"
                    >
                        <ul
                            className="flex flex-col items-center space-y-1"
                            role="list"
                        >
                            {routes.slice(undefined, routes.length - 1).map((route, i) => (
                                <DesktopItem
                                    key={i}
                                    {...route}
                                />
                            ))}
                        </ul>
                    </nav>
                    <nav
                        className="flex flex-col justify-between items-center"
                    >
                        <div
                            className="cursor-pointer hover:opacity-75 transition"
                            onClick={() => setIsOpen(true)}
                        >
                            <Avatar user={currentUser} />
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}