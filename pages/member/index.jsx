/* eslint-disable @next/next/no-img-element */
import OverviewContent from "@/components/organisms/OverviewContent";
import SideBar from "@/components/organisms/SideBar";
import React from "react";

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverviewContent />
    </section>
  );
}
