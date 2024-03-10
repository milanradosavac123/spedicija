import { Button } from "@mantine/core";
import clsx from "clsx";

interface StandardCentredButton {
    buttonText: string,
    variant?: "REGULAR" | "WIDE",
    onClick?: () => void,
}

export default function StandardCentredButton({ buttonText, variant = "WIDE", onClick }: StandardCentredButton) {
    return (
        <div className="flex flex-row flex-auto justify-center">
            <Button
                className={clsx("bg-[#282147] hover:bg-[#1F1A37]", variant === "WIDE" && "w-[20vw]")}
                onClick={onClick}
            >
                {buttonText}
            </Button>
        </div>
    );
}