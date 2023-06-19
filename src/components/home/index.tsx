import React, { FC } from "react";
import classes from "./home.module.scss";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const HomePage: FC = () => {
  return (
    <div className={classes.Container}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default HomePage;
