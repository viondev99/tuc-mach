import React, { FC } from "react";
import classes from "./section3.module.scss";
import { Row } from "reactstrap";

const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

const Section3: FC = () => {
  return (
    <div className={classes.Container}>
      <Row className={classes.Row}></Row>
    </div>
  );
};

export default Section3;
