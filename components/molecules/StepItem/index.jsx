import Image from "next/image";
import React from "react";

export default function StepItem({ icon, title, desc1, desc2 }) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <Image
          src={`/icon/${icon}.svg`}
          width="80"
          height="80"
          alt="icon step"
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
