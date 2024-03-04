"use client";

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    href: string,
    icon: any,
    active: boolean,
    onClick?: () => void,
}

export default function MobileItem({ href, icon: Icon, active, onClick }: MobileItemProps) {
    return (
        <Link
            className={clsx("group flex flex-row gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-[#282147] hover:text-white hover:bg-[#282147]", active && "text-white bg-[#282147]")}
            href={href}
            onClick={onClick}
        >
            <Icon
                className={clsx("h-6 w-6 shrink-0", active && "text-white")}
            />
        </Link>
    );
}