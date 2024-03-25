"use client";

import Avatar from "@/components/chat/Avatar";
import Message from "@/model/Message";
import clsx from "clsx";
import { format } from "date-fns/format";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
    data: Message,
    isLast: boolean,
}

export default function ReplyMessageBox({ data, isLast }: MessageBoxProps) {

    const isOwn = true;

    const isReplyToOwn = true;

    const seenList = (data.seen || [])
        .filter((user) => user.email !== data.sender.email)
        .map((user) => user.name)
        .join(", ");

    const containerClasses = clsx("flex flex-row gap-3 p-4", isOwn && "justify-end");

    const avatarClasses = clsx(isOwn && "order-2");

    const bodyClasses = clsx("flex flex-col gap-2", isOwn && "items-end");

    const messageClasses = clsx("text-sm w-fit overflow-hidden rounded-t-[20px] py-2 px-3 brightness-[85%]", isReplyToOwn ? "bg-standard-purple text-white" : "bg-gray-100");

    const messageAltClasses = clsx("text-sm w-full overflow-hidden rounded-b-[20px] py-2 px-3", isOwn ? "bg-standard-purple text-white" : "bg-gray-100");

    return (
        <div className={containerClasses}>
            <div className={avatarClasses}>
                <Avatar user={data.sender} />
            </div>
            <div className={bodyClasses}>
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
                <div className="flex flex-col gap-y-1">
                    <div className={messageClasses}>
                        <div>{data.replyToMessage.body}</div>
                    </div>
                    <div className={messageAltClasses}>
                        <div>{data.body}</div>
                    </div>
                </div>
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