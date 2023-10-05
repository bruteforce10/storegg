import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "@/components/molecules/MenuItem";

export default function SideBar({ activeMenu }) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            href={"/"}
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transaction"
            icon="ic-menu-transaction"
            href={"/member/transactions"}
            active={activeMenu === "transaction"}
          />
          <MenuItem title="Message" icon="ic-menu-messages" href={"/member"} />
          <MenuItem title="Card" icon="ic-menu-card" href={"/member"} />
          <MenuItem title="Rewards" icon="ic-menu-reward" href={"/member"} />
          <MenuItem
            title="Settings"
            icon="ic-menu-setting"
            href={"/member/edit-profile"}
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" href={"/sign-in"} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
