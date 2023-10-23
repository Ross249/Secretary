"use client";
import { RootLayoutProps } from "@/types/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { useState } from "react";

const Providers = async ({ children, params: { locale } }: RootLayoutProps) => {
  const [queryClient] = useState(() => new QueryClient());
  let messages;
  try {
    messages = (await import(`../languages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
