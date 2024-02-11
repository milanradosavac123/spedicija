"use client";

import { Location } from "@/app/new_tour/page";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { rem } from "@mantine/core";
import { UseListStateHandlers } from "@mantine/hooks";
import { IconCircle, IconMapPin } from "@tabler/icons-react";
import styles from "./DottedLine.module.css";
import { useState } from "react";

interface LocationDisplayProps {
    className?: string
    locations: Location[],
    handlers: UseListStateHandlers<Location>,
}

export default function LocationDisplay({ className, locations, handlers }: LocationDisplayProps) {

    const [openedSideMenuIndex, setOpenedSideMenuIndex] = useState<number | undefined>()

    const connectors = Array.from({ length: locations.length - 1 }, (_, index) => (
        <div key={index} className={styles.connector}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    ));

    const circleItems = locations.map((location, i) => (
        <div
            className="flex flex-col"
        >
            <div className="flex flex-col py-[1px]">
                {i !== locations.length - 1
                    ?
                    <IconCircle
                        style={{ width: rem(18), height: rem(18), color: "#282147", top: "10px" }}
                        stroke={1.5}
                    />
                    :
                    <IconMapPin style={{ width: rem(18), height: rem(18), color: "#ff0000" }} stroke={1.5} />
                }
            </div>
            {i < connectors.length && connectors[i]}
        </div>
    ));

    const locationItems = locations.map((location, i) => (
        <Draggable key={location.name + i} index={i} draggableId={i.toString()}>
            {(provided) => (
                <div
                    className="flex flex-row py-[5px]"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div
                        className="flex flex-row rounded-[60px] bg-gray-400 p-2 pl-6 drop-shadow-lg"
                    >
                        <p className="text-white">
                            {location.name} - {location.address}
                        </p>
                        <div
                            className="relative"
                            onMouseLeave={() => {
                                if (openedSideMenuIndex !== undefined) {
                                    setOpenedSideMenuIndex(undefined);
                                }
                            }}
                        >
                            <IconCircle
                                style={
                                    {
                                        width: "24px",
                                        height: "24px",
                                        color: "#9ca3af"
                                    }
                                }
                                stroke={1.5}
                                onMouseEnter={() => {
                                    if (openedSideMenuIndex === undefined) {
                                        setOpenedSideMenuIndex(i);
                                    }
                                }}
                            />
                            {openedSideMenuIndex !== undefined && openedSideMenuIndex === i && <div className={`flex flex-row absolute z-[999] top-0 left-[30px] bg-black w-[100px] h-[100px]`}>
                                
                            </div>}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    ));

    return (
        <div
            className={`flex flex-row ${className}`}
        >
            <DragDropContext
                onDragEnd={({ destination, source }) =>
                    handlers.reorder({ from: source.index, to: destination?.index || 0 })
                }
            >
                <Droppable key="droppable-location" droppableId="dnd-list" direction="vertical">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div className="flex flex-row">
                                <div className="flex flex-col pt-[15px]">
                                    {circleItems}
                                </div>
                                <div className="flex flex-col pl-5">
                                    {locationItems}
                                </div>
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}