"use client";

import { ActionIcon, Button, Group, Text, rem } from "@mantine/core";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import OutlinedTextField from "@/components/OutlinedTextField";
import Header from "@/components/Header";
import { useState } from "react";
import { IconCheck, IconHome, IconPlus } from "@tabler/icons-react";
import { FormControl } from "react-bootstrap";
import { IconX } from "@tabler/icons-react";
import PencilIconButton from "@/components/PencilIconButton";
import XIconButton from "@/components/XIconButton";
import StandardLinkButton from "@/components/StandardLinkButton";

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

    const [areTasksAddedIndexes, setAreTasksAddedIndexes] = useState<number[]>([]);

    const [headerText, setHeaderText] = useState("Tour name");

    function addAreTasksAddedIndex(index: number) {
        setAreTasksAddedIndexes([...areTasksAddedIndexes, index])
    }

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
            <Header headerContent={headerText} shouldShowSearchField={false} editable={true} onHeaderContentChanged={(newText) => {
                setHeaderText(newText);
            }} />
            <hr />
            <div className="flex flex-row justify-end py-5">
                <StandardLinkButton 
                    href="/"
                    text="Back" 
                    forwardLink={false} 
                />
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
                    <div
                        key={i}
                        style={{ position: 'relative' }}
                        onMouseLeave={areTasksAddedIndexes.includes(i) ? (() => {
                            if (openedDropDownIndex !== undefined) {
                                setOpenedDropDownIndex(undefined);
                            }
                        }) : undefined}
                    >
                        <OutlinedTextField
                            className="min-w-[20vw] max-w-[32vw]"
                            id="location-text-field"
                            shouldBottomBeRounded={!(openedDropDownIndex === i && openedDropDownIndex !== undefined)}
                            isLabelEditable={true}
                            label={value.name}
                            placeholder={`Add your ${value.name} here...`}
                            value={value.address}
                            onMouseEnter={areTasksAddedIndexes.includes(i) ? (() => {
                                if (openedDropDownIndex === undefined) {
                                    setOpenedDropDownIndex(i);
                                }
                            }) : undefined}
                            onChange={(s) => {
                                setLocationAddress(i, s);
                            }}
                            onLabelChange={(s) => {
                                editLocationName(i, s);
                            }}
                            onLabelEditDismissed={() => {
                                i > 1 && setLocationsList((oldLocationList) => [...oldLocationList.slice(0, i), ...oldLocationList.slice(i + 1)]);
                            }}
                            rightSection={
                                <ActionIcon
                                    onClick={
                                        !areTasksAddedIndexes.includes(i) ? (() => {
                                            if (openedDropDownIndex === undefined) {
                                                setOpenedDropDownIndex(i);
                                            } else setOpenedDropDownIndex(undefined);
                                        }) : undefined
                                    }
                                    onMouseEnter={areTasksAddedIndexes.includes(i) ? (() => {
                                        if (openedDropDownIndex === undefined) {
                                            setOpenedDropDownIndex(i);
                                        }
                                    }) : undefined}
                                >
                                    {!areTasksAddedIndexes.includes(i)
                                        ?
                                        <IconPlus style={{ width: rem(18), height: rem(18), color: '#282147' }} stroke={1.5} />
                                        :
                                        <IconHome style={{ width: rem(18), height: rem(18), color: "#282147" }} stroke={1.5} />
                                    }
                                </ActionIcon>
                            }
                        />
                        {openedDropDownIndex !== undefined && openedDropDownIndex === i && <div className={`min-w-[100%] max-w-[100%] bg-white p-2 border-solid border-2 border-[#282147] rounded-b-[10px]`} style={{ position: "absolute", zIndex: "999", top: "65px", left: "0px" }}>
                            <ul>
                                {value.tasks && value.tasks.map((task, index) => (
                                    <li className="flex flex-auto justify-between items-center px-3">
                                        <p className="break-all max-w-[20vw]" >{index + 1}. {task.text[0].toUpperCase()}{task.text.substring(1)}</p>
                                        <div>
                                            <PencilIconButton
                                                onClick={() => {
                                                    setShouldShowAddNewTaskTextField(true);
                                                    setCurrentTaskText(task.text);
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
                                                }}
                                            />
                                            <XIconButton
                                                onClick={() => {
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
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {shouldShowAddNewTaskTextField && <div className="flex flex-auto justify-center items-center p-3">
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
                                    addAreTasksAddedIndex(i);
                                }}>
                                    <IconCheck style={{ width: rem(18), height: rem(18), color: "#00ff00" }} stroke={1.5} />
                                </ActionIcon>
                                <ActionIcon onClick={() => {
                                    setCurrentTaskText("");
                                    setShouldShowAddNewTaskTextField(false);
                                }}>
                                    <IconX style={{ width: rem(18), height: rem(18), color: "#ff0000" }} stroke={1.5} />
                                </ActionIcon>
                            </div>}
                            {!shouldShowAddNewTaskTextField && <div className="flex flex-auto justify-center">
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
                            </div>}
                        </div>}
                    </div>
                ))}
                {shouldShowAddNewTabButton &&
                    <div className="flex flex-col flex-auto" >
                        <Group justify="space-between" mb={5}>
                            <FormControl disabled={true} value="fidj[aofdjsodisfdosiopsf" className="text-white no-select" size="sm" />
                        </Group>
                        <Button
                            className="bg-[#282147] min-w-[20vw]"
                            rightSection={
                                <Image
                                    src={IconTabNew}
                                    alt=""
                                />
                            }
                            onClick={() => {
                                setShouldShowAddNewTabButton(false);
                            }}
                        >
                            Add New Location
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
                    className="max-w-[100%] min-h-fit mb-4 border-solid border-2 border-[#282147] rounded-[10px] p-2 resize"
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