"use client";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Ejercicio1 />
      <h1>
        <strong>Ejercicio 2</strong>
      </h1>
      <Ejercicio2 />
      <h1>
        <strong>Ejercicio 3</strong>
      </h1>
      <Ejercicio3 />
      <h1>
        <strong>Ejercicio 4</strong>
      </h1>
      <Ejercicio4 />
      <h1>
        <strong>Ejercicio 5</strong>
      </h1>
      <Ejercicio5 />
    </div>
  );
}
