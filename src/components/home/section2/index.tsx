import React, { FC } from "react";
import classes from "./section2.module.scss";
import Image from "next/image";
import { Row } from "reactstrap";

import iconShape from "../../../assets/icons/shape-4.png";
import imgSignature from "../../../assets/img/signiture.png";
import bgSection2 from "../../../assets/img/bg-section2.png";

const Section2: FC = () => {
  return (
    <div className={classes.Container}>
      <Row className={classes.wrapTopContent}>
        <p className={classes.titleHello}>Hello Dear</p>
        <h2 className={classes.titleDetail}>We Are Steak In!</h2>
        <div className={classes.wrapSticker}>
          <Image src={iconShape} alt="sticker" className={classes.iconShape} />
        </div>
        <p className={classes.textContentSection}>
          Steak In has the perfect place to enjoy fine food and great cocktails
          with excellent service, in comfortable atmospheric surroundings. We
          have a soft dining room, combined with an open kitchen, coffee take
          out bar and alovely awesome on site coffee roastery.
        </p>
        <div className={classes.wrapImgAuthor}>
          <Image
            src={imgSignature}
            alt="img-author"
            className={classes.imgAuthor}
          />
        </div>
      </Row>

      <Row className="pl-0 pr-0 mr-auto ml-auto mt-24">
        <div className={classes.wrapBodyContent}>
          <div className={classes.coverBodyContent}>
            <div className="relative text-center">
              <Image
                src={bgSection2}
                alt="background-section"
                className={classes.bgSection2}
              />
              <div className={classes.wrapMenuSection2}>
                <div className={classes.coverMenu}>
                  <div className={classes.setSize}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Section2;
