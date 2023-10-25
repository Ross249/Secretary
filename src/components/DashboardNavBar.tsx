import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import DashboardIcon from "./DashboardIcon";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import UserProfileIcon from "./UserProfileIcon";

const DashboardNavBar = () => {
  return (
    <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 [transform:translate3d(0,0,0)] shadow-sm">
      <nav className="navbar w-full">
        <div className="flex flex-1 md:gap-1 lg:gap-2">
          <span
            className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
            data-tip="Menu"
          >
            <label
              aria-label="Open Menu"
              htmlFor="drawer"
              className="btn btn-square btn-ghost drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </label>
          </span>
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={"/admin"}
              aria-current="page"
              aria-label="Dashboard"
              className="flex-0 btn btn-ghost px-2"
            >
              <Image src={"/vercel.svg"} width={32} height={32} alt="logo" />
              <div className="font-title inline-flex text-lg md:text-2xl">
                <span className="capitalize">Dashboard</span>
                <span className="capitalize text-[#002D74]">Template</span>
              </div>
            </Link>
          </div>
          <div className="hidden w-full max-w-sm lg:flex"></div>
        </div>
        <div className="flex-0">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <div className="hidden lg:inline-block">
            <UserProfileIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavBar;
