import { roboto } from "@/fonts";
import React from "react";
import Layout from "@/components/Layout/Layout";

import "../styles/globals.css";
import { StoreProvider } from "@/store/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>
        <Layout>
          <StoreProvider>{children}</StoreProvider>
        </Layout>
        <div id="reactPortalDropdown"></div>
      </body>
    </html>
  );
}
