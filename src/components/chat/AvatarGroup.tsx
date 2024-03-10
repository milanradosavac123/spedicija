"use client";

import User from "@/model/User";
import Image from "next/image";
import favicon from "#/src/app/favicon.ico";
import clsx from "clsx";
import XIconButton from "../XIconButton";

interface AvatarGroupProps {
    users?: User[],
    onClick?: () => void,
    onRemoveFromList?: () => void,
}

export default function AvatarGroup({ users = [], onClick, onRemoveFromList }: AvatarGroupProps) {

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
            <div
                className="absolute top-0 left-0 bottom-0 right-0"
                onClick={onClick}
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
            {onRemoveFromList && <span
                className="absolute block rounded-full top-[-15px] right-0 h-2 w-2 md:h-3 md:w-3"
            >
                <XIconButton
                    colour="black"
                    onClick={onRemoveFromList}
                />
            </span>}
        </div>
    );
}