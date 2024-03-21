"use client";

import { useState } from "react";
import User from "@/model/User";
import SettingsModal from "./SettingsModal";
import { StandardNavBar } from "@/components/StandardNavBar";

interface DesktopSideBarProps {
    currentUser: User
}

export default function DesktopSideBar({ currentUser }: DesktopSideBarProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <SettingsModal
                currentUser={currentUser}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <div
                className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:w-30 overflow-y-hidden lg:bg-white h-screen lg:border-r-[1px] lg:flex lg:flex-row justify-between"
            >
                <StandardNavBar />
            </div>
        </>
    );
}