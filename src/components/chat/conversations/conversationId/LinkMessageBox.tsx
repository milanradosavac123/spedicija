"use client";

import Avatar from "@/components/chat/Avatar";
import Message from "@/model/Message";
import clsx from "clsx";
import { format } from "date-fns/format";
import TestOpenGraphImage from "#/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

interface MessageBoxProps {
    data: Message,
    isLast: boolean,
}

export default function LinkMessageBox({ data, isLast }: MessageBoxProps) {

    const isOwn = true;
    const seenList = (data.seen || [])
        .filter((user) => user.email !== data.sender.email)
        .map((user) => user.name)
        .join(", ");

    const container = clsx("flex flex-row gap-3 p-4", isOwn && "justify-end");

    const avatar = clsx(isOwn && "order-2");

    const body = clsx("flex flex-col gap-2", isOwn && "items-end");

    const message = clsx("text-sm w-fit overflow-hidden rounded-t-[20px] py-2 px-3 brightness-[85%]", isOwn ? "bg-[#282147] text-white" : "bg-gray-100");
    
    const messageAlt = clsx("text-sm w-full overflow-hidden rounded-b-[20px] py-2 px-3", isOwn ? "bg-[#282147] text-white" : "bg-gray-100");

    return (
        <div className={container}>
            <div className={avatar}>
                <Avatar user={data.sender} />
            </div>
            <div className={body}>
                <div
                    className="flex flex-row items-center gap-1"
                >
                    <div
                        className="text-sm text-gray-500"
                    >
                        {data.sender.name}
                    </div>
                    <div
                        className="text-xs text-gray-400"
                    >
                        {format(new Date(data.createdAt), "p")}
                    </div>
                </div>
                <Link
                    className="flex flex-col gap-[2px]"
                    href={data.body!!}
                >
                    <div className={message}>
                        <Image
                            src={TestOpenGraphImage}
                            alt="og-image"

                        />
                    </div>
                    <div className={messageAlt}>
                        {data.body}
                    </div>
                </Link>
                {isLast && isOwn && seenList.length > 0 && (
                    <div
                        className="text-xs font-light text-gray-500"
                    >
                        {`Seen by ${seenList}`}
                    </div>
                )}
            </div>
        </div>
    );
}