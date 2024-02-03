import { RouteDataTable } from "@/components/RouteDataTable";
import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import StandardLinkButton from "@/components/StandardLinkButton";

export default function RoutesPage() {
    return (
        <div className="p-5">
            <Header headerContent="Routes" />
            <hr />
            <div className="flex flex-row justify-between py-5">
                <StandardSegmentedControl />
                <StandardLinkButton text="New Route" href="" />
            </div>
            <RouteDataTable />
        </div>
    );
}