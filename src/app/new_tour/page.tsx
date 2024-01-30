"use client";

import { ActionIcon, Button, Group, Menu, Text, rem } from "@mantine/core";
import IconBackToTab from "#/public/material-symbols_back-to-tab.svg";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import Link from "next/link";
import OutlinedTextField from "@/components/OutlinedTextField";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import Header from "@/components/Header";
import { useState } from "react";
import { IconPencil, IconPlus } from "@tabler/icons-react";
import { Dropdown, FormControl } from "react-bootstrap";

interface Location {
    name: string,
    address: string
}

interface Task {
    text: string,
    isDone: boolean
}

interface LocationTasks {
    locationName: string,
    tasks: Task[]
}

export default function NewTourPage() {

    const [driverName, setDriverName] = useState("");
    const [vehicleName, setVehicleName] = useState("");

    const [shouldShowAddNewTabButton, setShouldShowAddNewTabButton] = useState(true);
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
    const [shouldShowAddNewCommentButton, setShouldShowAddNewCommentButton] = useState(true);

    const [tasksList, setTasksList] = useState<LocationTasks[]>([]);

    const [comment, setComment] = useState("");

    const [openedDropDown, setOpenedDropDown] = useState(false)

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
                    <OutlinedTextField
                        key={i}
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
                            <div style={{ position: 'relative' }}>
                                <ActionIcon onClick={() => setOpenedDropDown(!openedDropDown)} pt={2} fw={500} fz="xs">
                                    <IconPlus style={{ width: rem(18), height: rem(18), color: '#282147' }} stroke={1.5} />
                                </ActionIcon>
                                {openedDropDown && (
                                    <Dropdown show={true} style={{ position: 'absolute', top: '100%', left: 0 }}>
                                        <Dropdown.Menu>
                                            {/* Add your dropdown items here */}
                                            <Dropdown.Item>Item 1</Dropdown.Item>
                                            <Dropdown.Item>Item 2</Dropdown.Item>
                                            {/* ... */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )}
                            </div>
                        }
                    />
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
            {shouldShowAddNewCommentButton &&
                <Button
                    className="bg-[#282147] min-w-[32vw]"
                    rightSection={
                        <Image
                            src={IconTabNew}
                            alt="add new comment"
                        />
                    }
                    onClick={() => {
                        setShouldShowAddNewCommentButton(false);
                    }}
                >
                    Add New Comment
                </Button>
            }
            {!shouldShowAddNewCommentButton &&
                <div className="flex flex-col flex-auto">
                    <Text className="text-[#282147]" component="label" htmlFor="comment-text-area" size="sm" fw={500} >
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
            }
        </div>
    );
}