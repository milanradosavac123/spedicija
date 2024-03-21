"use client";

import User from "@/model/User";
import UserBox from "./UserBox";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import clsx from "clsx";
import { IsNavbarCollapsedContext, SelectedConversationsContext } from "@/app/ContextWrapper";
import { useContext } from "react";
import ChatBanner from "../ChatBanner";
import CentredRowWithVerticalGap from "@/components/CentredRowWithVerticalGap";
import StandardTabControl from "@/components/StandardTabControl";
import { useConversation } from "@/util/hooks/useConversation";

interface UserListProps {
    items: User[]
};

export default function UserList({ items }: UserListProps) {

    const { isOpen } = useConversation();
    const { isNavbarCollapsed } = useContext(IsNavbarCollapsedContext);

    return (
        <aside
            className={clsx("fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0 scrollbar-hide", isOpen ? "hidden" : "block w-full left-0", isNavbarCollapsed ? "lg:left-24" : "lg:left-[235px]")}
        >
            <div
                className="px-5"
            >
                <div
                    className="flex-col mt-4"
                >
                    <ChatBanner text="Contacts" />
                </div>
                {/* <CentredRowWithVerticalGap>
                    <StandardSegmentedControl data={["Drivers", "Vehicles", "Dispachers"]} />
                </CentredRowWithVerticalGap>
                {items.map((item, i) => (
                    <UserBox
                        key={i}
                        data={item}
                    />
                ))} */}
                <StandardTabControl
                    tabTitles={["Drivers", "Vehicles", "Dispachers"]}
                    tabContent={[
                        <>
                            {items.map((item, i) => (
                                <UserBox
                                    key={i}
                                    data={item}
                                />
                            ))}
                        </>,
                        <>
                            {items.map((item, i) => (
                                <UserBox
                                    key={i}
                                    data={item}
                                />
                            ))}
                        </>,
                        <>
                            {items.map((item, i) => (
                                <UserBox
                                    key={i}
                                    data={item}
                                />
                            ))}
                        </>
                    ]}
                />
            </div>
        </aside>
    );
}