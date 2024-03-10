"use client";

import { Cart, Header } from "../components";

export default function Checkout() {
  return (
    <section>
      <Header noCart/>
      <Cart full/>
    </section>
  );
}