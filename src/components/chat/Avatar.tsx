"use client";

import User from "@/model/User";
import Image from "next/image";
import favicon from "#/src/app/favicon.ico";
import XIconButton from "../XIconButton";

interface AvatarProps {
    user?: User,
    onClick?: () => void,
    onRemoveFromList?: () => void,
}

export default function Avatar({ user, onClick, onRemoveFromList }: AvatarProps) {
    return (
        <div
            className="relative"
        >
            <div
                className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11"
                onClick={onClick}
            >
                <Image 
                    src={user?.image || favicon}
                    alt="Avatar"
                    fill
                />
            </div>
            <span
                className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3"
            />
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