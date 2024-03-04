"use client";

import { ActionIcon, Button, Group, Text, TextInput, rem } from "@mantine/core";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import OutlinedTextField from "@/components/OutlinedTextField";
import Header from "@/components/Header";
import { useState } from "react";
import { IconHome, IconPlus } from "@tabler/icons-react";
import { FormControl } from "react-bootstrap";
import PencilIconButton from "@/components/PencilIconButton";
import XIconButton from "@/components/XIconButton";
import StandardLinkButton from "@/components/StandardLinkButton";
import SaveDismissIconButtonGroup from "@/components/SaveDismissIconButtonGroup";
import SelectInputFieldAlt from "@/components/SelectInputFieldAlt";
import DocumentUploadButton from "@/components/DocumentUploadButton";
import CompactFileCard from "@/components/CompactFileCard";

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

    const [shouldShowAddNewLocationButton, setShouldShowAddNewLocationButton] = useState(true);

    const [shouldShowAddNewTaskTextField, setShouldShowAddNewTaskTextField] = useState(false);

    const [locationsList, setLocationsList] = useState<Location[]>(
        [
            {
                name: "Load Location",
                address: "",
            } as Location,
            {
                name: "Unload Location",
                address: "",
            } as Location,
        ]
    );
    const [newLocationName, setNewLocationName] = useState("");

    const [currentTaskText, setCurrentTaskText] = useState("")

    const [comment, setComment] = useState("");

    const [openedDropDownIndex, setOpenedDropDownIndex] = useState<number | undefined>(undefined);

    const [headerText, setHeaderText] = useState("Tour name");

    const [taskUnderEdit, setTaskUnderEdit] = useState("");

    const [taskUnderEditIndex, setTaskUnderEditIndex] = useState(0);

    const [selectedDriverArray, setSelectedDriverArray] = useState<string[]>([""]);

    const [files, setFiles] = useState<File[]>([]);

    const [selectedVehicleName, setSelectedVehicleName] = useState("");

    function addDriverField() {
        setSelectedDriverArray((oldSelectedDriverArray) => [...oldSelectedDriverArray, ""]);
    }

    function removeDriverField(index: number) {
        setSelectedDriverArray((oldSelectedDriverArray) => [...oldSelectedDriverArray.slice(undefined, index), ...oldSelectedDriverArray.slice(index + 1)]);
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

    function deleteLocation(i: number) {
        i > 1 && setLocationsList((oldLocationList) => [...oldLocationList.slice(undefined, i), ...oldLocationList.slice(i + 1)]);
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

    function addTaskToIndex(locationIndex: number, taskIndex: number, task: Task) {
        setLocationsList((oldLocationsList) => {
            const newLocationsList = [...oldLocationsList];
            const tasks = newLocationsList[locationIndex]?.tasks ?? [];
            tasks.splice(taskIndex, 1, task)
            newLocationsList[locationIndex] = {
                ...newLocationsList[locationIndex],
                tasks: tasks
            };

            setCurrentTaskText("");
            setTaskUnderEdit("");
            setShouldShowAddNewTaskTextField(false);

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

    function dismissTask(i: number, j: number) {
        if (taskUnderEdit !== "") {
            addTaskToIndex(i, j, {
                text: taskUnderEdit,
                isDone: false
            } as Task);
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
                    {selectedDriverArray.map((selectedDriver, i) => {
                        return <SelectInputFieldAlt
                            key={i}
                            name={`selected-driver-${i}`}
                            label="Driver Name"
                            placeholder="Add your Driver here..."
                            shouldShowPlus={i === selectedDriverArray.length - 1}
                            shouldShowX={selectedDriverArray.length !== 1}
                            value={selectedDriver}
                            onChange={(s) => {
                                setSelectedDriverArray((oldSelectedDriverArray) => {
                                    const newSelectedDriverArray = [...oldSelectedDriverArray]
                                    newSelectedDriverArray[i] = s;
                                    return newSelectedDriverArray;
                                })
                            }}
                            onPlusClicked={addDriverField}
                            onXClicked={() => {
                                removeDriverField(i);
                                console.log(i);
                            }}
                        >
                            <option value="Milos">Milos</option>
                            <option value="Mileta">Mileta</option>
                        </SelectInputFieldAlt>
                    })}
                </div>
                <SelectInputFieldAlt
                    value={selectedVehicleName}
                    name="select-vehicle"
                    label="Vehicle Name"
                    placeholder="Add your Vehicle here..."
                    onChange={setSelectedVehicleName}
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
                            tabIndex={1}
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
                                deleteLocation(i);
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
                        {openedDropDownIndex !== undefined && openedDropDownIndex === i && <div className={`min-w-full max-w-full bg-white p-2 border-solid border-2 border-[#282147] rounded-b-[10px]`} style={{ position: "absolute", zIndex: "999", top: "65px" }}>
                            <ul>
                                {value.tasks && value.tasks.map((task, j) => (
                                    <li className="flex flex-auto justify-between items-center px-3">
                                        <p className="break-all max-w-[20vw]" >{j + 1}. {task.text[0].toUpperCase()}{task.text.substring(1)}</p>
                                        <div>
                                            <PencilIconButton
                                                onClick={() => {
                                                    setTaskUnderEdit(task.text);
                                                    setTaskUnderEditIndex(j);
                                                    setShouldShowAddNewTaskTextField(true);
                                                    setCurrentTaskText(task.text);
                                                }}
                                            />
                                            <XIconButton
                                                onClick={() => {
                                                    setLocationsList((oldLocationsList) => {
                                                        const newLocationsList = oldLocationsList.map((location, k) => {
                                                            console.log(k)
                                                            if (i === k && location.tasks) {
                                                                if (location.tasks.length == 1) {
                                                                    return {
                                                                        ...location,
                                                                        tasks: undefined
                                                                    }
                                                                } else return {
                                                                    ...location,
                                                                    tasks: [...location.tasks.slice(0, j), ...location.tasks.slice(j + 1)],
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
                                            taskUnderEdit !== "" ? addTaskToIndex(i, taskUnderEditIndex, {
                                                text: currentTaskText,
                                                isDone: false
                                            } as Task) : saveTask(i);
                                        } else if (e.key === "Escape") {
                                            dismissTask(i, taskUnderEditIndex);
                                        }
                                    }}
                                />
                                <SaveDismissIconButtonGroup
                                    onSaveClick={() => {
                                        taskUnderEdit !== "" ? addTaskToIndex(i, taskUnderEditIndex, {
                                            text: currentTaskText,
                                            isDone: false
                                        } as Task) : saveTask(i);
                                    }}
                                    onDismissClick={() => {
                                        dismissTask(i, taskUnderEditIndex);
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
                            <FormControl disabled={true} value="fidj[aofdjsodisfdosiopsf" className="text-white select-none" size="sm" />
                        </Group>
                        <Button
                            className="bg-[#282147] min-w-[20vw]"
                            tabIndex={2}
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
            <div className="flex flex-row py-5 flex-wrap gap-5 items-center">
                {files.map((file, i) => (
                    <CompactFileCard
                        key={i}
                        fileName={file.name}
                        onDelete={() => {
                            setFiles((oldFiles) => [...oldFiles.slice(undefined, i), ...oldFiles.slice(i + 1)]);
                        }}
                    />
                ))}
                <DocumentUploadButton
                    files={files}
                    onFilesChanged={(newFiles) => {
                        setFiles((oldFiles) => [...oldFiles, ...newFiles]);
                    }}
                />
            </div>
            <div className="flex flex-col flex-auto">
                <Text className="text-[#282147] py-1" component="label" htmlFor="comment-text-area" size="sm" fw={500} >
                    Comment
                </Text>
                <FormControl
                    className="max-w-full min-h-fit mb-4 border-solid border-2 border-[#282147] rounded-[10px] p-2 resize"
                    value={comment}
                    placeholder="Add your Comment here..."
                    id="comment-text-area"
                    as="textarea"
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row justify-center">
                <Button
                    className="bg-[#282147] w-[20vw]"
                    onClick={() => {

                    }}
                >
                    Create Tour
                </Button>
            </div>
        </div>
    );
}