import React, { FC, useEffect, useState } from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import logoHome from "../../assets/img/logo_header.png";
import logoHomeScroll from "../../assets/img/logo_header_scroll.png";
import { listMenuHeader } from "@/modals/header-modals";
import DropdownList from "./dropdownList";

const listMenu: listMenuHeader[] = [
  { id: "home", name: "HOME" },
  { id: "menu", name: "MENU" },
  { id: "book_table", name: "BOOK A TABLE" },
  { id: "about", name: "ABOUT" },
  { id: "blog", name: "BLOG" },
];

const Header: FC = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 45) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setHasScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.Container}>
      <nav
        className={cx(classes.wrapHeader, { [classes.scrolled]: isScrolled })}
      >
        <div className={classes.coverHeader}>
          <div className={classes.itemLeft}>
            <button
              className={cx(classes.itemRightMobile, {
                [classes.borderBlack]: !isScrolled,
                [classes.openMenu]: !!showMenuMobile,
              })}
              onClick={() => setShowMenuMobile(!showMenuMobile)}
            >
              <span
                className={cx(classes.iconBar, {
                  [classes.iconBarBlack]: !isScrolled,
                })}
              ></span>
              <span
                className={cx(classes.iconBar, {
                  [classes.iconBarBlack]: !isScrolled,
                })}
              ></span>
              <span
                className={cx(classes.iconBar, {
                  [classes.iconBarBlack]: !isScrolled,
                })}
              ></span>
            </button>
            <Link href={`/`} className={classes.linkLogoHeader}>
              {isScrolled ? (
                <Image
                  src={logoHome}
                  alt="logo"
                  className={classes.logoHeader}
                />
              ) : (
                <Image
                  src={logoHomeScroll}
                  alt="logo"
                  className={classes.logoHeader}
                />
              )}
            </Link>
          </div>
          <div className={classes.itemRight}>
            <ul className={classes.listMenu}>
              {listMenu.map((it) => (
                <li key={it.id} className={classes.itemListMenu}>
                  <Link
                    href={"/"}
                    className={cx(classes.itemLink, {
                      [classes.colorBlackLink]: !!isScrolled,
                    })}
                  >
                    {it.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {!!showMenuMobile && <DropdownList />}
      </nav>
    </div>
  );
};

export default Header;
