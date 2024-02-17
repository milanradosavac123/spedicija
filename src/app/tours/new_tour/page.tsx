"use client";

import { ActionIcon, Button, Group, Text, TextInput, rem } from "@mantine/core";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import OutlinedTextField from "@/components/OutlinedTextField";
import Header from "@/components/Header";
import { useState } from "react";
import { IconHome, IconPlus } from "@tabler/icons-react";
import { Form, FormControl } from "react-bootstrap";
import PencilIconButton from "@/components/PencilIconButton";
import XIconButton from "@/components/XIconButton";
import StandardLinkButton from "@/components/StandardLinkButton";
import SaveDismissIconButtonGroup from "@/components/SaveDismissIconButtonGroup";
import SelectInputField from "@/components/SelectInputField";
import SelectInputFieldAlt from "@/components/SelectInputFieldAlt";
import DocumentUploadButton from "@/components/DocumentUploadButton";

export interface Task {
    text: string,
    isDone: boolean
}

export interface Location {
    name: string,
    address: string,
    tasks?: Task[]
}

export default function NewTour() {

    const [driverName, setDriverName] = useState("");
    const [vehicleName, setVehicleName] = useState("");

    const [shouldShowAddNewLocationButton, setShouldShowAddNewLocationButton] = useState(true);

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


    const [headerText, setHeaderText] = useState("Tour name");

    const [taskUnderEdit, setTaskUnderEdit] = useState("");

    const [driverAmountArray, setDriverAmountArray] = useState<number[]>([1]);

    function addDriver() {
        setDriverAmountArray((oldDriverAmountArray) => [...oldDriverAmountArray, 1]);
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
        setNewLocationName("");
        setShouldShowAddNewLocationButton(true);
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

    function saveTask(i: number) {
        addTask(i, {
            text: currentTaskText,
            isDone: false
        } as Task)
        setCurrentTaskText("");
        setShouldShowAddNewTaskTextField(false);
    }

    function dismissTask(i: number) {
        if (taskUnderEdit !== "") {
            addTask(i, {
                text: taskUnderEdit,
                isDone: false
            } as Task)
            setCurrentTaskText("");
            setShouldShowAddNewTaskTextField(false);
            setTaskUnderEdit("");
        } else {
            setCurrentTaskText("");
            setShouldShowAddNewTaskTextField(false);
        }
    }

    return (
        <div className="p-5">
            <Header headerContent={headerText} shouldShowSearchField={false} editable={true} onHeaderContentChanged={(newText) => {
                setHeaderText(newText);
            }} />
            <hr />
            <div className="flex flex-row justify-end py-5">
                <StandardLinkButton
                    href="/tours"
                    text="Back"
                    forwardLink={false}
                />
            </div>
            <div className="flex flex-row flex-auto gap-x-5 flex-wrap">
                <div className="flex flex-row flex-grow gap-5 flex-wrap">
                    {driverAmountArray.map((_, i) => (
                        <SelectInputFieldAlt
                            key={i}
                            name="select-driver"
                            label="Driver Name"
                            placeholder="Add your Driver here..."
                            onChange={(e) => {

                            }}
                            onPlusClicked={addDriver}
                        >
                            <option value="0">Milos</option>
                            <option value="1">Mileta</option>
                        </SelectInputFieldAlt>
                    ))}
                </div>
                <SelectInputFieldAlt
                    name="select-vehicle"
                    label="Vehicle Name"
                    placeholder="Add your Vehicle here..."
                    onChange={(e) => {

                    }}
                >
                    <option value="0">Man</option>
                    <option value="1">Mercedes</option>
                </SelectInputFieldAlt>
            </div>
            <div className="grid grid-cols-3 gap-x-5 ">
                {locationsList.map((value, i) => (
                    <div
                        key={i}
                        style={{ position: 'relative' }}
                        onMouseLeave={value.tasks !== undefined ? (() => {
                            if (openedDropDownIndex !== undefined) {
                                setOpenedDropDownIndex(undefined);
                            }
                        }) : undefined}
                    >
                        <OutlinedTextField
                            className="min-w-[20vw] max-w-[32vw]"
                            shouldBottomBeRounded={!(openedDropDownIndex === i && openedDropDownIndex !== undefined)}
                            isLabelEditable={true}
                            label={value.name}
                            placeholder={`Add your ${value.name} here...`}
                            value={value.address}
                            onMouseEnter={value.tasks !== undefined ? (() => {
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
                                        value.tasks === undefined ? (() => {
                                            if (openedDropDownIndex === undefined) {
                                                setOpenedDropDownIndex(i);
                                            } else setOpenedDropDownIndex(undefined);
                                        }) : undefined
                                    }
                                    onMouseEnter={value.tasks !== undefined ? (() => {
                                        if (openedDropDownIndex === undefined) {
                                            setOpenedDropDownIndex(i);
                                        }
                                    }) : undefined}
                                >
                                    {value.tasks === undefined
                                        ?
                                        <IconPlus style={{ width: rem(18), height: rem(18), color: '#282147' }} stroke={1.5} />
                                        :
                                        <IconHome style={{ width: rem(18), height: rem(18), color: "#282147" }} stroke={1.5} />
                                    }
                                </ActionIcon>
                            }
                        />
                        {openedDropDownIndex !== undefined && openedDropDownIndex === i && <div className={`min-w-[100%] max-w-[100%] bg-white p-2 border-solid border-2 border-[#282147] rounded-b-[10px]`} style={{ position: "absolute", zIndex: "999", top: "65px" }}>
                            <ul>
                                {value.tasks && value.tasks.map((task, index) => (
                                    <li className="flex flex-auto justify-between items-center px-3">
                                        <p className="break-all max-w-[20vw]" >{index + 1}. {task.text[0].toUpperCase()}{task.text.substring(1)}</p>
                                        <div>
                                            <PencilIconButton
                                                onClick={() => {
                                                    setTaskUnderEdit(task.text);
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
                                                                if (location.tasks.length == 1) {
                                                                    return {
                                                                        ...location,
                                                                        tasks: undefined
                                                                    }
                                                                } else return {
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
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveTask(i);
                                        } else if (e.key === "Escape") {
                                            dismissTask(i);
                                        }
                                    }}
                                />
                                <SaveDismissIconButtonGroup
                                    onSaveClick={() => {
                                        saveTask(i);
                                    }}
                                    onDismissClick={() => {
                                        dismissTask(i);
                                    }}
                                />
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
                {shouldShowAddNewLocationButton &&
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
                                setShouldShowAddNewLocationButton(false);
                            }}
                        >
                            Add New Location
                        </Button>
                    </div>
                }
                {!shouldShowAddNewLocationButton &&
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
                                    } as Location);
                                }}
                            >
                                Ok
                            </Button>
                        }
                        onChange={(s) => {
                            setNewLocationName(s);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addLocation({
                                    name: newLocationName,
                                    address: ""
                                } as Location);
                            } else if (e.key === "Escape") {
                                setNewLocationName("");
                                setShouldShowAddNewLocationButton(true);
                            }
                        }}
                    />
                }
            </div>
            <div className="flex flex-row">
                <DocumentUploadButton />
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