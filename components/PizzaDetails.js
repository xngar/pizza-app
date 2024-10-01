import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import SizeSelection from "../components/SizeSelection";
import CrustSelection from "../components/CrustSelection";
import Topping from "../components/Topping";
import { CartContext } from "@/context/CartContext";

const PizzaDetails = ({ pizza, setOpenDialog }) => {
  const [size, setSize] = useState("small");
  const [price, setPrice] = useState(0);
  const [crust, setCrust] = useState("traditional");
  const [aditionalTopping, setAdicionalTopping] = useState([]);
  const [aditionalToppingPrice, setAdicionalToppingPrice] = useState(0);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(pizza.priceSm + aditionalToppingPrice).toFixed(2))
      : size === "medium"
        ? setPrice(parseFloat(pizza.priceMd + aditionalToppingPrice).toFixed(2))
        : size === "large"
          ? setPrice(parseFloat(pizza.priceLg + aditionalToppingPrice).toFixed(2))
          : null;
  }, [size, aditionalToppingPrice]);

  useEffect(() => {
    if (aditionalTopping.length > 0) {
      const toppingPrice = aditionalTopping.reduce((a, i) => {
        return a + i.price;
      }, 0);

      setAdicionalToppingPrice(toppingPrice);
    } else {
      setAdicionalToppingPrice(0);
    }
  }, [aditionalTopping]);

  return (
    <div>
      <div>
        <Image src={pizza.image} width={250} height={250} alt={pizza.name} />
      </div>
      <div>
        {size === "small"
          ? "25 cms "
          : size === "medium"
            ? "30 cms "
            : size === "large"
              ? "35 cms "
              : ""}
        , {crust}
      </div>

      {/* scroll info */}

      <div className="overflow-scroll h-[300px]">
        <div>
          <SizeSelection pizza={pizza} size={size} setSize={setSize} />
        </div>
        {/* crust selection  */}
        <CrustSelection crust={crust} setCrust={setCrust} />
        <div></div>
        <div>
          <div className="flex gap-4 flex-wrap justify-center">
            {pizza.toppings?.map((top, item) => {
              return (
                <Topping
                  key={item}
                  topping={top}
                  aditionalTopping={aditionalTopping}
                  setAdicionalTopping={setAdicionalTopping}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <Button variant="default" className="w-full p-4 h-15 flex gap-3"
            onClick={() => { setOpenDialog(false), addToCart(pizza.id, pizza.name, crust, pizza.image, size, aditionalTopping) }}>
            <div >Agregar a la carta</div>
            <div> | Precio: {price}</div>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default PizzaDetails;
