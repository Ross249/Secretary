import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import React from "react";
import SignupForm from "./SignupForm";

const Index = () => {
  return <SignupForm />;
};

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, "Auth");

  return {
    title: t("signup"),
    description: "asdfsadf",
    keywords: ["a", "b", "c"],
  };
}

export default Index;
