import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import SizeSelection from "../components/SizeSelection"


const PizzaDetails = ({ pizza }) => {

  const [size, setSize] = useState("small");
  const [price, setPrice] = useState(0);
  const [crust, setCrust] = useState("traditional");
  const [aditionalTopping, setAdicionalTopping] = useState([]);
  const [aditionalToppingPrice, setAdicionalToppingPrice] = useState(0);

  useEffect(() => {

    size === "small" ? setPrice(parseFloat(pizza.priceSm + aditionalToppingPrice).toFixed(2)) :
      size === "medium" ? setPrice(parseFloat(pizza.priceMd + aditionalToppingPrice).toFixed(2)) :
        size === "large" ? setPrice(parseFloat(pizza.priceLg + aditionalToppingPrice).toFixed(2)) :
          null;

  }, [size])

  useEffect(() => {
    if (aditionalTopping.length > 0) {
      const toppingPrice = aditionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0)
    }
    else {
      setAdicionalToppingPrice(0);
    }

  }, [aditionalTopping])


  return <div>
    <div>
      <Image src={pizza.image} width={350} height={350} alt={pizza.name} />
    </div>
    <div>
      {size === "small" ? "25 cms " : size === "medium" ? "30 cms " :
        size === "large" ? "35 cms " : ""}

      , {crust}
    </div>
    <div>
      <SizeSelection pizza={pizza} size={size} setSize={setSize} />
    </div>
    <div>
      {pizza.toppings?.map((top, item) => {
        return <div key={item}>{top.name}</div>
      })}
    </div>
    <div className="w-full">
      <Button variant="default" className="w-full p-4 h-15">Agregar a la carta</Button>

    </div>
    <div>Precio: {price}</div>


  </div>;
};

export default PizzaDetails;
