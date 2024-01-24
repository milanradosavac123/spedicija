import { TextInput, TextInputProps, ActionIcon, rem } from '@mantine/core';
import { IconMenu2, IconSearch } from '@tabler/icons-react';

export function SearchField(props: TextInputProps) {

    return (
        <TextInput
            radius="xl"
            width={100}
            size="md"
            placeholder="Search questions"
            rightSectionWidth={64}
            rightSection={
                <>
                    <ActionIcon size={32} radius="xl" color={"white"} variant="filled">
                        <IconSearch style={{ width: rem(18), height: rem(18), color: "black" }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size={32} radius="xl" color={"white"} variant="filled">
                        <IconMenu2 style={{ width: rem(18), height: rem(18), color: "black" }} stroke={1.5} />
                    </ActionIcon>
                </>
            }
            {...props}
        />
    );
}