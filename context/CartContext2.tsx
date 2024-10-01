"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ObjetoProps {
  id: number;
  nombre: string;
}

interface HolaProps {
  hola: (string | number | ObjetoProps)[];
  setHola: Dispatch<SetStateAction<(string | number | ObjetoProps)[]>>;
  abrir: boolean;
  setAbrir: Dispatch<SetStateAction<boolean>>;
}

export const CartContextoNuevo = createContext<HolaProps | undefined>(
  undefined
);

const CartContextoNuevoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hola, setHola] = useState<(string | number | ObjetoProps)[]>([
    "hola",
    { id: 1, nombre: "pedro" },
  ]);

  const [abrir, setAbrir] = useState(false);

  return (
    <CartContextoNuevo.Provider value={{ hola, setHola, abrir, setAbrir }}>
      {children}
    </CartContextoNuevo.Provider>
  );
};

export default CartContextoNuevoProvider;
