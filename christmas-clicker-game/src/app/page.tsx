"use client";
import { useState } from "react";
import AutismClick from "@/components/autism";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f472a] to-[#1a5a3a] flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-center py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-6xl my-10">Haxmas Day 1</h1>
          <p className="text-3xl font-bold">Count: {count}</p>
          <AutismClick onClick={() => setCount(count + 1)} />
        </div>
      </main>
    </div>
  );
}
