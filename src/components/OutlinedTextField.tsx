import React, { useState } from 'react';
import { ActionIcon, Group, TextInput, rem } from '@mantine/core';
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react';
import { FormControl } from 'react-bootstrap';

interface OutlinedTextFieldProps {
	className?: string
	isLabelEditable?: boolean;
	shouldBottomBeRounded?: boolean
	label: string;
	placeholder: string;
	value: string;
	leftSection?: React.ReactNode;
	rightSectionWidth?: number;
	rightSection?: React.ReactNode;
	onChange: (value: string) => void;
	onLabelChange?: (value: string) => void;
}

export default function OutlinedTextField({ className, isLabelEditable = false, shouldBottomBeRounded = true, label, placeholder, value, leftSection, rightSectionWidth, rightSection, onChange, onLabelChange = undefined }: OutlinedTextFieldProps) {

	const [isPencilClicked, setIsPencilClicked] = useState(false);

	const [labelText, setLabelText] = useState(label);

	return (
		<div className={`flex flex-col flex-auto ${className}`} >
			<Group justify="space-between" mb={5}>
				<FormControl disabled={!isPencilClicked} value={labelText} className={`text-[#282147] ${isPencilClicked ? "border-solid border-2 border-[#282147] pl-1" : ""}`} size="sm" onChange={(e) => {
					setLabelText(e.currentTarget.value);
				}} />

				<div>
					{isLabelEditable && !isPencilClicked && <ActionIcon onClick={() => { setIsPencilClicked(!isPencilClicked); }} pt={2} fw={500} fz="xs">
						<IconPencil style={{ width: rem(18), height: rem(18), color: "#282147" }} stroke={1.5} />
					</ActionIcon>}
					{isLabelEditable && isPencilClicked && <ActionIcon onClick={() => {
						isLabelEditable && isPencilClicked && onLabelChange && onLabelChange(labelText);
						setIsPencilClicked(false);
					}}>
						<IconCheck style={{ width: rem(18), height: rem(18), color: "black" }} stroke={1.5} />
					</ActionIcon>}
					{isLabelEditable && isPencilClicked && <ActionIcon onClick={() => {
						setLabelText(label);
						setIsPencilClicked(false);
					}}>
						<IconX style={{ width: rem(18), height: rem(18), color: "black" }} stroke={1.5} />
					</ActionIcon>}
				</div>
			</Group>
			<TextInput
				className={`mb-4 border-solid border-2 border-[#282147] rounded-t-[10px] ${shouldBottomBeRounded ? "rounded-b-[10px]" : ""} overflow-hidden`}
				placeholder={placeholder}
				id="outlined-text-field"
				value={value}
				onChange={(event) => onChange(event.currentTarget.value)}
				variant="outline"
				leftSection={leftSection}
				rightSectionWidth={rightSectionWidth}
				rightSection={rightSection}
				autoComplete="off"
			/>
		</div>
	);
};
