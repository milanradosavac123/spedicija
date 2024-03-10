"use client";

import Button from "@/components/chat/Button";
import Modal from "@/components/chat/Modal";
import { useConversation } from "@/util/hooks/useConversation";
import { Dialog } from "@headlessui/react";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface ConfirmModalProps {
    isOpen?: boolean,
    onClose: () => void,
}

export default function ConfirmModal({ isOpen, onClose }: ConfirmModalProps) {
    
    const router = useRouter();
    const { conversationId } = useConversation();
    const [isLoading, setIsLoading] = useState(false);
    
    const onDelete = useCallback(() => {
        setIsLoading(true);
        
        onClose();

        router.push("/chat_conversations");
        router.refresh();
        setIsLoading(false);
    }, [conversationId, router, onClose]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div
                className="sm:flex sm:flex-row sm:items-start"
            >
                <div
                    className="mx-auto flex flex-row h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                    <IconAlertTriangle
                        className="h-6 w-6 text-red-600"
                    />
                </div>
                <div
                    className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
                >
                    <Dialog.Title
                        className="text-base font-semibold leading-6 text-gray-900"
                        as="h3"
                    >
                        Delete conversation
                    </Dialog.Title>
                    <div
                        className="mt-2"
                    >
                        <p
                            className="text-sm text-gray-500"
                        >
                            Are you sure you want to delete this conversation? This action cannot be undone.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse "
            >
                <Button
                    disabled={isLoading}
                    danger
                    onClick={onDelete}
                >
                    Delete
                </Button>
                <Button
                    disabled={isLoading}
                    secondary
                    onClick={onClose}
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    );
}