import { Metadata } from "next";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { getTranslator } from "next-intl/server";

const Index = () => {
  return <LoginForm />;
};

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, "Auth");

  return {
    title: t("login"),
    description: "asdfsadf",
    keywords: ["a", "b", "c"],
  };
}
export default Index;
