"use client";

import { useState } from 'react';
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
  IconArrowBarToRight
} from '@tabler/icons-react';
import Link from 'next/link';
import IconTruckFilled from "#/public/ri_truck-fill.svg";
import Image from 'next/image';

const data = [
  { link: '/routes', label: 'Routes', icon: IconRoute },
  { link: '/', label: 'Tours', icon: IconFlag3 },
  { link: '', label: 'Drivers', icon: IconId },
  { link: '', label: 'Vehicles', icon: IconTruck },
  { link: '', label: 'Alarms', icon: IconAlarm },
  { link: '', label: 'Map', icon: IconMap2 },
  { link: '', label: 'Documents', icon: IconFileText },
  { link: '', label: 'Analytics', icon: IconGraph },
];

interface StandardNavBarProps {
  className?: string,
  isNavbarCollapsed: boolean,
  onNavbarCollapseToggle: (newValue: boolean) => void,
}

export function StandardNavBar({ className, isNavbarCollapsed = false, onNavbarCollapseToggle }: StandardNavBarProps) {
  const [active, setActive] = useState('Tours');

  const links = data.map((item) => (
    <Link
      className={`flex flex-row items-center no-underline text-sm text-[#CCCCCC] my-5 p-[0.625rem] ${!isNavbarCollapsed ? "pr-[5rem]" : "justify-center"} border-1 rounded-[10px] font-medium ${(item.label === active || undefined) ? "bg-[#D6A917]" : ""}`}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={`text-[#CCCCCC] ${!isNavbarCollapsed && "mr-[10px]"} w-[${rem(25)}] h-[${rem(25)}]`} stroke={1.5} />
      {!isNavbarCollapsed && <span>{item.label}</span>}
    </Link>
  ));

  return (
    <nav className={`bg-[#2A2830] min-h-[100vh] max-h-[100vh] p-[1rem] min-w-max flex flex-col justify-between fixed ${className ? className : ""}`}>

      <div>
        <div className={`flex ${isNavbarCollapsed ? "flex-col" : "flex-row"} items-center justify-between no-underline text-[#CCCCCC]`}>
          <Image
            className="pb-5"
            src={IconTruckFilled}
            alt="truck"
          />
          <ActionIcon onClick={() => {
            onNavbarCollapseToggle(!isNavbarCollapsed);
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

      <div className="pt-[1rem] mt-[1rem]">
        <Link href="#" className="flex flex-row items-center no-underline text-sm text-[#CCCCCC] p-[0.625rem] border-1 rounded-[10px] font-medium" onClick={(event) => event.preventDefault()}>
          <IconLogout className={`text-[#CCCCCC] mr-[10px] w-[${rem(25)}] h-[${rem(25)}]`} stroke={1.5} />
          {!isNavbarCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </nav>
  );
}