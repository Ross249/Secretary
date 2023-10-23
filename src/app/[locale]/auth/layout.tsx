import { RootLayoutProps } from "@/types/global";
// @ts-ignore
import { notFound } from "next/navigation";
import "../../globals.css";
import { useEffect } from "react";
import Providers from "@/lib/Providers";
const locales = ["en", "zh-HK"];

export default function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounedd-2xl shadow-lg max-w-3xl p-5 items-center">
          <Providers children={children} params={{ locale }} />
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
