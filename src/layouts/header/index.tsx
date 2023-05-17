import React, { FC, useCallback, useEffect, useState } from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import logoHome from "../../assets/img/logo_header.png";
import logoHomeScroll from "../../assets/img/logo_header_scroll.png";
import { listMenuHeaderModal } from "@/modals/header-modals";
import DropdownList from "./dropdownList";
import { useRouter } from "next/router";

export const listMenuHeader: listMenuHeaderModal[] = [
  { id: "home", name: "HOME", url: "/" },
  { id: "menu", name: "MENU", url: "/menu" },
  { id: "book_table", name: "BOOK A TABLE", url: "/book-a-table" },
  { id: "about", name: "ABOUT", url: "/about" },
  { id: "blog", name: "BLOG", url: "/blog" },
];

const Header: FC = () => {
  const { asPath } = useRouter();
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const handleLinkClick = useCallback((link: string) => {
    setSelectedLink(link);
  }, []);
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
                [classes.openMenu]: showMenuMobile,
              })}
              onClick={() => setShowMenuMobile(!showMenuMobile)}
            >
              <span
                className={cx(classes.iconBar, {
                  [classes.iconBarBlack]: isScrolled,
                })}
              ></span>
              <span
                className={cx(classes.iconBar, {
                  [classes.iconBarBlack]: isScrolled,
                })}
              ></span>
              <span
                className={cx(classes.iconBar, {
                  [classes.iconBarBlack]: isScrolled,
                })}
              ></span>
            </button>
            <Link href={`/`} className={classes.linkLogoHeader}>
              {!isScrolled ? (
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
              {listMenuHeader.map((it) => (
                <li key={it.id} className={classes.itemListMenu}>
                  <Link
                    href={`${it.url}`}
                    onClick={() => handleLinkClick(it.id)}
                    className={cx(
                      classes.itemLink,
                      {
                        [classes.colorBlackLink]: isScrolled,
                      },
                      selectedLink === it.id ? classes.selected : "",
                      asPath === "/"
                        ? it.id === "home"
                          ? classes.selected
                          : ""
                        : "",
                      it.url === asPath ? classes.selected : ""
                    )}
                  >
                    {it.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {showMenuMobile && (
          <DropdownList
            setShowMenuMobile={() => setShowMenuMobile(!showMenuMobile)}
          />
        )}
      </nav>
    </div>
  );
};

export default Header;
