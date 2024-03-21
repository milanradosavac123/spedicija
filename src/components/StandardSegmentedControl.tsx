
import { SegmentedControl } from '@mantine/core';

interface StandardSegmentedControlProps {
    data: string[],
    onChange?: (s: string) => void,
}

export function StandardSegmentedControl({ data, onChange }: StandardSegmentedControlProps) {
    return (
        <SegmentedControl
            className="bg-gray-400 max-w-fit"
            radius="xl"
            size="md"
            data={data}
            classNames={{
                "indicator": "bg-standard-purple",
                "label": "text-white hover:text-white"
            }}
            onChange={onChange}
        />
    );
}