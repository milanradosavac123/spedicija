"use client";

import User from "@/model/User";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import LoadingModal from "../LoadingModal";

interface UserBoxProps {
    data: User,
}

export default function UserBox({ data }: UserBoxProps) {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);

        router.push(`/chat_conversations/${data.conversations[0].id}`);

        setIsLoading(false);
    }, [data, router]);

    return (
        <>
            {isLoading && <LoadingModal />}
            <div
                className="my-2 w-full relative flex flex-row items-center space-x-3 bg-white p-3 hover:bg-[#282147] hover:text-white text-gray-900 rounded-lg transition cursor-pointer"
                onClick={handleClick}
            >
                <Avatar user={data} />
                <div
                    className="min-w-0 flex-1"
                >
                    <div
                        className="focus:outline-none"
                    >
                        <div
                            className="flex justify-between items-center mb-1"
                        >
                            <p
                                className="text-sm font-medium text-inherit"
                            >
                                {data.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}