import DashboardNavBar from "@/components/DashboardNavBar";
import { getTranslator } from "next-intl/server";
import React from "react";

const Index = () => {
  return (
    <div className="drawer-content">
      <DashboardNavBar />
      <div className="max-w-[100vw] px-6 pb-16 xl:pr-2">
        <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
          <p>content</p>
        </div>
      </div>
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
