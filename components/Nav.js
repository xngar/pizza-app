import Image from "next/image"
import { ModeToggle } from "@/components/ModeToggle";

const Nav = () => {
  return <nav className=" bg-red-600/50 p-4 absolute flex gap-5 items-center">
    <div>
      <ModeToggle />
    </div>
    <div>
      <Image src="./logo.svg" width={100} height={100} alt="logo pizzeria" />
    </div>
  </nav>;
};

export default Nav;
