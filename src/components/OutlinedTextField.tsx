import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Group, TextInput } from '@mantine/core';
import { FormControl } from 'react-bootstrap';
import EditControl from './EditControl';

interface OutlinedTextFieldProps {
	ref?: RefObject<HTMLInputElement>
	className?: string;
	id?: string;
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
	onLabelEditDismissed?: () => void;
	onMouseEnter?: () => void;
}

export default function OutlinedTextField({ ref, className, id, isLabelEditable = false, shouldBottomBeRounded = true, label, placeholder, value, leftSection, rightSectionWidth, rightSection, onChange, onLabelChange, onLabelEditDismissed, onMouseEnter }: OutlinedTextFieldProps) {

	const [isEditing, setIsEditing] = useState(false);

	const [labelText, setLabelText] = useState(label);

	const editLabelInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && editLabelInputRef.current) {
          editLabelInputRef.current.focus();
		  editLabelInputRef.current.select();
        }
      }, [isEditing]);

	return (
		<div className={`flex flex-col flex-auto ${className}`} >
			<Group justify="space-between" className="flex flex-row items-center">
				<FormControl
					as="input"
					ref={editLabelInputRef}
					type="text"
					size="lg"
					disabled={!isEditing}
					value={labelText}
					className={`text-[#282147] ${isEditing ? "border-solid border-2 border-b-[#282147] pl-1" : ""} flex-1`}
					onChange={(e) => {
						setLabelText(e.currentTarget.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							isLabelEditable && onLabelChange && onLabelChange(labelText);
							setIsEditing(false);
						} else if (e.key === "Escape") {
							setLabelText(label);
							onLabelEditDismissed && onLabelEditDismissed();
							setIsEditing(false);
						}
					}}
				/>

				{isLabelEditable && <EditControl
					isEditing={isEditing}
					onSave={() => {
						isLabelEditable && onLabelChange && onLabelChange(labelText);
					}}
					onDismiss={() => {
						setLabelText(label);
						onLabelEditDismissed && onLabelEditDismissed();
					}}
					onEditingChange={(newValue) => {
						setIsEditing(newValue);
					}}
				/>}
			</Group>
			<TextInput
				autoFocus={true}
				ref={ref}
				onMouseEnter={onMouseEnter}
				className={`mb-4 border-solid border-2 border-[#282147] rounded-t-[10px] ${shouldBottomBeRounded ? "rounded-b-[10px]" : ""} overflow-hidden`}
				placeholder={placeholder}
				id={id !== undefined ? id : "outlined-text-field"}
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
