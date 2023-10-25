import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ListGroup from "./ListGroup";
import ListGroupWithoutTitle from "./ListGroupWithoutTitle";
import DashboardIcon from "./DashboardIcon";

const DrawerSide = () => {
  return (
    <div className="drawer-side scroll-smooth scroll-pt-20">
      <label
        htmlFor="drawer"
        className="drawer-overlay"
        aria-label="Close menu"
      />
      <aside className="bg-base-100 w-80">
        <DashboardIcon />
        {/* <ul className="menu bg-base-200 menu-horizontal w-full justify-between px-4 py-2 lg:hidden">
          <li>
            <LanguageSwitcher />
          </li>
        </ul> */}
        <div className="h-4 mt-16 lg:mt-0" />
        <ListGroupWithoutTitle />
        <ListGroup />
        <ListGroup />
        <ListGroup />
        <div className="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div>
      </aside>
    </div>
  );
};

export default DrawerSide;
