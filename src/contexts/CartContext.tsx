'use client';
import { ReactNode, createContext, useEffect, useState } from "react";

export const CartContext = createContext(null)

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

    const data = {
        cart,
        addCart: () => {},
        total,
        deleteItem: () => {},
        deleteAllItems: () => {},
        changeQuantityItem: () => {},
    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>

}