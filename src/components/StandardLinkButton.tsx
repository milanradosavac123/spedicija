import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";

interface StandardLinkButtonProps {
    href: string,
    text: string,
    forwardLink?: boolean,
    onClick?: () => void
}

export default function StandardLinkButton({ href, text, forwardLink = true, onClick }: StandardLinkButtonProps) {
    return (
        <Button
            component={Link}
            href={href}
            className="bg-[#282147] hover:bg-[#1F1A37] max-w-fit flex-center"
            pr={12}
            rightSection={
                <Image
                    src={
                        forwardLink
                            ? IconTabNew
                            : IconBackToTab
                    }
                    alt=""
                />
            }
            onClick={onClick}
        >
            {text}
        </Button>
    );
}