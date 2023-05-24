import React, { FC, useEffect, useState } from "react";
import classes from "./section1.module.scss";
import Image from "next/image";
import cx from "classnames";

import imgSlide1 from "../../../assets/img/slide1.png";
import imgSlide2 from "../../../assets/img/slide2.png";
import imgSlide3 from "../../../assets/img/slide3.png";

import arrowLeftSlide from "../../../assets/img/left-arrow-bg.png";
import arrowRightSlide from "../../../assets/img/right-arrow-bg.png";

const Section1: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dotColors, setDotColors] = useState<boolean[]>([true, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    updateDotColors(currentSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % 3;
    setCurrentSlide(nextSlide);
    updateDotColors(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = (currentSlide + 2) % 3;
    setCurrentSlide(prevSlide);
    updateDotColors(prevSlide);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    updateDotColors(index);
  };

  const updateDotColors = (activeIndex: number) => {
    const updatedColors = dotColors.map((_, index) => index === activeIndex);
    setDotColors(updatedColors);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection}>
        <div className={classes.coverSection}>
          <ul className={classes.wrapSlider}>
            <li className={classes.itemSlider}>
              <div className={classes.wrapItem}>
                <Image
                  src={
                    currentSlide === 0
                      ? imgSlide1
                      : currentSlide === 1
                      ? imgSlide2
                      : imgSlide3
                  }
                  alt={`Image ${currentSlide + 1}`}
                  fill
                  className={classes.imgSlide}
                />
              </div>
              <div className={classes.wrapTextContent}>
                <div className={classes.wrapItemTextContent}>
                  <div className={classes.coverItemFirst}>
                    <div className={classes.itemFirst}>Steak In Offers You</div>
                  </div>
                  <div className={classes.coverItemSecond}>
                    <div className={classes.itemSecond}>
                      Fresh & Tasty Meals
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={classes.leftArrowSlide} onClick={handlePrevSlide}>
            <Image
              src={arrowLeftSlide}
              alt=""
              className={classes.arrowLeftSlide}
            />
          </div>
          <div className={classes.RightArrowSlide} onClick={handleNextSlide}>
            <Image
              src={arrowRightSlide}
              alt=""
              className={classes.arrowRightSlide}
            />
          </div>
          <div className={classes.wrapListDotSlide}>
            <div className={classes.listDotSlide}>
              {dotColors.map((isActive, index) => (
                <div
                  key={index}
                  className={cx(classes.wrapDotItem, {
                    [classes.selectedSlide]: isActive,
                  })}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
