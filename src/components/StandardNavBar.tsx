"use client";

import { useContext, useMemo, useState } from 'react';
import { ActionIcon, rem } from '@mantine/core';
import {
	IconAlarm,
	IconFileText,
	IconFlag3,
	IconGraph,
	IconId,
	IconLogout,
	IconMap2,
	IconRoute,
	IconTruck,
	IconArrowBarToLeft,
	IconArrowBarToRight,
	IconMessage,
	TablerIconsProps,
} from '@tabler/icons-react';
import Link from 'next/link';
import IconTruckFilled from "#/public/ri_truck-fill.svg";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IsNavbarCollapsedContext } from '@/app/ContextWrapper';
import clsx from 'clsx';
import { useRoutes } from '@/util/hooks/useRoutes';
import { useConversation } from '@/util/hooks/useConversation';

interface StandardNavBarSubLocation {
	link?: string,
	label: string,
	icon: (props: TablerIconsProps) => JSX.Element
}

interface StandardNavBarLocation {
	link?: string,
	label: string,
	subLocations?: StandardNavBarSubLocation[],
	icon: (props: TablerIconsProps) => JSX.Element,
	onClick?: (label: string) => void,
}

export function StandardNavBar() {

	const { conversationId } = useConversation();

	const pathname = usePathname();

	const route = useMemo(() => {

		const splitPathname = pathname.split("/").filter(Boolean)[0];

		return splitPathname === undefined ? "Tours" : splitPathname === "chat_conversations" ? "Chat" : splitPathname[0].toUpperCase() + splitPathname.substring(1);
	}, [pathname]);

	const [active, setActive] = useState(route);

	const { isNavbarCollapsed, setIsNavbarCollapsed } = useContext(IsNavbarCollapsedContext);

	const [openedDropdownLabel, setOpenedDropdownLabel] = useState<string>();

	const chatRoutes = useRoutes();

	const subLocationsForChat = chatRoutes.slice(undefined, chatRoutes.length - 1).map((route, i) => (
		{
			...route
		} as StandardNavBarSubLocation
	));

	const mainLocations = [
		{
			link: '/routes',
			label: 'Routes',
			icon: IconRoute
		},
		{
			link: '/tours',
			label: 'Tours',
			icon: IconFlag3
		},
		{
			link: '/drivers',
			label: 'Drivers',
			icon: IconId
		},
		{
			link: '/vehicles',
			label: 'Vehicles',
			icon: IconTruck
		},
		{
			link: '/alarms',
			label: 'Alarms',
			icon: IconAlarm
		},
		{
			link: '/map',
			label: 'Map',
			icon: IconMap2
		},
		{
			link: '/documents',
			label: 'Documents',
			icon: IconFileText
		},
		{
			link: '/analytics',
			label: 'Analytics',
			icon: IconGraph
		},
		{
			label: 'Chat',
			icon: IconMessage,
			subLocations: subLocationsForChat,
			onClick(label) {
				openedDropdownLabel !== label ? setOpenedDropdownLabel(label) : setOpenedDropdownLabel(undefined);
			}
		},
	] as StandardNavBarLocation[];

	const links = mainLocations.map((item) => (
		<div
			className="relative"
			key={item.label}
			onClick={() => {
				item.onClick && item.onClick(item.label);
			}}
		>
			<Link
				className={
					clsx(
						"flex flex-row items-center no-underline text-sm text-[#CCCCCC] my-5 p-[0.625rem] border-1 font-medium",
						!isNavbarCollapsed ? "pr-[5rem]" : "justify-center",
						(item.label === active || undefined) && "bg-[#D6A917]",
						openedDropdownLabel === item.label ? "rounded-t-xl" : "rounded-xl"
					)
				}
				href={item.link ? item.link : ""}
				onClick={() => {
					setActive(item.label);
				}}
			>
				<item.icon className={`text-[#CCCCCC] ${!isNavbarCollapsed && "mr-[10px]"} w-[${rem(25)}] h-[${rem(25)}]`} stroke={1.5} />
				{!isNavbarCollapsed && <span>{item.label}</span>}
			</Link>
			{openedDropdownLabel === item.label && <div
				className="absolute bg-[#D6A917] w-full h-fit top-[44px] border-1 border-t-[2px] rounded-b-xl border-t-black"
			>
				{item.subLocations && item.subLocations.map((subLocation) => (
					<Link
						className={
							clsx(
								"flex flex-row flex-auto items-center no-underline text-sm text-[#CCCCCC] my-1 p-[0.625rem] border-1 font-medium",
								!isNavbarCollapsed ? "justify-start" : "justify-center"
							)
						}
						href={subLocation.link ? conversationId === "" ? subLocation.link : `${subLocation.link}/${conversationId}` : ""}
						onClick={() => {

							setOpenedDropdownLabel(undefined);
						}}
					>
						<subLocation.icon className={`text-[#CCCCCC] ${!isNavbarCollapsed && "mr-[10px]"} w-[${rem(25)}] h-[${rem(25)}]`} stroke={1.5} />
						{!isNavbarCollapsed && <span>{subLocation.label}</span>}
					</Link>
				))}
			</div>}
		</div>
	));

	return (
		<nav className="bg-[#2A2830] h-screen p-[1rem] min-w-max flex flex-col sticky justify-between">

			<div>


				<div className={`flex ${isNavbarCollapsed ? "flex-col" : "flex-row"} items-center justify-between no-underline text-[#CCCCCC]`}>
					<Image
						className="pb-5"
						src={IconTruckFilled}
						alt="truck"
					/>
					<ActionIcon className="hover:bg-transparent" onClick={() => {
						setIsNavbarCollapsed(!isNavbarCollapsed);
					}} >
						{isNavbarCollapsed
							?
							<IconArrowBarToRight className={`text-[#CCCCCC] w-[${rem(35)}] h-[${rem(35)}]`} stroke={1.5} />
							:
							<IconArrowBarToLeft className={`text-[#CCCCCC] w-[${rem(35)}] h-[${rem(35)}]`} stroke={1.5} />
						}
					</ActionIcon>
				</div>

				<div>
					{links}
				</div>
			</div>

			<div className="min-h:pt-[1rem] min-h:mt-[1rem]">
				<Link href="#" className="flex flex-row items-center no-underline text-sm text-[#CCCCCC] p-[0.625rem] border-1 rounded-xl font-medium" onClick={(event) => event.preventDefault()}>
					<IconLogout className={`text-[#CCCCCC] mr-[10px] w-[${rem(25)}] h-[${rem(25)}]`} stroke={1.5} />
					{!isNavbarCollapsed && <span>Logout</span>}
				</Link>
			</div>
		</nav>
	);
}