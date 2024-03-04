"use client";

import User from "@/model/User";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Modal from "../Modal";
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import Button from "../Button";

interface GroupChatModalProps {
    users: User[],
    isOpen: boolean,
    onClose: () => void,
}

export default function GroupChatModal({ users, isOpen, onClose }: GroupChatModalProps) {

    const router = useRouter();

    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<FieldValues>(
        {
            defaultValues: {
                name: "",
                members: []
            }
        }
    );

    const members = watch("members");

    function onSubmit(data: FieldValues) {
        console.log({ ...data });
        router.refresh();
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="space-y-12"
                >
                    <div
                        className="border-b border-gray-900/10 pb-12"
                    >
                        <h2
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            Create a group chat
                        </h2>
                        <p
                            className="mt-1 text-sm leading-6 text-gray-600"
                        >
                            Create a chat between more than 2 people.
                        </p>
                        <div
                            className="mt-10 flex flex-col gap-y-8 "
                        >
                            <Input
                                register={register}
                                label="Name"
                                id="name"
                                disabled={isSubmitting}
                                required
                                errors={errors}
                            />
                            <Select
                                disabled={isSubmitting}
                                label="Members"
                                options={users.map((user) => ({
                                    value: user.id,
                                    label: user.name
                                }))}
                                value={members}
                                onChange={(value) => setValue("members", value, {
                                    shouldValidate: true,
                                })}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="mt-6 flex flex-row items-center justify-end gap-x-6"
                >
                    <Button
                        disabled={isSubmitting}
                        onClick={onClose}
                        type="button"
                        secondary
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isSubmitting}
                        type="submit"
                    >
                        Create
                    </Button>
                </div>
            </form>
        </Modal>
    );
}