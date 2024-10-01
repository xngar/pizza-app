"use client";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import CartBottom from "../components/CartBottom";
import CartItem from "../components/CartItem";
import { X } from "lucide-react";

const CartDesktop = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartDesktop must be used within a CartProvider");
  }

  const { isOpen, setisOpen } = cartContext;

  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } w-[500px] bg-white h-full fixed z-40 top-0 transition-all duration-200 hidden lg:flex flex-col p-3 `}
    >
      <div onClick={() => setisOpen(false)} className="flex justify-end">
        <X className="cursor-pointer" />
      </div>
      <div>CartDesktop</div>
      <div className="flex-1">
        {cartContext.cart.map((mapeo, item) => {
          return <CartItem key={item} pizza={mapeo} />;
        })}
      </div>
      <CartBottom />
    </div>
  );
};

export default CartDesktop;
