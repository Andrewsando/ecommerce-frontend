import { ENV } from '@/app/utils/constants';

export class Cart {
    add(gameId: any) {
        localStorage.setItem(ENV.CART, JSON.stringify([gameId]))
    }
}