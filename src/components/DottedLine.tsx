
import React from 'react';
import { IconCircle } from '@tabler/icons-react';
import styles from './DottedLine.module.css';
import { rem } from '@mantine/core';

interface DottedLineProps {
    count: number
}

export default function DottedLine({ count }: DottedLineProps) {
  const circles = Array.from({ length: count }, (_, index) => (
    <div key={index} className={styles.circleContainer}>
      <IconCircle style={{ width: rem(18), height: rem(18), color: "#000000" }} stroke={1.5} />
    </div>
  ));

  const connectors = Array.from({ length: count - 1 }, (_, index) => (
    <div key={index} className={styles.connector}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  ));

  return (
    <div className={styles.connectorContainer}>
      {circles.map((circle, index) => (
        <React.Fragment key={index}>
          {circle}
          {index < connectors.length && connectors[index]}
        </React.Fragment>
      ))}
    </div>
  );
}; 