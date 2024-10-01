"use client";
import Image from "next/image";
import { pizzas } from "../data/data";
import Pizza from "../components/Pizza";

import Banner from "../components/Banner";
import { useContext } from "react";
import { CartContextoNuevo } from "@/context/CartContext2";

export default function Home() {
  const valorPrueba = useContext(CartContextoNuevo);

  const segundElemento = valorPrueba?.hola[1];

  console.log(typeof segundElemento);

  const validacion =
    typeof segundElemento === "object" && segundElemento?.nombre
      ? segundElemento.nombre
      : "no esta disponible";
  return (
    <main className=" mx-auto">
      {validacion}

      <div
        className={`${
          valorPrueba?.abrir && "bg-red-500 w-full h-[200px]"
        }  bg-green-500 w-full h-[100px]`}
      >
        {valorPrueba?.abrir ? <p>Estamos abiertos</p> : <p>estamos cerrados</p>}
      </div>
      <Banner />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {pizzas.map((pizza, item) => (
          <Pizza key={item} pizza={pizza} />
        ))}
      </div>
    </main>
  );
}
