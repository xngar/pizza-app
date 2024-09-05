import Image from "next/image";

const SizeSelection = ({ pizza, setSize, size }) => {
  return <div>
    <div className="flex items-baseline justify-center gap-10">
      <label className="cursor-pointer flex flex-col justify-center items-center ">
        <Image className={`${size === "small" ? "border" : "filter saturate-0"}`} src={pizza.image} width={60} height={60} alt="pizza" />
        <input onChange={(e) => setSize(e.target.value)} type="radio" value="small" className="appearance-none" name="size" />
        <span>Small</span>
      </label>

      <label className="cursor-pointer flex flex-col justify-center items-center">
        <Image className={`${size === "medium" ? "border" : "filter saturate-0"}`} src={pizza.image} width={70} height={70} alt="pizza" />
        <input onChange={(e) => setSize(e.target.value)} type="radio" value="medium" className="appearance-none" name="size" />
        Medium
      </label>

      <label className="cursor-pointer flex flex-col justify-center items-center">
        <Image className={`${size === "large" ? "border" : "filter saturate-0"}`} src={pizza.image} width={80} height={80} alt="pizza" />
        <input onChange={(e) => setSize(e.target.value)} type="radio" value="large" className="appearance-none" name="size" />
        Large
      </label>
    </div>
  </div>;
};

export default SizeSelection;
