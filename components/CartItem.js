import Image from "next/image";
import { CircleMinus } from 'lucide-react';
import { CirclePlus } from 'lucide-react';

const CartItem = ({ pizza }) => {
  return <div>
    <div>

      <Image src={pizza.image} width={90} height={90} priority alt={pizza.name} />
    </div>
    <div>{pizza.name}</div>
    <div>
      <div>{pizza.crust} crust</div>
      <div>{pizza.size}</div>
      <div className="flex gap-2 items-center justify-center">
        <div><CircleMinus className="cursor-pointer" /></div>
        <div>3</div>
        <div><CirclePlus className="cursor-pointer" /></div>
      </div>
    </div>

  </div>;
};

export default CartItem;
