import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import classes from "./section1.module.scss";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

import imgSlide1 from "../../../assets/img/slide1.png";
import imgSlide2 from "../../../assets/img/slide2.png";
import imgSlide3 from "../../../assets/img/slide3.png";

import arrowLeftSlide from "../../../assets/img/left-arrow-bg.png";
import arrowRightSlide from "../../../assets/img/right-arrow-bg.png";

interface LinkActionSlide1 {
  id: string;
  value: string;
}

const listLinkActionsSlide1: LinkActionSlide1[] = [
  {
    id: "view-menu",
    value: "VIEW MENU",
  },
  {
    id: "book-a-table",
    value: "BOOK A TABLE",
  },
];

const Section1: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dotColors, setDotColors] = useState<boolean[]>([true, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 10000);
    updateDotColors(currentSlide);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = useCallback(() => {
    const nextSlide = (currentSlide + 1) % 3;
    setCurrentSlide(nextSlide);
    updateDotColors(nextSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handlePrevSlide = useCallback(() => {
    const prevSlide = (currentSlide + 2) % 3;
    setCurrentSlide(prevSlide);
    updateDotColors(prevSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleDotClick = useCallback((index: number) => {
    setCurrentSlide(index);
    updateDotColors(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateDotColors = (activeIndex: number) => {
    const updatedColors = dotColors.map((_, index) => index === activeIndex);
    setDotColors(updatedColors);
  };

  const renderContentSlide = useMemo(() => {
    switch (currentSlide) {
      case 0:
        return (
          <div className={classes.wrapItemTextContent}>
            <div className={classes.coverItemFirst}>
              <div className={classes.itemFirst}>Steak In Offers You</div>
            </div>
            <div className={classes.coverItemSecond}>
              <div className={classes.itemSecond}>Fresh & Tasty Meals</div>
            </div>
            <div className={classes.coverItemThird}>
              <div className={classes.itemThird}>
                Steak In has the perfect place to enjoy fine food and great
                cocktails with
                <br />
                excellent service, in comfortable atmospheric surroundings.
              </div>
            </div>
            <div className={classes.coverItemFourth}>
              <div className={classes.listActions}>
                {listLinkActionsSlide1.map((it) => (
                  <Link
                    href={`#`}
                    key={it.id}
                    className={cx({
                      [classes.item1]: it.id === "view-menu",
                      [classes.item2]: it.id === "book-a-table",
                    })}
                  >
                    {it.value}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className={classes.wrapItemTextContent}>
            <div className={classes.coverItemFirst}>
              <div className={classes.itemFirst}>Unique Food</div>
            </div>
            <div className={classes.coverItemSecond}>
              <div className={classes.itemSecond}>For Unique Occasions</div>
            </div>
            <div className={classes.coverItemFourth}>
              <div className={classes.listActions}>
                <Link href={`#`} className={classes.actionSlide2}>
                  Book Your Table Now
                </Link>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className={classes.wrapItemTextContent}>
            <div className={classes.coverItemFirst}>
              <div className={classes.itemFirst}>Made With Love</div>
            </div>
            <div className={classes.coverItemSecond}>
              <div className={classes.itemSecond}>We Serve Quality Food</div>
            </div>
            <div className={classes.coverItemThird}>
              <div className={classes.itemThird}>
                Steak In has the perfect place to enjoy fine food and great
                cocktails with
                <br />
                excellent service, in comfortable atmospheric surroundings.
              </div>
            </div>
            <div className={classes.coverItemFourth}>
              <div className={classes.listActions}>
                <Link href={`#`} className={classes.actionSlide3}>
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        );

      default:
        break;
    }
  }, [currentSlide]);

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
                {renderContentSlide}
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
