"use client"

import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

    router.push("/tours");

    return (
        <div className="flex flex-col flex-auto justify-center items-center min-w-full">
            <h1>empty page</h1>
        </div>
    );
}