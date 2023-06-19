import React, { FC, useMemo } from "react";
import classes from "./section2.module.scss";
import Image from "next/image";
import { Row } from "reactstrap";
import cx from "classnames";

import iconShape from "../../../assets/icons/shape-4.png";
import imgSignature from "../../../assets/img/signiture.png";
import bgSection2 from "../../../assets/img/bg-section2.png";
import shapeLeft from '../../../assets/img/shape-left.png';
import shapeRight from '../../../assets/img/shape-right.png';

import imgMenu1 from "../../../assets/img/img_section2_home/menu1.png";
import imgMenu2 from "../../../assets/img/img_section2_home/menu2.png";
import imgMenu3 from "../../../assets/img/img_section2_home/menu3.png";
import imgMenu4 from "../../../assets/img/img_section2_home/menu4.png";
import imgMenu5 from "../../../assets/img/img_section2_home/menu5.png";
import imgMenu6 from "../../../assets/img/img_section2_home/menu6.png";
import imgMenu7 from "../../../assets/img/img_section2_home/menu7.png";
import imgMenu8 from "../../../assets/img/img_section2_home/menu8.png";

const listMenu = [
  {
    id: "menu1",
    price: "$24.95",
    title: "Grilled American Fillet",
    content:
      "Pork fillet, ginger, garlic, honey, pepper & canola oil.creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.",
    image: imgMenu1,
  },

  {
    id: "menu2",
    price: "$34.95",
    title: "Grilled Seafood Paella",
    content:
      "Monkfish, onion, paella rice, garlic & smoked paprika, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.",
    image: imgMenu2,
  },

  {
    id: "menu3",
    price: "$38.95",
    title: "Roast Sea Trout",
    content:
      "Roast trout, English asparagus, watercress & royals, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.",
    image: imgMenu3,
  },

  {
    id: "menu4",
    price: "$18.95",
    title: "Smoked Paprika",
    content:
      "Red peppers, roasted garlic, lemon slices, olives & mint, creamy crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping.",
    image: imgMenu4,
  },

  {
    id: "menu5",
    price: "$13.95",
    title: "Smoked Hummus",
    content:
      "Roast trout, English asparagus, watercress & royals, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.",
    image: imgMenu5,
  },

  {
    id: "menu6",
    price: "$33.95",
    title: "Chicken Breast",
    content:
      "Red peppers, roasted garlic, lemon slices, olives & mint, creamy crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping.",
    image: imgMenu6,
  },

  {
    id: "menu7",
    price: "$29.95",
    title: "Roasted Steak Roulade",
    content:
      "Roast trout, English asparagus, watercress & royals, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.",
    image: imgMenu7,
  },

  {
    id: "menu8",
    price: "$29.95",
    title: "Roasted Steak Roulade",
    content:
      "Red peppers, roasted garlic, lemon slices, olives & mint, creamy crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping.",
    image: imgMenu8,
  },
];

const Section2: FC = () => {
  const renderListMenu = useMemo(() => {
    return (
      <>
        {listMenu.map((it) => (
          <div className={classes.itemMenu} key={it.id}>
            <div
              className={cx(classes.wrapItemMenu, {
                [classes.setPaddingRight]:
                  it.id === "menu1" ||
                  it.id === "menu3" ||
                  it.id === "menu5" ||
                  it.id === "menu7",
                [classes.setPaddingLeft]:
                  it.id === "menu2" ||
                  it.id === "menu4" ||
                  it.id === "menu6" ||
                  it.id === "menu8",
                [classes.marginBot]: it.id === 'menu2' || it.id === 'menu6',
              })}
            >
              {(it.id === "menu1" ||
                it.id === "menu2" ||
                it.id === "menu5" ||
                it.id === "menu6") && (
                <>
                  <div className={classes.contentLeft}>
                    <div className={classes.wrapContentLeft}>
                      <span className={classes.itemPrice}>{it.price}</span>
                      <h3 className={classes.itemTitle}>{it.title}</h3>
                      <div className="w-full flex justify-center items-center mt-4 mb-4">
                        <Image
                          src={iconShape}
                          alt="sticker"
                          className={classes.iconShape}
                        />
                      </div>
                      <p className={classes.itemContent}>{it.content}</p>
                    </div>
                  </div>
                  <div className={cx(classes.imgRight, classes.contentLeft)}>
                    {it.id === "menu5" && (
                      <div className={classes.recommendedTag}>
                        CHEF SELECTION
                      </div>
                    )}
                    <Image src={shapeLeft} alt="" className={classes.shapeLeft} />
                    <Image
                      src={it.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </>
              )}
              {(it.id === "menu3" ||
                it.id === "menu4" ||
                it.id === "menu7" ||
                it.id === "menu8") && (
                <>
                  <div className={cx(classes.imgRight, classes.contentLeft)}>
                    {it.id === "menu4" && (
                      <div className={classes.recommendedTag}>RECOMMENDED</div>
                    )}
                    <Image src={shapeRight} alt="" className={classes.shapeRight} />
                    <Image
                      src={it.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className={classes.contentLeft}>
                    <div className={classes.wrapContentLeft}>
                      <span className={classes.itemPrice}>{it.price}</span>
                      <h3 className={classes.itemTitle}>{it.title}</h3>
                      <div className="w-full flex justify-center items-center mt-4 mb-4">
                        <Image
                          src={iconShape}
                          alt="sticker"
                          className={classes.iconShape}
                        />
                      </div>
                      <p className={classes.itemContent}>{it.content}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }, []);

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

      <Row className="pl-0 pr-0 mr-auto ml-auto">
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
                  <div className={classes.setSize}>
                    <div className={classes.wrapRowMenu}>
                      <div className={classes.paddingMenu}>
                        <div className={classes.boxShadowMenu}>
                          <div className={classes.rowMenu}>
                            {renderListMenu}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
