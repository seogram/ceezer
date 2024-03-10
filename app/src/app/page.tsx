"use client";

import { Suspense } from "react";
import { MarketPlace, Loading } from "./components";
import { Header, SearchBox } from "./components";

function SearchBarFallback() {
  return <Loading />;
}

export default function Home() {

  return (
    <main>
      <Suspense fallback={<SearchBarFallback />}>
        <Header />
        <SearchBox />
        <MarketPlace />
      </Suspense>
    </main>
  );
}