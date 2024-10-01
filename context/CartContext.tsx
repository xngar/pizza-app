"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type CartItem = {
  name?: string;
  size?: string;
  price?: number;
  crust?: string;
  image?: string;
  aditionalTopping?: string[];
  aditionalToppingPrice?: number;
};

type ObjetoProps = {
  nombre: string;
  edad: string;
};

interface CartContextType {
  isOpen: boolean;
  setisOpen: Dispatch<SetStateAction<boolean>>;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  nombre: string;
  setNombre: Dispatch<SetStateAction<string>>;
  objeto1: ObjetoProps;
  setObjeto1: Dispatch<SetStateAction<ObjetoProps>>;
  addToCart: (
    id: number,
    nombre: string,
    crust: string,
    image: string,
    size: string,
    aditionalTopping: string[]
  ) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [nombre, setNombre] = useState<string>("");
  const [objeto1, setObjeto1] = useState<ObjetoProps>({
    nombre: "mao",
    edad: "24",
  });

  const addToCart = (
    id: number,
    name: string,
    crust: string,
    image: string,
    size: string,
    aditionalTopping: string[]
  ) => {
    console.log(id, name, crust, image, size, aditionalTopping);
    const newItem = {
      id,
      name,
      crust,
      image,
      size,
      aditionalTopping,
    };
    setCart([...cart, newItem]);
    setisOpen(true);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setisOpen,
        cart,
        setCart,
        nombre,
        setNombre,
        objeto1,
        setObjeto1,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
