import React from "react";
import Link from "next/link";
import Image from "next/image";

const ListGroupWithoutTitle = () => {
  return (
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
  );
};

export default ListGroupWithoutTitle;
