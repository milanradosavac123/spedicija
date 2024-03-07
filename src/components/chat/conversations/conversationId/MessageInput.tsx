"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    id: string,
    placeholder?: string,
    type?: string,
    required?: boolean,
    errors: FieldErrors,
    register: UseFormRegister<FieldValues>,
}

export default function MessageInput({ id, placeholder, type, required, errors, register }: MessageInputProps) {
    return (
        <div
            className="relative w-full"
        >
            <input
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
                id={id}
                type={type}
                autoComplete="off"
                {...register(id, { required })}
                placeholder={placeholder}
            />
        </div>
    );
}