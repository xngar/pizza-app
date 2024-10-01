"use client"
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import CartMobileIcon2 from "./CartMobileIcon2";

const CartMobile = () => {

  const { isOpen } = useContext(CartContext);
  return <div className={`${isOpen ? "bg-green-600 w-full h-full fixed z-9" : "hidden"} lg:hidden`}>CartMobile

    <CartMobileIcon2 /></div>;
};

export default CartMobile;
