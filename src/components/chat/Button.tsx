"use client";

import clsx from "clsx";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    fullWidth?: boolean,
    children?: React.ReactNode,
    secondary?: boolean,
    danger?: boolean,
    disabled?: boolean,
    onClick?: () => void, 
}

export default function Button({ type, fullWidth, children, secondary, danger, disabled, onClick }: ButtonProps) {
    return (
        <button
            className={clsx("flex flex-row justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", disabled && "opacity-50 cursor-default", fullWidth && "w-full", secondary ? "text-gray-900" : "text-white", danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600", !secondary && !danger && "bg-standard-purple hover:bg-standard-purple-dark focus-visible:outline-standard-purple-dark")}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>  
    );
}