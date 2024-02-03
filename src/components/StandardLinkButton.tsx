import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";

interface StandardLinkButtonProps {
    href: string,
    text: string,
    forwardLink?: boolean
}

export default function StandardLinkButton({ href, text, forwardLink = true }: StandardLinkButtonProps) {
    return (
        <Button
            component={Link}
            href={href}
            className="bg-[#282147] max-w-fit flex-center"
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
        >
            {text}
        </Button>
    );
}