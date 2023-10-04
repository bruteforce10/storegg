import React from "react";
import cx from "classnames";
import Link from "next/link";

export default function Menu({ title, active = false, href = "/" }) {
  const classTitle = cx({ "nav-link": true, active });
  return (
    <li className="nav-item my-auto">
      <Link className={classTitle} aria-current="page" href={href}>
        {title}
      </Link>
    </li>
  );
}
