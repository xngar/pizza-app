"use client"
import { CartContext } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';

const CartIcon = () => {

    const { isOpen, setisOpen } = useContext(CartContext);


    return (
        <div>
            <div className='bg-black rounded-full w-[20px] h-[20px] fixed bottom-12 right-4 z-20 text-white flex items-center justify-center text-sm '>3</div>

            <ShoppingCart onClick={() => setisOpen(!isOpen)} className='hover:bg-yellow-200 fixed transition-all duration-200  cursor-pointer bottom-5 right-5 shadow-2xl bg-yellow-400 text-black w-[36px] h-[36px] p-1  rounded-md' />
        </div>
    )
}

export default CartIcon