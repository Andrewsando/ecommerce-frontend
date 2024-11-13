'use client';
import { Cart } from "@/api";
import { ReactNode, createContext, useEffect, useState } from "react";

const cartCtrl = new Cart();

interface CartContextType { 
    cart: CartItem[] | null; 
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

const [cart, setCart]= useState(null)
const [total, setTotal]= useState(0)

useEffect(() => {
    (async () => {
        try {

        } catch (error) {
            console.error(error);
        }
    })()
}, [])

const addCart = (gameId: number)=>{
    cartCtrl.add(gameId)
}

    const data = {
        cart,
        addCart,
        total,
        deleteItem: () => {},
        deleteAllItems: () => {},
        changeQuantityItem: () => {},
    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>

}