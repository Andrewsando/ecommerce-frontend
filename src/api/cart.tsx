import { ENV } from '@/app/utils/constants';

export class Cart {
    add(gameId: any) {
        localStorage.setItem(ENV.CART, JSON.stringify([gameId]))
    }

    getAll(){
        const response = localStorage.getItem(ENV.CART);
        
        if(!response){
            return [];
        } else {
            return JSON.parse(response)
        }
    }
}