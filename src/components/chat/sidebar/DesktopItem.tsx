"use client";

import clsx from "clsx";
import Link from "next/link";

interface DekstopItemProps {
    label: string,
    icon: any,
    href: string,
    active?: boolean,
}

export default function DesktopItem({ label, icon: Icon, href, active }: DekstopItemProps) {
    return (
        <li>
            <Link
                className={clsx("group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-[#282147] hover:text-white hover:bg-[#282147]", active && "text-white bg-[#282147]")}
                href={href}
            >
                <Icon
                    className={clsx("h-6 w-6 shrink-0", active && "text-white")}
                />
                <span
                    className="sr-only"
                >
                    {label}
                </span>
            </Link>
        </li>
    );
}