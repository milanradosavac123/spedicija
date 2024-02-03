import { Button } from "@mantine/core";
import Image from "next/image";
import IconTabNew from "#/public/fluent_tab-new-24-filled.svg";
import { RouteDataTable } from "@/components/RouteDataTable";
import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";

export default function RoutesPage() {
    return (
        <div className="p-5">
            <Header header="Routes" />
            <hr />
            <div className="flex flex-row justify-between py-5">
                <StandardSegmentedControl />

                <Button
                    className="bg-[#282147] max-w-fit flex-center"
                    pr={12}
                    rightSection={
                        <Image
                            src={IconTabNew}
                            alt="new route"
                        />
                    }
                >
                    New Route
                </Button>
            </div>
            <RouteDataTable />
        </div>
    );
}