import Image from "next/image";
import { pizzas } from "../data/data";
import Pizza from "../components/Pizza";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="container mx-auto px-[100px]">
      <h1>Pizzeria</h1>
      <ModeToggle />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pizzas.map((pizza, item) => (
          <Pizza key={item} pizza={pizza} />
        ))}
      </div>
    </main>
  );
}
