import { RootLayoutProps } from "@/types/global";
// @ts-ignore
import { notFound } from "next/navigation";
import "../globals.css";
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
      <body>
        <Providers children={children} params={{ locale }} />
      </body>
    </html>
  );
}
