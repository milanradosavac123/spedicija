import { ReactNode } from "react";

interface CardGridProps {
    children: ReactNode
}

export default function CardGrid({ children }: CardGridProps) {
    return (
        <div className="flex flex-row flex-wrap justify-evenly overflow-y-auto overflow-x-hidden">
            {children}
        </div>
    );
}