"use client";

import Modal from "@/components/chat/Modal";
import Image from "next/image";

interface ImageModal {
    src?: string | null,
    isOpen?: boolean,
    onClose: () => void,
}

export default function ImageModal({ src, isOpen, onClose }: ImageModal) {
    
    if(!src) {
        return null;
    }
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div
                className="w-80 h-80"
            >
                <Image
                    className="object-cover"
                    alt="Image"
                    fill
                    src={src}
                />
            </div>
        </Modal>
    );
}