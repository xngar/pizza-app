"use client"
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import PizzaDetails from "../components/PizzaDetails"



const Pizza = ({ pizza }) => {

  const [openDialog, setOpenDialog] = useState(false);

  return <div className="group  rounded-2xl mb-2 p-2">


    <Image className="group-hover:translate-y-[-20px] transition-all duration-200" src={pizza.image} width={200} height={200} alt={pizza.name} priority="1" />
    <div className="text-xl font-bold capitalize">

      {pizza.name}
    </div>
    <div className="text-sm min-h-[60px]">

      {pizza.description}
    </div>

    <div className="flex items-center justify-between gap-3 px-3 mt-4 w-full">
      <div className="hidden md:flex font-semibold">
        valor de : {pizza.priceSm}
      </div>
      <div className="mt-2">

        <button onClick={() => setOpenDialog(true)} className="bg-slate-600 gradient text-white p-2 px-5 font-semibold rounded-lg shadow-sm text-sm hidden md:flex">Choose</button>

        <button onClick={() => setOpenDialog(true)} className="bg-orange-700 p-2 w-full rounded-md text-sm md:hidden">
          Precio desde: {pizza.priceSm}
        </button>
      </div>
    </div>



    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{pizza.name}</DialogTitle>
          <DialogDescription>
            <div className="">
              <PizzaDetails pizza={pizza} />
            </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>


  </div>;
};

export default Pizza;
