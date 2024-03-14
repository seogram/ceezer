import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactQueryProvider } from "./ReactQueryProvider";
import ThemeProvider from "../theme";
import { CartItemsProvider } from "./context/CartItemsContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <ReactQueryProvider>
            <AppRouterCacheProvider>
              <CartItemsProvider>
                {children}
              </CartItemsProvider>
            </AppRouterCacheProvider>
          </ReactQueryProvider>

        </body>
      </html>
    </ThemeProvider>
  );
}
