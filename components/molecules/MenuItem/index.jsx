import Image from "next/image";
import React from "react";
import cx from "classnames";
import Link from "next/link";

export default function MenuItem({ title, icon, active, href }) {
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        <Link className="text-lg text-decoration-none" href={href}>
          {title}
        </Link>
      </p>
    </div>
  );
}
