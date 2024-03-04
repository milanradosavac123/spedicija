"use client";

import User from "@/model/User";
import Image from "next/image";
import favicon from "#/src/app/favicon.ico";
import clsx from "clsx";

interface AvatarGroupProps {
    users?: User[]
}

export default function AvatarGroup({ users = [] }: AvatarGroupProps) {
    
    const slicedUsers = users.slice(0, 4);

    const positionMap = {
        0: "top-0",
        1: "top-0 right-0",
        2: slicedUsers.length === 3 ? "bottom-0 left-[12px]" : "bottom-0",
        3: "bottom-0 right-0"
    };
    
    return (
        <div
            className="relative h-11 w-11"
        >
            {slicedUsers.map((user, i) => (
                <div
                    key={i}
                    className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${positionMap[i as keyof typeof positionMap]}`}
                >
                    <Image
                        src={user?.image || favicon}
                        alt="Avatar"
                        fill
                    />
                </div>
            ))}
        </div>
    );
}