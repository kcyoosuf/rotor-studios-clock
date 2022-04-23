import React, { useEffect, useState } from "react";
import AnalogClock from "../../components/home/analog-clock/AnalogClock";
import DigitalClock from "../../components/home/digital-clock/DigitalClock";
import styles from "./Home.module.css"
const Home = (): JSX.Element => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  console.log("Rendered")
  return (
    <div className={styles.clocks}>
      <AnalogClock time={time} />
      <DigitalClock time={time} />
    </div>
  );
};

export default Home;
