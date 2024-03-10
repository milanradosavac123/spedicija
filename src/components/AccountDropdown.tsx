"use client";

import { Button, Menu, rem } from '@mantine/core';
import { IconBellFilled, IconChevronDown } from '@tabler/icons-react';

interface AccountDropdownProps {
    userName: string
}

export function AccountDropdown({ userName }: AccountDropdownProps) {
    return (
        <Menu
            transitionProps={{ transition: 'pop-bottom-left' }}
            position="top-end"
            width="fit-content"
            withinPortal
        >
            <Menu.Target>
                <Button
                    className="bg-[#FDFAEF] text-gray-500 max-w-fit hover:bg-[#FDFAEF] hover:text-gray-500"
                    leftSection={
                        <IconBellFilled style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    }
                    rightSection={
                        <IconChevronDown style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    }
                    pr={12}
                >
                    {userName}
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
            </Menu.Dropdown>
        </Menu>
    );
}