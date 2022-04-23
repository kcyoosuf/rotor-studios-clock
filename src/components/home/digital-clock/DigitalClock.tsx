import React from "react";
import { addZero } from "../../../utils/commonUtils";
import styles from "./DigitalClock.module.css";

const DigitalClock = ({ time }: { time: Date }): JSX.Element => {

  /* Format and return time in HH:MM:SS format */
  const formatedTime = () => {
    return `${addZero(time.getHours())}: ${addZero(
      time.getMinutes()
    )}: ${addZero(time.getSeconds())} `;
  };
  return (
    <div className={styles.clock}>
      <div className={styles.time}>{formatedTime()}</div>
    </div>
  );
};
export default DigitalClock;
