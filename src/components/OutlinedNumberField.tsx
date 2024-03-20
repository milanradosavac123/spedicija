import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Group, NumberInput, Text, TextInput } from '@mantine/core';
import EditControl from './EditControl';

interface OutlinedNumberFieldProps {
	ref?: RefObject<HTMLInputElement>
	className?: string;
	id?: string;
	isLabelEditable?: boolean;
	shouldBottomBeRounded?: boolean
	label: string;
	placeholder: string;
	value: (string | number);
	leftSection?: React.ReactNode;
	rightSectionWidth?: number;
	rightSection?: React.ReactNode;
	onChange: (value: string | number) => void;
	onLabelChange?: (value: string) => void;
	onLabelEditDismissed?: () => void;
	onMouseEnter?: () => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function OutlinedNumberField({ ref, className, id, isLabelEditable = false, shouldBottomBeRounded = true, label, placeholder, value, leftSection, rightSectionWidth, rightSection, onChange, onLabelChange, onLabelEditDismissed, onMouseEnter, onKeyDown }: OutlinedNumberFieldProps) {

	const [isEditing, setIsEditing] = useState(false);

	const [labelText, setLabelText] = useState(label);

	const editLabelInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isEditing && editLabelInputRef.current) {
			editLabelInputRef.current.focus();
			editLabelInputRef.current.select();
		}
	}, [isEditing]);

	function saveLabel() {
		isLabelEditable && onLabelChange && onLabelChange(labelText);
	}

	function dismissLabel() {
		setLabelText(label);
		onLabelEditDismissed && onLabelEditDismissed();
	}

	return (
		<div className={`flex flex-col flex-auto ${className}`} >
			<Group justify="space-between" className="flex flex-row items-center">
				{!isEditing && <Text
					className="focus:outline-none text-[#282147]"
				>
					{labelText}
				</Text>}

				{isEditing && <TextInput
					variant="unstyled"
					component="input"
					ref={editLabelInputRef}
					type="text"
					size="s"
					disabled={!isEditing}
					value={labelText}
					classNames={
						{
							"input": "text-[#282147]"
						}
					}
					onChange={(e) => {
						setLabelText(e.currentTarget.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							saveLabel();
							setIsEditing(false);
						} else if (e.key === "Escape") {
							dismissLabel();
							setIsEditing(false);
						}
					}}
				/>}

				<EditControl
					isEditing={isLabelEditable && isEditing}
					colour={!isLabelEditable ? "white" : undefined}
					onSave={saveLabel}
					onDismiss={dismissLabel}
					onEditingChange={(newValue) => {
						isLabelEditable && setIsEditing(newValue);
					}}
				/>
			</Group>
			<NumberInput
				autoFocus={true}
				ref={ref}
				onMouseEnter={onMouseEnter}
				className={`mb-4 border-solid text-[#282147] border-2 border-[#282147] rounded-t-[10px] ${shouldBottomBeRounded ? "rounded-b-[10px]" : ""} overflow-hidden`}
				placeholder={placeholder}
				id={id !== undefined ? id : "outlined-text-field"}
				value={value}
				onChange={onChange}
				variant="outline"
				leftSection={leftSection}
				rightSectionWidth={rightSectionWidth}
				rightSection={rightSection}
				autoComplete="off"
				onKeyDown={onKeyDown}
			/>
		</div>
	);
};
