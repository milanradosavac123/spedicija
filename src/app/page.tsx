import { Button } from "@mantine/core";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import Image from "next/image";
import { TourDataTable } from "../components/TourDataTable";
import Link from "next/link";
import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";

export default function Home() {

  return (
    <div className="p-5">
      <Header headerText="Active Tours" />
      <hr />
      <div className="flex flex-row justify-between py-5">
        <StandardSegmentedControl />

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
