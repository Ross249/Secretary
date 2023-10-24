import { getTranslator } from "next-intl/server";
import React from "react";
import ForgetForm from "./ForgetForm";

const Index = () => {
  return <ForgetForm />;
};

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, "Auth");

  return {
    title: t("forget_title"),
    description: "asdfsadf",
    keywords: ["a", "b", "c"],
  };
}

export default Index;
