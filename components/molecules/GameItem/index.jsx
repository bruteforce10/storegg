/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GameItem({ title, category, thumbnail }) {
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={`/img/${thumbnail}.png`}
            width="205"
            height="270"
            alt=""
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src="/icon/console.svg" width="54" height="36" alt="" />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
