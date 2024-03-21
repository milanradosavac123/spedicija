"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    errors: FieldErrors,
    disabled?: boolean,
    register: UseFormRegister<FieldValues>,
}

export default function Input({ label, id, type, required, errors, disabled, register }: InputProps) {
    return (
        <div>
            <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor={id}
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    className={clsx("pl-3 form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-standard-purple-dark sm:text-sm sm:leading-6", errors[id] && "focus:ring-rose-500", disabled && "opacity-50 && cursor-default")}
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                />
            </div>
        </div>
    );
}