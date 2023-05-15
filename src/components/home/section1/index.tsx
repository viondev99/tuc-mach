import React, { FC } from "react";
import classes from "./section1.module.scss";
import Image from "next/image";

const Section1: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection}>
        <div className={classes.coverSection}>
          <ul className={classes.wrapSlider}>
            <li className={classes.itemSlider}>
                <div className={classes.wrapItem}>
                    <Image src={''} alt=""/>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section1;
