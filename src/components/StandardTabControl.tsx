import { Tabs } from "@mantine/core";

interface StandardTabControlProps {
    tabTitles: string[],
    tabContent: React.ReactNode[]
}

export default function StandardTabControl({ tabTitles, tabContent }: StandardTabControlProps) {
    return (
        <Tabs
            classNames={
                {
                    tab: "data-active:bg-standard-purple data-active:text-white rounded-t-xl",
                    list: "border border-b-standard-purple border-t-transparent border-l-transparent border-r-transparent max-w-fit"
                }
            }
            variant="outline"
            defaultValue={tabTitles[0].toLowerCase()}
        >
            <Tabs.List>
                {tabTitles.map((title, i) => (
                    <Tabs.Tab
                        value={title.toLowerCase()}
                        key={i}
                    >
                        {title}
                    </Tabs.Tab>
                ))}
            </Tabs.List>

            {tabContent.map((child, i) => (
                <Tabs.Panel
                    value={tabTitles[i].toLowerCase()}
                    key={i}
                >
                    {child}
                </Tabs.Panel>
            ))}
        </Tabs>
    );
}