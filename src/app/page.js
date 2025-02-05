"use client";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Ejercicio1 />
      <Ejercicio2 />
    </div>
  );
}
