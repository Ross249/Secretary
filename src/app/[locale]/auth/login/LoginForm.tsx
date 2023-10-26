"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const t = useTranslations("Auth");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const pressToLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl ">{t("title")}</h2>
      <p className="text-xs mt-4 ">{t("subtitle")}</p>
      <form action="" className="flex flex-col gap-4">
        <input
          className="p-2 mt-8 rounded-xl border"
          type="email"
          name="email"
          placeholder={t("email")}
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm({ ...loginForm, email: e.target.value })
          }
        />
        <div className="relative">
          <input
            className="p-2 rounded-xl border w-full"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder={t("password")}
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
          />
          <label className="swap swap-rotate absolute  right-3  top-1/2 -translate-y-1/2 bg-transparent border-transparent">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />

            {/* hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg "
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye swap-on fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>

            {/* close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye-slash swap-off fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
            </svg>
          </label>
        </div>

        <button
          className="btn   rounded-xl  py-2 hover:scale-105 duration-300"
          onClick={pressToLogin}
        >
          {t("login")}
        </button>

        <div className="mt-5 text-xs border-b borde-base py-4 ">
          <Link href="/auth/forget">{t("forget")}</Link>
        </div>

        <div className="mt-3 text-xs flex justify-between items-center ">
          <p>{t("haveno")}</p>
          <Link
            href="/auth/signup"
            className="py-2 px-5  border rounded-xl hover:scale-110 duration-300"
          >
            {t("signup")}
          </Link>
        </div>
      </form>
      <div className="mt-3 flex justify-between flex-row-reverse items-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default LoginForm;
