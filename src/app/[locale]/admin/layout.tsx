import { RootLayoutProps } from "@/types/global";
// @ts-ignore
import { notFound } from "next/navigation";
import "../../globals.css";
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
    <html data-theme="bumblebee" lang={locale}>
      <body>
        <div>
          <Providers children={children} params={{ locale }} />
        </div>
      </body>
    </html>
  );
}
