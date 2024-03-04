"use client";

import User from "@/model/User";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Modal from "../Modal";
import Input from "../inputs/Input";
import Image from "next/image";
import favicon from "#/src/app/favicon.ico";
import { FileButton } from "@mantine/core";
import Button from "../Button";
import { URL } from "url";

interface SettingsModalProps {
    currentUser: User,
    isOpen?: boolean,
    onClose: () => void,
}

export default function SettingsModal({ currentUser, isOpen, onClose }: SettingsModalProps) {

    const router = useRouter();

    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<FieldValues>(
        {
            defaultValues: {
                name: currentUser?.name,
                image: currentUser?.image
            }
        }
    );

    const image = watch("image");

    function handleUpload(result: File | null) {

        setValue("image", undefined, {
            shouldValidate: true,
        });

    }

    function onSubmit(data: FieldValues) {
        router.refresh();
        console.log({...data});
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="space-12"
                >
                    <div
                        className="border-b border-gray-900/10 pb-12"
                    >
                        <h2
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            Profile
                        </h2>
                        <p
                            className="mt-1 text-sm leading-6 text-gray-600"
                        >
                            Edit your public information.
                        </p>

                        <div
                            className="mt-10 flex flex-col gap-y-8"
                        >
                            <Input
                                disabled={isSubmitting}
                                label="Name"
                                id="name"
                                errors={errors}
                                required
                                register={register}
                            />
                            <div>
                                <label
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Photo
                                </label>
                                <div
                                    className="mt-2 flex flex-row items-center gap-x-3"
                                >
                                    <Image
                                        className="rounded-full"
                                        src={image || currentUser?.image || favicon}
                                        alt="Avatar"
                                        width={48}
                                        height={48}
                                    />
                                    <FileButton onChange={handleUpload} accept="image/png, image/jpeg">
                                        {(props) => (
                                            <Button
                                                disabled={isSubmitting}
                                                secondary
                                                type="button"
                                                {...props}
                                            >
                                                Change
                                            </Button>
                                        )}
                                    </FileButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-6 flex flex-row items-center justify-end gap-x-6"
                    >
                        <Button
                            disabled={isSubmitting}
                            secondary
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>

                </div>
            </form>
        </Modal>
    );
}