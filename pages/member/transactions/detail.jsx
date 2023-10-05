/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import TransactionDetailContent from "@/components/organisms/TransactionDetailContent";
import React from "react";

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
}
