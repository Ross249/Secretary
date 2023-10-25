"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import React, { useTransition } from "react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (lang: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };
  return (
    <div
      title="Change Language"
      className="dropdown dropdown-bottom dropdown-end "
    >
      <div tabIndex={0} className="btn m-1 btn-ghost normal-case">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-translate  fill-current w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
          <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12px"
          height="12px"
          fill="currentColor"
          className="bi bi-chevron-down  hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box menu-sm gap-1 w-56"
      >
        <li onClick={() => handleSelect("zh-HK")}>
          <div className={locale === "zh-HK" ? "active" : ""}>
            <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
              Zh
            </span>
            繁體中文
          </div>
        </li>
        <li onClick={() => handleSelect("en")}>
          <div className={locale === "en" ? "active" : ""}>
            <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
              En
            </span>
            English
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
