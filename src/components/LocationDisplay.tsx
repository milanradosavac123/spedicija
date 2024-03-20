"use client";

import { Location } from "@/app/tours/new_tour/page";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { ScrollArea, Text, rem } from "@mantine/core";
import { useListState, } from "@mantine/hooks";
import { IconCircle, IconMapPin } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { TourInfo } from "@/dummyData/dummyData";

interface LocationDisplayProps {
    className?: string
    tours: TourInfo[],
}

export default function LocationDisplay({ className, tours }: LocationDisplayProps) {

    const [openedSideMenuIndex, setOpenedSideMenuIndex] = useState<number | undefined>()

    const locationArray = tours.map((tour) => tour.locations).flat();

    const [locations, handlers] = useListState<Location>(locationArray);

    const connectors = Array.from({ length: locations.length - 1 }, (_, index) => (
        <div key={index} className="flex flex-col items-center">
            <div className="w-[6px] h-[6px] bg-black rounded-[50%] m-[2px]"></div>
            <div className="w-[6px] h-[6px] bg-black rounded-[50%] m-[2px]"></div>
            <div className="w-[6px] h-[6px] bg-black rounded-[50%] m-[2px]"></div>
        </div>
    ));

    const circleItems = locations.map((_, i) => (
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

    const sideMenuRef = useRef<HTMLDivElement>(null);

    const locationItems = locations.map((location, i) => (
        <Draggable key={location.name + i} index={i} draggableId={i.toString()}>
            {(provided) => (
                <div
                    className="flex flex-row py-[5px]"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    onMouseLeave={() => {
                        if (openedSideMenuIndex !== undefined) {
                            setOpenedSideMenuIndex(undefined);
                        }
                    }}
                >
                    <div
                        className="flex flex-row rounded-[60px] bg-gray-400 p-2 pl-6 drop-shadow-lg"
                        onMouseEnter={() => {
                            if (openedSideMenuIndex === undefined) {
                                setOpenedSideMenuIndex(i);
                            }
                        }}
                    >
                        <Text className="text-white">
                            {location.name} - {location.address}
                        </Text>
                        <div
                            className="relative"
                        >
                            {openedSideMenuIndex !== undefined && openedSideMenuIndex === i && <div className={`flex flex-col absolute z-[999] top-[0px] left-[5px] bg-white p-2`}>
                                <h1 className="text-nowrap whitespace-nowrap">{tours.find((tour, i) => tour.locations.includes(location))?.tourName}</h1>
                                <h4>Drivers: {tours.find((tour, i) => tour.locations.includes(location))?.tourDrivers.join(", ")}</h4>
                                <ScrollArea h={200}>
                                    {location.tasks?.map((task, i) => (
                                        <Text key={i}>{i + 1}. {task.text}</Text>
                                    ))}
                                </ScrollArea>
                                <div ref={sideMenuRef} className="w-[2vw] h-[2vh]"></div>
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
                <Droppable key={Math.random()} droppableId="dnd-list" direction="vertical">
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