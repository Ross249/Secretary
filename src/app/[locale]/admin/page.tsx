import { getTranslator } from "next-intl/server";
import React from "react";

const Index = () => {
  return (
    <div className="container font-serif ring-emerald-200">
      {"admin index page"}
    </div>
  );
};

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslator(locale, "Admin");

  return {
    title: t("dashboard"),
    description: "asdfsadf",
    keywords: ["a", "b", "c"],
  };
}

export default Index;
