import React, { FC } from "react";
import classes from './section2.module.scss'

const Section2: FC = () => {
  return <div className={classes.Container}>
    <div className={classes.wrapTopContent}>
      <div className={classes.titleHello}>Hello Dear</div>
    </div>
  </div>;
};

export default Section2;
