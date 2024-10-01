import { Button } from "./ui/button";

const CartBottom = () => {
  return <div>
    <div>
      <h2>Total compra : $ 350.000</h2>
    </div>
    <Button className="w-full" variant={"destructive"}  >Ir a Pagar </Button>
  </div>;
};

export default CartBottom;
