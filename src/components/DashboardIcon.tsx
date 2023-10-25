import Link from "next/link";
import React from "react";
import Image from "next/image";

const DashboardIcon = () => {
  return (
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
  );
};

export default DashboardIcon;
