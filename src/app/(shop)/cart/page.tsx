'use client';
import { Game } from '@/api';
import { Cart } from '@/components/Cart';
import { useCart } from '@/hooks';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const gameCtrl = new Game();

export default function CartPage() {

    const searchParams = useSearchParams();
    const step = searchParams.get('step')||1;

    const currentStep = Number(step)
    const [games, setGames] = useState<any[] >([])
    const {cart} = useCart();
    
    useEffect(() => {
        (async () => {
            try {
                const data:any[] = [];
                if(cart){
                    for await(const item of cart) {
                            const response = await gameCtrl.getGameById(item.id)
                            data.push( {...response.data, quantity: item.quantity})
                    }
                    setGames(data)
                }
            } catch (error) {
                console.error(error);
            }
        })()
    }, [cart])

    return (

        <div>
            {currentStep === 1 && <Cart.StepOne games={games} />}
            {currentStep === 2 && <Cart.StepTwo games={games}  />}
            {currentStep === 3 && <Cart.StepThree />}
        </div>

    )
}