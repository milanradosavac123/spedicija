"use client";

import { ActionIcon, Button, Group, NumberFormatterFactory, Text, rem } from "@mantine/core";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import Link from "next/link";
import OutlinedTextField from "@/components/OutlinedTextField";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import Header from "@/components/Header";
import { useState } from "react";
import { IconCheck, IconPencil, IconPlus, IconTicketOff } from "@tabler/icons-react";
import { FormControl } from "react-bootstrap";
import { IconX } from "@tabler/icons-react";

interface Task {
    text: string,
    isDone: boolean
}

interface Location {
    name: string,
    address: string,
    tasks?: Task[]
}

export default function NewTourPage() {

    const [driverName, setDriverName] = useState("");
    const [vehicleName, setVehicleName] = useState("");

    const [shouldShowAddNewTabButton, setShouldShowAddNewTabButton] = useState(true);

    const [shouldShowAddNewTaskTextField, setShouldShowAddNewTaskTextField] = useState(false);

    const [locationsList, setLocationsList] = useState<Location[]>(
        [
            {
                name: "Load Location",
                address: "",
            },
            {
                name: "Unload Location",
                address: "",
            },
        ]
    );
    const [newLocationName, setNewLocationName] = useState("");

    const [currentTaskText, setCurrentTaskText] = useState("")

    const [comment, setComment] = useState("");

    const [openedDropDownIndex, setOpenedDropDownIndex] = useState<number | undefined>(undefined);

    function editLocationName(index: number, name: string) {
        setLocationsList((oldLocationsList) => {
            const newLocationsList = [...oldLocationsList];
            newLocationsList[index].name = name;
            return newLocationsList;
        })
    }

    function setLocationAddress(index: number, address: string) {
        setLocationsList((oldLocationsList) => {
            const newLocationsList = [...oldLocationsList];
            newLocationsList[index].address = address;
            return newLocationsList;
        })
    }

    function addLocation(location: Location) {
        setLocationsList([...locationsList, location]);
    }

    function addTask(locationIndex: number, task: Task) {
        setLocationsList((oldLocationsList) => {
            const newLocationsList = [...oldLocationsList];
            const tasks = newLocationsList[locationIndex]?.tasks ?? [];
            newLocationsList[locationIndex] = {
                ...newLocationsList[locationIndex],
                tasks: [...tasks, task],
            };

            return newLocationsList;
        });
    }

    return (
        <div className="p-5">
            <Header headerText="Active Tours" />
            <hr />
            <div className="flex flex-row justify-between py-5">
                <StandardSegmentedControl />

                <Button
                    component={Link}
                    href="/"
                    className="bg-[#282147] max-w-fit flex-center"
                    pr={12}
                    rightSection={
                        <Image
                            src={IconBackToTab}
                            alt="back to tab"
                        />
                    }
                >
                    Back To Tab
                </Button>
            </div>
            <div className="flex flex-row flex-auto gap-5">
                <OutlinedTextField
                    label="Driver Name"
                    placeholder="Add your Driver here..."
                    value={driverName}
                    onChange={(s) => {
                        setDriverName(s);
                    }}
                />
                <OutlinedTextField
                    label="Vehicle Name"
                    placeholder="Add your Vehicle here..."
                    value={vehicleName}
                    onChange={(s) => {
                        setVehicleName(s);
                    }}
                />
            </div>
            <div className="grid grid-cols-3 gap-x-5 ">
                {locationsList.map((value, i) => (
                    <div key={i} style={{ position: 'relative' }}>
                        <OutlinedTextField
                            className="min-w-[32vw] max-w-[32vw]"
                            shouldBottomBeRounded={!(openedDropDownIndex === i && openedDropDownIndex !== undefined)}
                            isLabelEditable={true}
                            label={value.name}
                            placeholder={`Add your ${value.name} here...`}
                            value={value.address}
                            onChange={(s) => {
                                setLocationAddress(i, s);
                            }}
                            onLabelChange={(s) => {
                                editLocationName(i, s);
                            }}
                            rightSection={
                                <ActionIcon onClick={() => {
                                    if (openedDropDownIndex === undefined) {
                                        setOpenedDropDownIndex(i);
                                    } else setOpenedDropDownIndex(undefined);
                                }} pt={2} fw={500} fz="xs">
                                    <IconPlus style={{ width: rem(18), height: rem(18), color: '#282147' }} stroke={1.5} />
                                </ActionIcon>
                            }
                        />
                        {openedDropDownIndex !== undefined && openedDropDownIndex === i && <div className="min-w-[32vw] max-w-[32vw] bg-white p-5 border-solid border-2 border-b-[#282147] border-r-[#282147] border-l-[#282147] border-t-[#282147] rounded-b-[10px]" style={{ position: "absolute", zIndex: "999", top: "73px", left: "0px" }}>
                            {value.tasks && value.tasks.map((task, index) => (
                                <div className="flex flex-auto justify-center items-center">
                                    <h1>{task.text}</h1>
                                    <ActionIcon onClick={() => {
                                        setLocationsList((oldLocationsList) => {
                                            const newLocationsList = oldLocationsList.map((location, j) => {
                                                if (i === j && location.tasks) {
                                                    return {
                                                        ...location,
                                                        tasks: [...location.tasks.slice(0, index), ...location.tasks.slice(index + 1)],
                                                    };
                                                }
                                                return location;
                                            });

                                            return newLocationsList;
                                        });
                                    }}>
                                        <IconX style={{ width: rem(18), height: rem(18), color: "black" }} stroke={1.5} />
                                    </ActionIcon>
                                </div>
                            ))}
                            {shouldShowAddNewTaskTextField && <div className="flex flex-auto justify-center items-center">
                                <OutlinedTextField
                                    label="Task"
                                    placeholder="Add your Task here..."
                                    value={currentTaskText}
                                    onChange={(s) => {
                                        setCurrentTaskText(s);
                                    }}
                                />
                                <ActionIcon onClick={() => {
                                    addTask(i, {
                                        text: currentTaskText,
                                        isDone: false
                                    } as Task)
                                    setCurrentTaskText("");
                                    setShouldShowAddNewTaskTextField(false);
                                }}>
                                    <IconCheck style={{ width: rem(18), height: rem(18), color: "black" }} stroke={1.5} />
                                </ActionIcon>
                                <ActionIcon onClick={() => {
                                    setCurrentTaskText("");
                                    setShouldShowAddNewTaskTextField(false);
                                }}>
                                    <IconX style={{ width: rem(18), height: rem(18), color: "black" }} stroke={1.5} />
                                </ActionIcon>
                            </div>}
                            <div className="flex flex-auto justify-center">
                                <Button
                                    className="bg-[#282147] max-w-fit"
                                    pr={12}
                                    onClick={() => {
                                        setCurrentTaskText("");
                                        setShouldShowAddNewTaskTextField(!shouldShowAddNewTaskTextField);
                                    }}
                                >
                                    Add New Task
                                </Button>
                            </div>
                        </div>}
                    </div>
                ))}
                {shouldShowAddNewTabButton &&
                    <div className="flex flex-col flex-auto" >
                        <Group justify="space-between" mb={5}>
                            <Text className="text-white select-none" component="label" htmlFor="outlined-text-field" size="sm" fw={500} >
                                dasiopdkasopidaksopdkaspd
                            </Text>

                            <ActionIcon className="cursor-default" onClick={() => { }} pt={2} fw={500} fz="xs">
                                <IconPencil style={{ width: rem(18), height: rem(18), color: "" }} stroke={1.5} />
                            </ActionIcon>
                        </Group>
                        <Button
                            className="bg-[#282147] min-w-[30vw]"
                            id="add-button"
                            rightSection={
                                <Image
                                    src={IconTabNew}
                                    alt="add new tab"
                                />
                            }
                            onClick={() => {
                                setShouldShowAddNewTabButton(false);
                            }}
                        >
                            Add New Tab
                        </Button>
                    </div>
                }
                {!shouldShowAddNewTabButton &&
                    <OutlinedTextField
                        label="New Location Name"
                        placeholder="Add your New Location Name here..."
                        value={newLocationName}
                        rightSectionWidth={52}
                        rightSection={
                            <Button
                                className="bg-[#282147] min-w-fit rounded-s-none cursor-pointer"
                                onClick={() => {
                                    addLocation({
                                        name: newLocationName,
                                        address: ""
                                    } as Location)
                                    setNewLocationName("");
                                    setShouldShowAddNewTabButton(true);
                                }}
                            >
                                Ok
                            </Button>
                        }
                        onChange={(s) => {
                            setNewLocationName(s);
                        }}
                    />
                }
            </div>
            <div className="flex flex-col flex-auto">
                <Text className="text-[#282147] py-1" component="label" htmlFor="comment-text-area" size="sm" fw={500} >
                    Comment
                </Text>
                <FormControl
                    className="max-w-[32vw] min-h-fit mb-4 border-solid border-2 border-[#282147] rounded-[10px] p-2"
                    value={comment}
                    placeholder="Add your Comment here..."
                    id="comment-text-area"
                    as="textarea"
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}