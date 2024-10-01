"use client";
import { CartContext } from "@/context/CartContext";

import React, { useContext } from "react";

const CartMobileIcon2 = () => {
  const contexto = useContext(CartContext);
  return <div>Hay Informacion del contexto 2</div>;
};

export default CartMobileIcon2;
