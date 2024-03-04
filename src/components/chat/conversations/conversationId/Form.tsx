"use client";

import { useConversation } from "@/util/hooks/useConversation";
import { FieldValues, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { FileButton } from "@mantine/core";

export default function Form() {

    const { conversationId } = useConversation();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            message: ""
        }
    });

    function onSubmit(data: FieldValues) {
        setValue("message", "", { shouldValidate: true });
        console.log({ ...data });
    }

    function handleUpload(result: File | null) {
        console.log(result?.name);
    }

    return (
        <div
            className="p-4 bg-white border-t flex flex-row items-center gap-2 lg:gap-4 w-full"
        >
            <FileButton onChange={handleUpload} accept="image/png, image/jpeg">
                {(props) => <HiPhoto
                className="text-[#282147] cursor-pointer"
                size={30}
                {...props}
            />}
            </FileButton>
            <form
                className="flex flex-row items-center gap-2 lg:gap-4 w-full"
                onSubmit={handleSubmit(onSubmit)}
            >
                <MessageInput
                    id="message"
                    errors={errors}
                    required
                    placeholder="Write a message"
                    register={register}
                />
                <button
                    className="rounded-full p-2 bg-[#282147] hover:bg-[#1F1A37] cursor-pointer transition"
                    type="submit"
                >
                    <HiPaperAirplane
                        className="text-white"
                        size={18}
                    />
                </button>
            </form>
        </div>
    );
}