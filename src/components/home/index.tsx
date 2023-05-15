import React, { FC } from "react";
import classes from "./home.module.scss";
import Section1 from "./section1";

const HomePage: FC = () => {
  return (
    <div className={classes.Container}>
      <Section1 />
    </div>
  );
};

export default HomePage;
