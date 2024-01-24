import { Button, SegmentedControl, rem } from "@mantine/core";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import { TourDataTable } from "../components/TourDataTable";
import Link from "next/link";

export default function Home() {

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between py-5">
        <SegmentedControl
          className="bg-gray-400 max-w-fit"
          radius="xl"
          size="md"
          data={["Current Tours", "Upcoming Tours", "Past tours"]}
        />

        <Button
          component={Link}
          href="/new_tour"
          className="bg-[#282147] max-w-fit flex-center"
          pr={12}
          rightSection={
            <Image
              src={IconTabNew}
              alt="new tour"
            />
          }
        >
          New Tour
        </Button>
      </div>
      <TourDataTable />
    </div>
  );
}
