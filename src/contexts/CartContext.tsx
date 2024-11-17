'use client';
import { Cart } from "@/api";
import { ReactNode, createContext, useEffect, useState } from "react";

const cartCtrl = new Cart();

interface CartContextType { 
    cart: Cart[] | null | any; 
    total: number; 
    addCart: (gameId: number) => void; 
    deleteItem: (itemId: number) => void; 
    deleteAllItems: () => void; 
    changeQuantityItem: (itemId: number, quantity: number) => void; }

export const CartContext = createContext<CartContextType | undefined>(undefined)

type CartProviderProps = {
    children: ReactNode;
}

export function CartProvider({children}:CartProviderProps){

const [cart, setCart]= useState<Cart[] | null>(null)
const [total, setTotal]= useState<number>(cartCtrl.count());


useEffect(() => {

   const response = cartCtrl.getAll()
   setCart(response); 
  
}, [])

const addCart = (gameId: number)=>{
    cartCtrl.add(gameId);
    refreshTotalCart();
}

const refreshTotalCart = () =>{
    setTotal(cartCtrl.count());
    setCart(cartCtrl.getAll());
}

const changeQuantityItem = (gameId:number, quantity:number)=> {
cartCtrl.changeQuantity(gameId,quantity)
refreshTotalCart()   
}

const deleteItem = (gameId:number) => {
cartCtrl.delete(gameId)
refreshTotalCart();
}

    const data = {
        cart,
        addCart,
        total,
        deleteItem,
        deleteAllItems: () => {},
        changeQuantityItem,
    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>

}