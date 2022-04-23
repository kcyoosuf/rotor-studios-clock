import React from "react";
import styles from "./AnalogClock.module.css";

const AnalogClock = ({ time }: { time: Date }): JSX.Element => {
  /* Return rotation style based on the current value (hour,minute or seconds) */
  const applyTransform = (angle: number) => {
    return { transform: `rotate(${angle}deg)` };
  };
  return (
    <div className={styles.clock}>
      {/* 2 Hour angles = 30 Degrees, 24hr Clock	 */}
      <div
        className={styles.hour_hand}
        style={applyTransform(time.getHours() * 30)}
      />

      {/*  1 degree = 60 minute, 360 minute = 6 degree */}
      <div
        className={styles.min_hand}
        style={applyTransform(time.getMinutes() * 6)}
      />
      <div
        className={styles.sec_hand}
        style={applyTransform(time.getSeconds() * 6)}
      />
    </div>
  );
};
export default AnalogClock;
