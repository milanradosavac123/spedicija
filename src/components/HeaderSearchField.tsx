import { TextInput, ActionIcon, rem } from '@mantine/core';
import { IconMenu2, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import XIconButton from './XIconButton';

interface HeaderSearchFieldProps {
    onSearch: (query: string) => void,
}

export function HeaderSearchField({ onSearch }: HeaderSearchFieldProps) {

    const [searchQuery, setSearchQuery] = useState("");

    function clearField() {
        setSearchQuery("");
        onSearch("");
    }

    return (
        <div className="flex flex-row items-center">
            <TextInput
                value={searchQuery}
                radius="xl"
                width={100}
                size="md"
                placeholder="Search"
                rightSectionWidth={64}
                rightSection={
                    <>
                        <ActionIcon
                            size={32}
                            radius="xl"
                            variant="filled"
                            onClick={() => {
                                onSearch(searchQuery);
                            }}
                        >
                            <IconSearch style={{ width: rem(18), height: rem(18), color: "gray" }} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size={32} radius="xl" variant="filled">
                            <IconMenu2 style={{ width: rem(18), height: rem(18), color: "gray" }} stroke={1.5} />
                        </ActionIcon>
                    </>
                }
                onChange={(e) => {

                    if (e.currentTarget.value === "") {
                        clearField();
                        return
                    }

                    setSearchQuery(e.currentTarget.value);
                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        onSearch(searchQuery);
                    }
                }}
            />
            <XIconButton
                iconSize={32}
                colour="gray"
                onClick={clearField}
            />
        </div>
    );
}