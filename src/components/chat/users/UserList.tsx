"use client";

import User from "@/model/User";
import UserBox from "./UserBox";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import clsx from "clsx";
import { IsNavbarCollapsedContext } from "@/app/ContextWrapper";
import { useContext } from "react";

interface UserListProps {
    items: User[]
};

export default function UserList({ items }: UserListProps) {
    
    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);
    
    return (
        <aside
            className={clsx("fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0", isNavbarCollapsed ? "lg:left-44" : "lg:left-[315px]")}
        >
            <div
                className="px-5"
            >
                <div
                    className="flex-col"
                >
                    <div
                        className="text-2xl font-bold text-neutral-800 bg-white py-4"
                    >
                        Contacts
                    </div>
                </div>
                <div
                    className="py-5 flex flex-row justify-center"
                >
                    <StandardSegmentedControl data={["Drivers", "Vehicles", "Dispachers"]} />
                </div>
                {items.map((item, i) => (
                    <UserBox
                        key={i}
                        data={item}
                    />
                ))}
            </div>
        </aside>
    );
}