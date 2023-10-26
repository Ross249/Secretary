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
      <body className="bg-base-100 min-h-screen flex items-center justify-center">
        <div className="bg-base-50 flex rounded-2xl shadow-xl max-w-3xl p-5 items-center">
          <Providers children={children} params={{ locale }} />
          <div className="md:block hidden w-1/2 h-full">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
