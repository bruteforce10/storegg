/* eslint-disable @next/next/no-img-element */
import SideBar from "@/components/organisms/SideBar";
import TransactionContent from "@/components/organisms/TransactionContent";
import React from "react";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu={"transaction"} />
      <TransactionContent />
    </section>
  );
}
