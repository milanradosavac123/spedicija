import { TourDataTable } from "@/components/TourDataTable";
import Header from "@/components/Header";
import { StandardSegmentedControl } from "@/components/StandardSegmentedControl";
import StandardLinkButton from "@/components/StandardLinkButton";

export default function Home() {

  return (
    <div className="p-5">
      <Header headerContent="Active Tours" />
      <hr />
      <div className="flex flex-row justify-between py-5">
        <StandardSegmentedControl />

        <StandardLinkButton text="New Tour" href="/new_tour" />
      </div>
      <TourDataTable />
    </div>
  );
}
