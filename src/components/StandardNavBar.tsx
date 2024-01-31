"use client";

import { useState } from 'react';
import { rem } from '@mantine/core';
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

export function StandardNavBar() {
  const [active, setActive] = useState('Tours');

  const links = data.map((item) => (
    <Link
      className={`flex flex-row items-center no-underline text-sm text-[#CCCCCC] my-5 p-[0.625rem] border-1 rounded-[10px] font-medium ${(item.label === active || undefined) ? "bg-[#D6A917]" : ""}`}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={`text-[#CCCCCC] mr-[10px] w-[${rem(25)}] h-[${rem(25)}]`} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className="bg-[#2A2830] min-h-[100vh] p-[1rem] flex flex-col justify-between">

      <div>
        <div>
          <Image
            src={IconTruckFilled}
            alt="truck"
          />
        </div>

        <div>
          {links}
        </div>
      </div>

      <div className="pt-[1rem] mt-[1rem]">
        <Link href="#" className={`flex flex-row items-center no-underline text-sm text-[#CCCCCC] p-[0.625rem] border-1 rounded-[10px] font-medium`} onClick={(event) => event.preventDefault()}>
          <IconLogout className={`text-[#CCCCCC] mr-[10px] w-[${rem(25)}] h-[${rem(25)}]`} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}