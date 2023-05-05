import React, { FC, useEffect, useState } from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import logoHome from "../../assets/img/logo_header.png";

const listMenu = [
  { id: "home", name: "HOME" },
  { id: "about", name: "ABOUT" },
  { id: "menu", name: "MENU" },
  { id: "book_table", name: "BOOK A TABLE" },
  { id: "blog", name: "Blog" },
];

const Header: FC = () => {
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
            <button className={classes.itemRightMobile}></button>
            <Link href={`/`} className={classes.linkLogoHeader}>
              {isScrolled ? (
                <Image
                  src={logoHome}
                  alt="logo"
                  className={classes.logoHeader}
                />
              ) : (
                <Image
                  src={logoHome}
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
                  <Link href={"/"}>{it.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
