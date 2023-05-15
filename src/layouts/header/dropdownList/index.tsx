import React, { FC, useCallback, useState } from "react";
import classes from "./drop-down-list.module.scss";
import { listMenuHeader } from "..";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";

interface Props {
  setShowMenuMobile: () => void;
}

const DropdownList: FC<Props> = ({ setShowMenuMobile }) => {
  const { asPath } = useRouter();
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const handleLinkClick = useCallback(
    (link: string) => {
      setSelectedLink(link);
      setShowMenuMobile;
    },
    [setShowMenuMobile]
  );
  return (
    <div className={classes.Container}>
      <ul className={classes.wrapListMenu}>
        {listMenuHeader.map((it) => (
          <li key={it.id} className={classes.wrapListItem}>
            <Link
              href={`${it.url}`}
              className={cx(
                classes.linkItem,
                selectedLink === it.id ? classes.selected : "",
                asPath === "/" ? (it.id === "home" ? classes.selected : "") : "",
                it.url === asPath ? classes.selected : '',
              )}
              onClick={() => handleLinkClick(it.id)}
            >
              {it.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
