import { roboto } from "@/fonts";
import React from "react";
import Layout from "@/components/Layout/Layout";

import "../styles/globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import TotalBadge from "./components/TotalBadge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>
        <StoreProvider>
          <Layout cartBadge={<TotalBadge />}>{children}</Layout>
          <div id="reactPortalDropdown"></div>
          <div id="reactPortalModal"></div>
        </StoreProvider>
      </body>
    </html>
  );
}
