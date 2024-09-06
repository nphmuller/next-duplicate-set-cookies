"use client";

import { cookieReproAction } from "./actions";

export default function Home() {
  return (
    <button
      onClick={() => {
        cookieReproAction();
      }}
    >
      Run repro
    </button>
  );
}
