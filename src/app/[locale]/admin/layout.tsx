import { RootLayoutProps } from "@/types/global";
// @ts-ignore
import { notFound } from "next/navigation";
import "../../globals.css";
import Providers from "@/lib/Providers";
import DrawerSide from "@/components/DrawerSide";
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
      <body className="m-0">
        <div>
          <div className="bg-base-100 drawer lg:drawer-open">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <Providers children={children} params={{ locale }} />
            </div>
            <DrawerSide />
          </div>
        </div>
      </body>
    </html>
  );
}
