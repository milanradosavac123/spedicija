import React, { useState } from 'react';
import { ActionIcon, Anchor, Group, Input, Text, TextInput, rem } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';
import { FormControl } from 'react-bootstrap';

interface OutlinedTextFieldProps {
	isLabelEditable?: boolean
	label: string;
	placeholder: string;
	value: string;
	leftSection?: React.ReactNode;
	rightSectionWidth?: number;
	rightSection?: React.ReactNode;
	onChange: (value: string) => void;
	onLabelChange?: (value: string) => void;
}

export default function OutlinedTextField({isLabelEditable = false, label, placeholder, value, leftSection, rightSectionWidth, rightSection, onChange, onLabelChange = undefined }: OutlinedTextFieldProps) {
	
	const [isPencilClicked, setIsPencilClicked] = useState(false);
	
	return (
		<div className="flex flex-col flex-auto" >
			<Group justify="space-between" mb={5}>
				<FormControl value={label} className="text-[#282147]" size="sm" onChange={(e) => {
					isLabelEditable && isPencilClicked && onLabelChange && onLabelChange(e.currentTarget.value);
				}} />

				{isLabelEditable && <ActionIcon onClick={() => { setIsPencilClicked(!isPencilClicked); }} pt={2} fw={500} fz="xs">
					<IconPencil style={{ width: rem(18), height: rem(18), color: "#282147" }} stroke={1.5} />
				</ActionIcon>}
			</Group>
			<TextInput
				className={`mb-4 border-solid border-2 border-[#282147] rounded-[10px] overflow-hidden`}
				placeholder={placeholder}
				id="outlined-text-field"
				value={value}
				onChange={(event) => onChange(event.currentTarget.value)}
				variant="outline"
				leftSection={leftSection}
				rightSectionWidth={rightSectionWidth}
				rightSection={rightSection}
			/>
		</div>
	);
};
