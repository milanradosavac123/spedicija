"use client";

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    link: string,
    icon: any,
    active: boolean,
    onClick?: () => void,
}

export default function MobileItem({ link, icon: Icon, active, onClick }: MobileItemProps) {
    return (
        <Link
            className={clsx("group flex flex-row gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-standard-purple hover:text-white hover:bg-standard-purple", active && "text-white bg-standard-purple")}
            href={link}
            onClick={onClick}
        >
            <Icon
                className={clsx("h-6 w-6 shrink-0", active && "text-white")}
            />
        </Link>
    );
}