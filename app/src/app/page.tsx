"use client";

import { Suspense } from "react";
import { MarketPlace, Loading } from "./components";
import Header from "./components/Header/Header";

function SearchBarFallback() {
  return <Loading />;
}

export default function Home() {
  return (
    <main>
        <Suspense fallback={<SearchBarFallback />}>
          <Header />
          <MarketPlace />
        </Suspense>
    </main>
  );
}