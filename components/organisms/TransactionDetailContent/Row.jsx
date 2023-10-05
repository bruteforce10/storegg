import React from "react";

export default function Row({ label, value, className }) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
}
