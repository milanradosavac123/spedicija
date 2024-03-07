"use server";

import UserList from "@/components/chat/users/UserList";
import SideBar from "@/components/chat/sidebar/SideBar";
import { users } from "@/dummyData/dummyData";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {

    return (
        <SideBar>
            <div
                className="h-full"
            >
                <UserList items={users} />
                {children}
            </div>
        </SideBar>
    );
}