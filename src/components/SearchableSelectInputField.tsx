"use client";

import { Form } from 'react-bootstrap';
import XIconButton from './XIconButton';
import { useEffect, useState } from 'react';
import { TextInput, useCombobox, Combobox } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

interface SelectInputFieldProps {
    name: string,
    label?: string,
    placeholder: string,
    shouldShowCancelSelectionButton?: boolean,
    optionsList: string[],
    onChange?: (s: string) => void,
    [x: string]: any,
}

export default function SearchableSelectInputField({ name, className, label, placeholder, shouldShowCancelSelectionButton = true, optionsList, onChange, ...props }: SelectInputFieldProps) {

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [value, setValue] = useState('');
    const shouldFilterOptions = !optionsList.some((item) => item === value);
    const filteredOptions = shouldFilterOptions
        ? optionsList.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
        : optionsList;

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    useEffect(() => {
        // we need to wait for options to render before we can select first one
        combobox.selectFirstOption();
    }, [value]);

    return (
        <div className={`flex flex-row flex-auto max-w-fit items-center text-gray-500 font-[16px] gap-x-2 ${className}`}>
            <Form.Label>
                {label}
            </Form.Label>
            <Combobox

                onOptionSubmit={(optionValue) => {
                    setValue(optionValue);
                    combobox.closeDropdown();
                    onChange && onChange(optionValue);
                }}
                store={combobox}
                withinPortal={false}
            >
                <Combobox.Target>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChange={(event) => {
                            setValue(event.currentTarget.value);
                            combobox.openDropdown();
                            combobox.selectOption(optionsList.indexOf(event.currentTarget.value) !== -1 ? optionsList.indexOf(event.currentTarget.value) : 0);
                        }}
                        onClick={() => combobox.openDropdown()}
                        onFocus={() => combobox.openDropdown()}
                        onBlur={() => combobox.closeDropdown()}
                        rightSection={<IconChevronDown />}
                        rightSectionPointerEvents="none"
                    />
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options>
                        {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
            {shouldShowCancelSelectionButton && <XIconButton iconSize={24} colour="#6b7280" onClick={() => {
                onChange && onChange("");
                combobox.resetSelectedOption();
            }} />}
        </div>
    );
}