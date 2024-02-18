
import { SegmentedControl } from '@mantine/core';
import styles from './StandardSegmentedControl.module.css';

export function StandardSegmentedControl() {
    return (
        <SegmentedControl
            className="bg-gray-400 max-w-fit"
            radius="xl"
            size="md"
            data={["Active Tours", "Upcoming Tours", "Completed tours"]}
            classNames={{
                "indicator": "bg-[#282147]",
                "label": "text-white"
            }}
        />
    );
}