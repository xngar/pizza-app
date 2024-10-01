import { useState, useEffect } from "react";
import Image from "next/image";
import { Check } from 'lucide-react';

const Topping = ({ topping, aditionalTopping, setAdicionalTopping }) => {

  const [isChecked, setIsChecked] = useState(false);

  function handleCheked() {
    setIsChecked(!isChecked);
  }



  const handleTopping = () => {
    if (isChecked) {
      const newTopping = new Set([...aditionalTopping, { ...topping }]);
      setAdicionalTopping(Array.from(newTopping));

    }
    else {
      const newTopping = aditionalTopping.filter((toppingObj) => {
        return toppingObj.name != topping.name;
      })

      setAdicionalTopping(newTopping);
    }
  }


  useEffect(() => {
    handleTopping();

  }, [isChecked])


  return <div className={`${isChecked && "border-2 border-yellow-400"} w-full max-w-[100px] bg-slate-50 relative `}>
    <div className={`${isChecked ? "opacity-100" : "opacity-0"} absolute top-1 right-0 mb-8 h-[20px]`}>
      <Check />
    </div>
    <div className="text-sm text-center capitalize min-h-[40px]">{topping.name}</div>
    <Image src={topping.image} width={70} height={70} alt="" />
    <input type="checkbox" checked={isChecked} onClick={handleCheked} className="w-full h-full absolute top-0 opacity-0 cursor-pointer" />
  </div>;
};

export default Topping;
