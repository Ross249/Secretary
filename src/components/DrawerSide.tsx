import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const DrawerSide = () => {
  return (
    <div className="drawer-side scroll-smooth scroll-pt-20">
      <label
        htmlFor="drawer"
        className="drawer-overlay"
        aria-label="Close menu"
      />
      <aside className="bg-base-100 w-80">
        <div className="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex">
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
        <ul className="menu bg-base-200 menu-horizontal w-full justify-between px-4 py-2 lg:hidden">
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
        <div className="h-4" />
        <ul className="menu menu-sm lg:menu-md px-4 py-0">
          <li>
            <Link href="#" className="py-2 px-4 text-sm active rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 1</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 2</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 3</span>
            </Link>
          </li>
        </ul>
        <ul className="menu menu-sm lg:menu-md px-4 py-0">
          <li></li>
          <li className="menu-title flex flex-row gap-4">
            <span className="text-base-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 283 64"
                width={20}
                height={20}
              >
                <path
                  fill="black"
                  d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
                />
              </svg>
            </span>
            <span>group 1</span>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 1</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 2</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 3</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 4</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 5</span>
            </Link>
          </li>
        </ul>
        <ul className="menu menu-sm lg:menu-md px-4 py-0">
          <li></li>
          <li className="menu-title flex flex-row gap-4">
            <span className="text-base-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 283 64"
                width={20}
                height={20}
              >
                <path
                  fill="black"
                  d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
                />
              </svg>
            </span>
            <span>group 2</span>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 1</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 2</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 3</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 4</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 5</span>
            </Link>
          </li>
        </ul>
        <ul className="menu menu-sm lg:menu-md px-4 py-0">
          <li></li>
          <li className="menu-title flex flex-row gap-4">
            <span className="text-base-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 283 64"
                width={20}
                height={20}
              >
                <path
                  fill="black"
                  d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
                />
              </svg>
            </span>
            <span>group 3</span>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 1</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 2</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 3</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 4</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 5</span>
            </Link>
          </li>
        </ul>
        <ul className="menu menu-sm lg:menu-md px-4 py-0">
          <li></li>
          <li className="menu-title flex flex-row gap-4">
            <span className="text-base-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 283 64"
                width={20}
                height={20}
              >
                <path
                  fill="black"
                  d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
                />
              </svg>
            </span>
            <span>group 4</span>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 1</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 2</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 3</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 4</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="py-2 px-4 text-sm  rounded-lg">
              <span>
                <Image
                  src={"/next.svg"}
                  width={24}
                  height={24}
                  alt="logo"
                  className="bg-white-200"
                />{" "}
              </span>
              <span>Item 5</span>
            </Link>
          </li>
        </ul>
        <div className="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div>
      </aside>
    </div>
  );
};

export default DrawerSide;
